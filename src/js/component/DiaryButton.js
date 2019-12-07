import React, { useState, useEffect, useContext } from "react";
import { Component } from "react";
import { Link } from "react-router-dom";
import { LoginForm } from "./LoginForm";
import { Context } from "../store/appContext";

export const DiaryButton = () => {
	const { store, actions } = useContext(Context);

	if (store.usuarioconectado == 1) {
		return (
			<div className="ml-auto">
				<Link to="/calendar">
					<button className="btn btn-success btn-lg">Mi Agenda</button>
				</Link>
			</div>
		);
	} else {
		return <div />;
	}
};
