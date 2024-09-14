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
				<h1>Esercizi</h1>
				<table className="workout-card-exercise-table">
					<thead>
						<tr className="workoout-card-exercise-table-row">
							<th className="workout-card-exercise-table-heading">N</th>
							<th className="workout-card-exercise-table-heading">Nome</th>
							<th className="workout-card-exercise-table-heading">Set</th>
							<th className="workout-card-exercise-table-heading">
								Ripetizioni
							</th>
							<th className="workout-card-exercise-table-heading">Peso</th>
							<th className="workout-card-exercise-table-heading">Note</th>
						</tr>
					</thead>
					<tbody>
						{data.workout_data.exercises.map((exercise, index) => {
							return (
								<tr key={index} className="workoout-card-exercise-table-row">
									<td className="workout-card-exercise-table-cell">
										{index + 1}
									</td>
									<td className="workout-card-exercise-table-cell">
										{exercise.name}
									</td>
									<td className="workout-card-exercise-table-cell">
										{exercise.sets}
									</td>
									<td className="workout-card-exercise-table-cell">
										{exercise.reps}
									</td>
									<td className="workout-card-exercise-table-cell">
										{exercise.weight}
									</td>
									<td className="workout-card-exercise-table-cell">
										{exercise.notes}
									</td>
								</tr>
							);
						})}
					</tbody>
				</table>
			</div>
		</div>
	);
}
