import React, { useEffect, useRef, useState } from 'react';
export default function AddWorkoutDialog() {
	const [workout, setWorkout] = useState({
		name: '',
		desc: '',
		exercises: [{ name: '', sets: '', reps: '' }],
		last: '',
	});
	function handleWorkoutChange(e, index) {
		const { name, value } = e.target;
		console.log(name, index);
		if (index === undefined) {
			// If no index is provided, it's a general workout field
			setWorkout((prevWorkout) => ({
				...prevWorkout,
				[name]: value,
			}));
		} else {
			// Update exercise at specific index
			const updatedExercises = workout.exercises.map((exercise, i) =>
				i === index ? { ...exercise, [name]: value } : exercise
			);
			setWorkout((prevWorkout) => ({
				...prevWorkout,
				exercises: updatedExercises,
			}));
		}
	}

	function addExercise() {
		setWorkout((prevWorkout) => ({
			...prevWorkout,
			exercises: [...prevWorkout.exercises, { name: '', sets: '', reps: '' }],
		}));
	}
	function removeExercise(e, index) {
		console.log(index);
		console.log(workout);
		setWorkout((prevWorkout) => ({
			...prevWorkout,
			exercises: prevWorkout.exercises.filter((exercise) => {
				return exercise !== prevWorkout.exercises[index];
			}),
		}));
	}

	function handleReset(e) {
		e.preventDefault();
		setWorkout({
			name: '',
			desc: '',
			exercises: [{ name: '', sets: '', reps: '' }],
		});
	}
	function handleSubmit(e) {
		e.preventDefault();
		const token = localStorage.getItem('token');

		// Handle form submission
		console.log(workout);
		fetch('http://localhost:5000/api/workouts/add', {
			method: 'POST',
			body: JSON.stringify(workout),
			headers: {
				'Content-type': 'application/json',
				Authorization: `Bearer ${token}`,
			},
		})
			.then((data) => data.json())
			.then((res) => console.log(res));
	}
	return (
		<div className="add-workout-dialog-content">
			<h1>Inserisci i dati della tua scheda di allenamento</h1>
			<form action="" onSubmit={handleSubmit} className="add-workout-form">
				<div className="add-workout-form-field">
					<label className="add-workout-form-label" htmlFor="workout_name">
						Nome Allenamento
					</label>
					<input
						className="add-workout-form-input"
						type="text"
						name="name"
						id="workout_name"
						value={workout.name}
						onChange={handleWorkoutChange}
					/>
				</div>
				<div className="add-workout-form-field">
					<label className="add-workout-form-label" htmlFor="workout_desc">
						Descrizione allenamento
					</label>
					<input
						className="add-workout-form-input"
						type="text"
						id="workout_desc"
						name="desc"
						value={workout.desc}
						onChange={handleWorkoutChange}
					/>
				</div>
				<div className="add-workout-form-field">
					<label className="add-workout-form-label" htmlFor="workout_last">
						Durata allenamento
					</label>
					<input
						className="add-workout-form-input"
						type="time"
						id="workout_last"
						name="last"
						value={workout.last}
						onChange={handleWorkoutChange}
					/>
				</div>
				<div className="add-workout-form-field ">
					{workout.exercises.map((exercise, index) => {
						return (
							<div className={'add-workout-exercise'} key={index}>
								<h1>Exercise {index + 1}</h1>
								<label htmlFor={`exercise-name-${index}`}>Exercise Name</label>
								<input
									type="text"
									name={`name`}
									id={`exercise-name-${index}`}
									value={exercise.name}
									onChange={(e) => handleWorkoutChange(e, index)}
									className="add-workout-form-input"
								/>
								<label htmlFor={`exercise-sets-${index}`}>Exercise Sets</label>
								<input
									type="number"
									name={`sets`}
									id={`exercise-sets-${index}`}
									value={exercise.sets}
									onChange={(e) => handleWorkoutChange(e, index)}
									className="add-workout-form-input"
								/>
								<label htmlFor={`exercise-reps-${index}`}>Exercise Reps</label>
								<input
									type="number"
									name={`reps`}
									id={`exercise-reps-${index}`}
									value={exercise.reps}
									onChange={(e) => handleWorkoutChange(e, index)}
									className="add-workout-form-input"
								/>
								<button onClick={(e) => removeExercise(e, index)}>
									Remove Exercise
								</button>
							</div>
						);
					})}
				</div>
				<button
					onClick={(e) => {
						e.preventDefault();
						addExercise();
					}}
				>
					Aggiungi esercizio
				</button>
				<button onClick={handleReset}>Resetta</button>
				<button type="submit">Invia</button>
			</form>
		</div>
	);
}
