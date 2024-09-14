import { default as React, useEffect, useRef, useState } from 'react';
import AddWorkoutDialog from './DialogContents/AddWorkoutDialog';
import WorkoutCardDialog from './DialogContents/WorkoutCardDialog';
export default function MyWorkouts() {
	const [workoutData, setWorkoutData] = useState(null);
	const [dialogContent, setDialogContent] = useState(null);
	const dialogRef = useRef(null);
	useEffect(() => {
		fetchWorkouts();
	}, []);
	function toggleDialog() {
		if (!dialogRef.current) {
			return;
		}
		dialogRef.current.hasAttribute('open')
			? dialogRef.current.close()
			: dialogRef.current.showModal();
	}

	async function fetchWorkouts() {
		try {
			const token = localStorage.getItem('token');
			const response = await fetch('http://localhost:5000/api/workouts', {
				method: 'GET',
				headers: {
					Authorization: `Bearer ${token}`,
				},
			});
			const data = await response.json();

			setWorkoutData(data.data);
			if (!response.ok) {
				console.log('error with fetching workouts');
			}
		} catch (err) {
			console.log(err);
		}
	}
	return (
		<div className="my-workouts">
			<h1 className="my-workouts-title">My Workouts</h1>
			<div className="my-workouts-scroller">
				<div
					className="add-workout"
					onClick={() => {
						setDialogContent(<AddWorkoutDialog toggleDialog={toggleDialog} />);
						toggleDialog();
					}}
				>
					<span>+</span>
				</div>
				<dialog
					style={{ border: 'none', borderRadius: '10px' }}
					ref={dialogRef}
				>
					{dialogContent}
				</dialog>
				{workoutData &&
					workoutData.map((workout, index) => {
						return (
							<div
								key={index}
								className="workout-card"
								style={{ backgroundColor: `${workout.workout_data.color}` }}
								onClick={() => {
									setDialogContent(<WorkoutCardDialog data={workout} />);
									toggleDialog();
								}}
							>
								{workout.workout_data.name}
							</div>
						);
					})}
			</div>
		</div>
	);
}
