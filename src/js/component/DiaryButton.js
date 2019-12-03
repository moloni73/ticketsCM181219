import React from "react";
import { Link } from "react-router-dom";

export const DiaryButton = () => {
	return (
		<div className="ml-auto">
			<Link to="/calendar">
				<button className="btn btn-success btn-lg">Mi Agenda</button>
			</Link>
		</div>
	);
};
