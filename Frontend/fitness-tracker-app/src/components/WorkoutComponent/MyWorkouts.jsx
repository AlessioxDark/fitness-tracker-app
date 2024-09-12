import { default as React, useEffect, useRef, useState } from 'react';
import AddWorkoutDialog from './DialogContents/AddWorkoutDialog';
import WorkoutCard from './WorkoutCard';
export default function MyWorkouts() {
	const [workoutData, setWorkoutData] = useState(null);
	const [dialogContent, setDialogContent] = useState(null);
	const dialogRef = useRef(null);

	useEffect(() => {
		fetch('http://localhost:5000/api/workouts')
			.then((res) => res.json())
			.then((data) => console.log(data));
		// setWorkoutData((response) => response.json());
	});
	function toggleDialog() {
		if (!dialogRef.current) {
			return;
		}
		dialogRef.current.hasAttribute('open')
			? dialogRef.current.close()
			: dialogRef.current.showModal();
	}

	function fetchWorkouts() {}
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
				<WorkoutCard
					toggleDialog={toggleDialog}
					setDialogContent={setDialogContent}
				/>
				<WorkoutCard
					toggleDialog={toggleDialog}
					setDialogContent={setDialogContent}
				/>
				<WorkoutCard
					toggleDialog={toggleDialog}
					setDialogContent={setDialogContent}
				/>
				<WorkoutCard
					toggleDialog={toggleDialog}
					setDialogContent={setDialogContent}
				/>
			</div>
		</div>
	);
}
