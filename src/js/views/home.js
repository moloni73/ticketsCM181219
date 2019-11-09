import React from "react";
import "../../styles/home.scss";
import { Link } from "react-router-dom";

export const Home = () => (
	<div>
		<div className="container">
			<div className="jumbotron">
				<h1 className="display-4 center">Here goes the EventMap</h1>
			</div>
		</div>
		<div className="container">
			<div className="row">
				<div className="col-4">
					<div className="card" style={{ width: 18 + "rem" }}>
						<Link to="/eventscat" className="text-decoration-none">
							<img src="" className="card-img-top" alt="" />

							<div className="card-body">
								<h5 className="card-title text-center">Musica</h5>
							</div>
						</Link>
					</div>
				</div>
				<div className="col-4">
					<div className="card" style={{ width: 18 + "rem" }}>
						<Link to="/eventscat" className="text-decoration-none">
							<img src="" className="card-img-top" alt="" />

							<div className="card-body">
								<h5 className="card-title text-center">Deportes</h5>
							</div>
						</Link>
					</div>
				</div>
				<div className="col-4">
					<div className="card" style={{ width: 18 + "rem" }}>
						<Link to="/eventscat" className="text-decoration-none">
							<img src="" className="card-img-top" alt="" />

							<div className="card-body">
								<h5 className="card-title text-center">Teatro y Cine</h5>
							</div>
						</Link>
					</div>
				</div>
			</div>
			<div className="row">
				<div className="col-4">
					<div className="card" style={{ width: 18 + "rem" }}>
						<Link to="/eventscat" className="text-decoration-none">
							<img src="" className="card-img-top" alt="" />

							<div className="card-body">
								<h5 className="card-title text-center">Otros</h5>
							</div>
						</Link>
					</div>
				</div>
				<div className="col-4">
					<div className="card" style={{ width: 18 + "rem" }}>
						<Link to="/eventscat" className="text-decoration-none">
							<img src="" className="card-img-top" alt="" />

							<div className="card-body">
								<h5 className="card-title text-center">Danza</h5>
							</div>
						</Link>
					</div>
				</div>
				<div className="col-4">
					<div className="card" style={{ width: 18 + "rem" }}>
						<Link to="/eventscat" className="text-decoration-none">
							<img src="" className="card-img-top" alt="" />
							<div className="card-body">
								<h5 className="card-title text-center">Infantil</h5>
							</div>
						</Link>
					</div>
				</div>
			</div>
		</div>
	</div>
);
