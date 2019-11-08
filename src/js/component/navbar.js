import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">App Logo</span>
			</Link>
			<div className="ml-auto">
				<Link to="/calendar">
					<button className="btn btn-success btn-lg">Calendar</button>
				</Link>
			</div>
			<div className="ml-auto">
				<Link to="/profile">
					<button className="btn btn-primary">Profile</button>
				</Link>
			</div>
		</nav>
	);
};
