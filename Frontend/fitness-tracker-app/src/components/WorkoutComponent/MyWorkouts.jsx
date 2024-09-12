import React, { useRef, useState } from 'react';
import AddWorkoutDialog from './DialogContents/AddWorkoutDialog';
import WorkoutCard from './WorkoutCard';

export default function MyWorkouts() {
	const [dialogContent, setDialogContent] = useState(null);
	const dialogRef = useRef(null);
	function toggleDialog() {
		if (!dialogRef.current) {
			return;
		}
		dialogRef.current.hasAttribute('open')
			? dialogRef.current.close()
			: dialogRef.current.showModal();
	}
	return (
		<div className="my-workouts">
			<h1 className="my-workouts-title">My Workouts</h1>
			<div className="my-workouts-scroller">
				<div
					className="add-workout"
					onClick={() => {
						setDialogContent(<AddWorkoutDialog />);
						toggleDialog();
					}}
				>
					<span>+</span>
				</div>
				<dialog ref={dialogRef}>{dialogContent}</dialog>
				<WorkoutCard toggleDialog={toggleDialog} />
				<WorkoutCard toggleDialog={toggleDialog} />
				<WorkoutCard toggleDialog={toggleDialog} />
				<WorkoutCard toggleDialog={toggleDialog} />
			</div>
		</div>
	);
}
