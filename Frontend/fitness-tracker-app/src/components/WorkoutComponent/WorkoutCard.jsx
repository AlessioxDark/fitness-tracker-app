import React from 'react';

export default function WorkoutCard({ toggleDialog, dialogRef }) {
	return <div className="workout-card" onClick={toggleDialog}></div>;
}
