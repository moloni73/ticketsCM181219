import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";

import "../../styles/modal.scss";
import { loginButton } from "./loginbutton";

export const Navbar = () => {
	let usuario = "";
	let pass = "";

	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">App Logo</span>
			</Link>
			<div className="ml-auto">
				<Link to="/calendar">
					<button className="btn btn-success btn-lg">Mi Agenda</button>
				</Link>
			</div>

			<div className="ml-auto">
				<button className="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter">
					Login
				</button>

				<div
					className="modal fade"
					id="exampleModalCenter"
					tabIndex="-1"
					role="dialog"
					aria-labelledby="exampleModalCenterTitle"
					aria-hidden="true">
					<div className="modal-dialog modal-lg modal-dialog-centered" role="document">
						<div className="modal-content">
							<div className="modal-header">
								<h5 className="modal-title" id="exampleModalCenterTitle">
									Selecciona tu metodo de ingreso
								</h5>
								<button type="button" className="close" data-dismiss="modal" aria-label="Close">
									<span aria-hidden="true">&times;</span>
								</button>
							</div>
							<div className="modal-body">
								{/*aca comienza el codigo insertado*/}
								<div className="container mybackground">
									<form>
										<div className="row logrow">
											<div className="vl">
												<span className="vl-innertext">o</span>
											</div>

											<div className="col logcol">
												<a href="#" className="fb btn">
													<FontAwesomeIcon icon={faFacebook} /> Ingresa con Facebook
												</a>
											</div>

											<div className="col logcol">
												<div className="hide-md-lg">
													<p>Ingresa con YoVoy!</p>
												</div>

												<input
													className="input myinput"
													type="text"
													name="username"
													placeholder="Email"
													required
												/>
												<input
													className="input myinput"
													type="password"
													name="password"
													placeholder="Contraseña"
													required
												/>
												<input type="submit" value="Login" />
											</div>
										</div>
									</form>
								</div>
								{/*aca termina*/}
							</div>
							{/*aca empieza*/}
							<div className="bottom-container">
								<div className="row">
									<div className="col">
										<Link to="/register">
											<a style={{ color: "white" }} className="btn">
												Registrate
											</a>
										</Link>
									</div>
									<div className="col">
										<div style={{ color: "white" }} className="btn" data-toggle="modal">
											¿Olvidaste tu Contraseña?
										</div>
									</div>
								</div>
							</div>
							{/*aca termina*/}

							{/*<div className="modal-footer">
									<button type="button" className="btn btn-secondary" data-dismiss="modal">
										Close
									</button>
									<button type="button" className="btn btn-primary">
										Save changes
									</button>
    </div>*/}
						</div>
					</div>
				</div>
			</div>
			<div className="ml-auto">
				<Link to="/profile">
					<button className="btn btn-primary">Profile</button>
				</Link>
			</div>

			<loginButton />
		</nav>
	);
};
