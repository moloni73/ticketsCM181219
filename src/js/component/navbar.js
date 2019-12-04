import React from "react";
import { Link } from "react-router-dom";
import { LoginButton } from "./loginbutton";
import { DiaryButton } from "./DiaryButton";

import "../../styles/modal.scss";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">App Logo</span>
			</Link>

			<DiaryButton />

			<LoginButton />
		</nav>
	);
};
