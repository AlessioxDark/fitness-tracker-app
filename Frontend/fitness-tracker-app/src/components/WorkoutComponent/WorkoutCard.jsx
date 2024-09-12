import React, { useEffect, useState } from 'react';
import WorkoutPage from './DialogContents/WorkoutPage';
export default function WorkoutCard({ toggleDialog, setDialogContent }) {
	useEffect(() => {}, []);
	return (
		<div
			className="workout-card"
			onClick={() => {
				setDialogContent(<WorkoutPage />);
				toggleDialog();
			}}
		></div>
	);
}
