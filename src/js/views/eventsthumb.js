import React from "react";
import { Link } from "react-router-dom";
import "../../styles/home.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusSquare } from "@fortawesome/free-regular-svg-icons";

export const EventsThumbnails = () => {
	return (
		<div>
			<div className="row justify-content-center">
				<input
					className="form-control mb-3 col-8"
					type="text"
					placeholder="Te ayudo a encontrar tu destino..."
				/>
			</div>

			<div className="row">
				<div className="col-2 bg-light">
					<h2>Filtros</h2>
					<br />
					<div className="accordion" id="accordionExample">
						<div className="card">
							<div className="card-header" id="headingOne">
								<h2 className="mb-0">
									<button
										className="btn btn-link"
										type="button"
										data-toggle="collapse"
										data-target="#collapseOne"
										aria-expanded="true"
										aria-controls="collapseOne">
										Region
									</button>
								</h2>
							</div>

							<div
								id="collapseOne"
								className="collapse show"
								aria-labelledby="headingOne"
								data-parent="#accordionExample">
								<div className="card-body">
									<div className="form-check ml-2">
										<input className="form-check-input" type="checkbox" value="" />
										<label className="form-check-label">Aisén del G. Carlos Ibáñez del Campo</label>
									</div>
									<div className="form-check ml-2">
										<input className="form-check-input" type="checkbox" value="" />
										<label className="form-check-label">Antofagasta</label>
									</div>
									<div className="form-check ml-2">
										<input className="form-check-input" type="checkbox" value="" />
										<label className="form-check-label">Arica y Parinacota</label>
									</div>

									<div className="form-check ml-2">
										<input className="form-check-input" type="checkbox" value="" />
										<label className="form-check-label">Atacama</label>
									</div>
									<div className="form-check ml-2">
										<input className="form-check-input" type="checkbox" value="" />
										<label className="form-check-label">Biobío</label>
									</div>
									<div className="form-check ml-2">
										<input className="form-check-input" type="checkbox" value="" />
										<label className="form-check-label">Coquimbo</label>
									</div>
									<div className="form-check ml-2">
										<input className="form-check-input" type="checkbox" value="" />
										<label className="form-check-label">La Araucanía</label>
									</div>
									<div className="form-check ml-2">
										<input className="form-check-input" type="checkbox" value="" />
										<label className="form-check-label">
											Libertador General Bernardo O’Higgins
										</label>
									</div>
									<div className="form-check ml-2">
										<input className="form-check-input" type="checkbox" value="" />
										<label className="form-check-label">Los Lagos</label>
									</div>
									<div className="form-check ml-2">
										<input className="form-check-input" type="checkbox" value="" />
										<label className="form-check-label">Los Ríos</label>
									</div>
									<div className="form-check ml-2">
										<input className="form-check-input" type="checkbox" value="" />
										<label className="form-check-label">Magallanes y de la Antártica Chilena</label>
									</div>
									<div className="form-check ml-2">
										<input className="form-check-input" type="checkbox" value="" />
										<label className="form-check-label">Maule</label>
									</div>
									<div className="form-check ml-2">
										<input className="form-check-input" type="checkbox" value="" />
										<label className="form-check-label">Metropolitana de Santiago</label>
									</div>
									<div className="form-check ml-2">
										<input className="form-check-input" type="checkbox" value="" />
										<label className="form-check-label">Ñuble</label>
									</div>
									<div className="form-check ml-2">
										<input className="form-check-input" type="checkbox" value="" />
										<label className="form-check-label">Tarapacá</label>
									</div>
									<div className="form-check ml-2">
										<input className="form-check-input" type="checkbox" value="" />
										<label className="form-check-label">Valparaíso</label>
									</div>
								</div>
							</div>
						</div>
						<div className="card">
							<div className="card-header" id="headingTwo">
								<h2 className="mb-0">
									<button
										className="btn btn-link collapsed"
										type="button"
										data-toggle="collapse"
										data-target="#collapseTwo"
										aria-expanded="false"
										aria-controls="collapseTwo">
										Categoria
									</button>
								</h2>
							</div>
							<div
								id="collapseTwo"
								className="collapse"
								aria-labelledby="headingTwo"
								data-parent="#accordionExample">
								<div className="card-body">
									<div className="form-check ml-2">
										<input className="form-check-input" type="checkbox" value="" />
										<label className="form-check-label">Musica</label>
									</div>{" "}
									<div className="form-check ml-2">
										<input className="form-check-input" type="checkbox" value="" />
										<label className="form-check-label">Deportes</label>
									</div>{" "}
									<div className="form-check ml-2">
										<input className="form-check-input" type="checkbox" value="" />
										<label className="form-check-label">Teatro y Cine</label>
									</div>{" "}
									<div className="form-check ml-2">
										<input className="form-check-input" type="checkbox" value="" />
										<label className="form-check-label">Otros</label>
									</div>{" "}
									<div className="form-check ml-2">
										<input className="form-check-input" type="checkbox" value="" />
										<label className="form-check-label">Danza</label>
									</div>{" "}
									<div className="form-check ml-2">
										<input className="form-check-input" type="checkbox" value="" />
										<label className="form-check-label">Infantil</label>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="row col-10 float-right">
					<div className="col-2 mb-4">
						<Link to="/event" className="text-decoration-none">
							<div className="card">
								<img src="https://via.placeholder.com/140x100" className="card-img-top" alt="..." />
								<div className="card-body">
									<h5 className="card-title">Concierto de Primavera</h5>
								</div>
								<div className="card-footer">
									<small className="text-muted">Musica</small>
									<FontAwesomeIcon icon={faPlusSquare} />
								</div>
							</div>
						</Link>
					</div>
					<div className="col-2 mb-4">
						<Link to="/event" className="text-decoration-none">
							<div className="card">
								<img src="https://via.placeholder.com/140x100" className="card-img-top" alt="..." />
								<div className="card-body">
									<h5 className="card-title">Card title</h5>
								</div>
								<div className="card-footer">
									<small className="text-muted">Last updated 3 mins ago</small>
								</div>
							</div>
						</Link>
					</div>{" "}
					<div className="col-2 mb-4">
						<Link to="/event" className="text-decoration-none">
							<div className="card">
								<img src="https://via.placeholder.com/140x100" className="card-img-top" alt="..." />
								<div className="card-body">
									<h5 className="card-title">Card title</h5>
								</div>
								<div className="card-footer">
									<small className="text-muted">Last updated 3 mins ago</small>
								</div>
							</div>
						</Link>
					</div>{" "}
					<div className="col-2 mb-4">
						<Link to="/event" className="text-decoration-none">
							<div className="card">
								<img src="https://via.placeholder.com/140x100" className="card-img-top" alt="..." />
								<div className="card-body">
									<h5 className="card-title">Card title</h5>
								</div>
								<div className="card-footer">
									<small className="text-muted">Last updated 3 mins ago</small>
								</div>
							</div>
						</Link>
					</div>{" "}
					<div className="col-2 mb-4">
						<Link to="/event" className="text-decoration-none">
							<div className="card">
								<img src="https://via.placeholder.com/140x100" className="card-img-top" alt="..." />
								<div className="card-body">
									<h5 className="card-title">Card title</h5>
								</div>
								<div className="card-footer">
									<small className="text-muted">Last updated 3 mins ago</small>
								</div>
							</div>
						</Link>
					</div>{" "}
					<div className="col-2 mb-4">
						<Link to="/event" className="text-decoration-none">
							<div className="card">
								<img src="https://via.placeholder.com/140x100" className="card-img-top" alt="..." />
								<div className="card-body">
									<h5 className="card-title">Card title</h5>
								</div>
								<div className="card-footer">
									<small className="text-muted">Last updated 3 mins ago</small>
								</div>
							</div>
						</Link>
					</div>{" "}
					<div className="col-2 mb-4">
						<Link to="/event" className="text-decoration-none">
							<div className="card">
								<img src="https://via.placeholder.com/140x100" className="card-img-top" alt="..." />
								<div className="card-body">
									<h5 className="card-title">Card title</h5>
								</div>
								<div className="card-footer">
									<small className="text-muted">Last updated 3 mins ago</small>
								</div>
							</div>
						</Link>
					</div>{" "}
					<div className="col-2 mb-4">
						<Link to="/event" className="text-decoration-none">
							<div className="card">
								<img src="https://via.placeholder.com/140x100" className="card-img-top" alt="..." />
								<div className="card-body">
									<h5 className="card-title">Card title</h5>
								</div>
								<div className="card-footer">
									<small className="text-muted">Last updated 3 mins ago</small>
								</div>
							</div>
						</Link>
					</div>{" "}
					<div className="col-2 mb-4">
						<Link to="/event" className="text-decoration-none">
							<div className="card">
								<img src="https://via.placeholder.com/140x100" className="card-img-top" alt="..." />
								<div className="card-body">
									<h5 className="card-title">Card title</h5>
								</div>
								<div className="card-footer">
									<small className="text-muted">Last updated 3 mins ago</small>
								</div>
							</div>
						</Link>
					</div>{" "}
					<div className="col-2 mb-4">
						<Link to="/event" className="text-decoration-none">
							<div className="card">
								<img src="https://via.placeholder.com/140x100" className="card-img-top" alt="..." />
								<div className="card-body">
									<h5 className="card-title">Card title</h5>
								</div>
								<div className="card-footer">
									<small className="text-muted">Last updated 3 mins ago</small>
								</div>
							</div>
						</Link>
					</div>{" "}
					<div className="col-2 mb-4">
						<Link to="/event" className="text-decoration-none">
							<div className="card">
								<img src="https://via.placeholder.com/140x100" className="card-img-top" alt="..." />
								<div className="card-body">
									<h5 className="card-title">Card title</h5>
								</div>
								<div className="card-footer">
									<small className="text-muted">Last updated 3 mins ago</small>
								</div>
							</div>
						</Link>
					</div>{" "}
					<div className="col-2 mb-4">
						<Link to="/event" className="text-decoration-none">
							<div className="card">
								<img src="https://via.placeholder.com/140x100" className="card-img-top" alt="..." />
								<div className="card-body">
									<h5 className="card-title">Card title</h5>
								</div>
								<div className="card-footer">
									<small className="text-muted">Last updated 3 mins ago</small>
								</div>
							</div>
						</Link>
					</div>{" "}
					<div className="col-2 mb-4">
						<Link to="/event" className="text-decoration-none">
							<div className="card">
								<img src="https://via.placeholder.com/140x100" className="card-img-top" alt="..." />
								<div className="card-body">
									<h5 className="card-title">Card title</h5>
								</div>
								<div className="card-footer">
									<small className="text-muted">Last updated 3 mins ago</small>
								</div>
							</div>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};
