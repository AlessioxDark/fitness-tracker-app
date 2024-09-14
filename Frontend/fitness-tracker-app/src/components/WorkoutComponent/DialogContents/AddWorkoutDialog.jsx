import { faCheck, faPlus, faX, fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useRef, useState } from 'react';
export default function AddWorkoutDialog({ toggleDialog }) {
	const [workout, setWorkout] = useState({
		name: '',
		desc: '',
		exercises: [{ name: '', sets: '', reps: '' }],
		last: '',
		color: '#000000',
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
		setWorkout({
			name: '',
			desc: '',
			exercises: [{ name: '', sets: '', reps: '' }],
			last: '',
		});
		toggleDialog(); // Close the dialog after submission
	}
	return (
		<div className="add-workout-dialog-content">
			<div className="title-btn-container">
				<h1 className="main-add-workout-title">Crea la tua Scheda</h1>
				<div className="add-misc-btn-container">
					<FontAwesomeIcon
						icon={faX}
						style={{ color: 'red', fontSize: '52px' }}
						onClick={toggleDialog}
					/>
				</div>
			</div>
			<form action="" onSubmit={handleSubmit} className="add-workout-form">
				<div className="add-workout-form-field">
					<label className="add-workout-form-label" htmlFor="workout_name">
						Nome Allenamento
					</label>
					<input
						className="add-workout-form-input"
						required
						type="text"
						name="name"
						id="workout_name"
						value={workout.name}
						onChange={handleWorkoutChange}
					/>
				</div>
				<div className="add-workout-form-field color-form-field">
					<label
						className="add-workout-form-label color-label"
						htmlFor="workout_color"
					>
						Colore Allenamento
					</label>
					<input
						className=" color-input"
						required
						type="color"
						name="color"
						id="workout_color"
						value={workout.color}
						onChange={handleWorkoutChange}
					/>
				</div>
				<div className="add-workout-form-field">
					<label className="add-workout-form-label" htmlFor="workout_desc">
						Descrizione allenamento
					</label>
					<input
						className="add-workout-form-input"
						required
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
						required
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
								<div className="first-exercise-section">
									<h1 className="exercise-title">Exercise {index + 1}</h1>
									<button
										className="remove-exercise-button"
										onClick={(e) => removeExercise(e, index)}
									>
										Remove Exercise
									</button>
								</div>
								<label
									htmlFor={`exercise-name-${index}`}
									className="add-workout-form-label exercise-label"
								>
									Exercise Name
								</label>
								<input
									type="text"
									name={`name`}
									id={`exercise-name-${index}`}
									value={exercise.name}
									onChange={(e) => handleWorkoutChange(e, index)}
									className="add-workout-form-input"
									required
								/>
								<label
									htmlFor={`exercise-sets-${index}`}
									className="add-workout-form-label exercise-label"
								>
									Exercise Sets
								</label>
								<input
									type="number"
									name={`sets`}
									id={`exercise-sets-${index}`}
									value={exercise.sets}
									onChange={(e) => handleWorkoutChange(e, index)}
									min={1}
									className="add-workout-form-input"
									required
								/>
								<label
									htmlFor={`exercise-reps-${index}`}
									className="add-workout-form-label exercise-label"
								>
									Exercise Reps
								</label>
								<input
									type="number"
									name={`reps`}
									id={`exercise-reps-${index}`}
									value={exercise.reps}
									min={1}
									onChange={(e) => handleWorkoutChange(e, index)}
									className="add-workout-form-input"
									required
								/>
							</div>
						);
					})}
				</div>
				<div className="add-btn-container">
					<button
						className="add-exercise-button"
						onClick={(e) => {
							e.preventDefault();
							addExercise();
						}}
					>
						<FontAwesomeIcon icon={faPlus} />
					</button>
				</div>
				<div className="add-btn-container" style={{ marginTop: '100px' }}>
					<button className="add-workout-send-btn" type="submit">
						Invia
					</button>
				</div>
			</form>
		</div>
	);
}
