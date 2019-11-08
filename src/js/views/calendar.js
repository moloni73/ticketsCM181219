import React from "react";
import "../../styles/home.scss";

export const Calendar = () => (
	<div className="container">
		<div className="list-group">
			<a href="#" className="list-group-item list-group-item-action">
				<div className="d-flex w-100 justify-content-between">
					<h3 className="mb-1">Event Name</h3>
					<h5>Date</h5>
				</div>
				<p className="mb-1">Event Description. OnHover changes its color</p>
				<small>When clicked redirect to the event description view</small>
			</a>
		</div>
	</div>
);
