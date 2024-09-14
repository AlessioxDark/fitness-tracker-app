import React, { useEffect, useState } from 'react';
export default function WorkoutCardDialog({ data }) {
	useEffect(() => {
		console.log(data);
	}, [data]);
	return (
		<div className="workout-card-dialog">
			<h1 className="workout-card-title">{data.workout_data.name}</h1>
			<p className="workout-card-desc">{data.workout_data.desc}</p>
			<div className="workout-card-exercises">
				{data.workout_data.exercises.map((exercise, index) => {
					return (
						<div key={index} className="workout-card-exercise-container">
							<p className="workout-card-exercise-text">
								<strong>{exercise.name}</strong> {'   '}
								{exercise.sets}x{exercise.reps}
							</p>
						</div>
					);
				})}
			</div>
		</div>
	);
}
