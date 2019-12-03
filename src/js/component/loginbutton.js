import React, { Component } from "react";
import { Link } from "react-router-dom";

export const loginButton = () => {
	const logged = true;

	return (
		<div className="ml-auto">
			<button type="button" className="btn btn-danger">
				{logged ? "Logout" : "Login"}
			</button>
		</div>
	);

	// if (store.usuarioconectado) {

	// 	return (

	// 	);
	// } else {
	// 	return (
	// 		<div className="ml-auto">
	// 			<Link to="/profile">
	// 				<button type="button" className="btn btn-success">
	// 					Login
	// 				</button>
	// 			</Link>
	// 		</div>
	// 	);
	// }
};
