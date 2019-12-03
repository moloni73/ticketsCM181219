import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { LoginButton } from "./loginbutton";

import "../../styles/modal.scss";
import { DiaryButton } from "./DiaryButton";

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
