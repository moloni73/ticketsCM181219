import React, { useState, useEffect, useContext } from "react";
import "../../styles/home.scss";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div>
			<div className="container">
				<div className="jumbotron">
					<h1 className="display-4 center">Here goes the EventMap</h1>
				</div>
			</div>
			<div className="container">
				<div className="row">
					{store.categoria.map((item, index) => {
						return (
							<div className="col-4" key={index}>
								<div className="card" style={{ width: 18 + "rem" }}>
									<Link to="/eventscat" className="text-decoration-none">
										<img src="" className="card-img-top" alt="" />

										<div className="card-body">
											<h5 className="card-title text-center">{item}</h5>
										</div>
									</Link>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
};
