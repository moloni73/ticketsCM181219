import React from "react";
import "../../styles/home.scss";

export const Calendar = () => (
	<div className="container">
		{/*	<div className="list-group">
			<a href="#" className="list-group-item list-group-item-action">
				<div className="d-flex w-100 justify-content-between">
					<h3 className="mb-1">Event Name</h3>
					<h5>Date</h5>
				</div>
				<p className="mb-1">Event Description. OnHover changes its color</p>
				<small>When clicked redirect to the event description view</small>
			</a>
</div>*/}

		<div className="media">
			<img src="https://picsum.photos/id/237/200/300" className="mr-3" alt="..." height="64px" width="64" />
			<div className="media-body ">
				<h5 className="mt-0">Mes</h5>
				Posible resumen de la cantidad de eventos en el mes, o alguna descripcion graciosa del mes en
				particular, como por ejemplo, Septiembre: Mes de la primavera, perfecto para admirar la naturaleza (no
				aplica para Platanos Orientales)
				<ul className="list-unstyled">
					<li className="media">
						<img
							src="https://picsum.photos/id/237/200/300"
							className="mr-3"
							alt="imagen de la categoria del evento"
							height="64px"
							width="64"
						/>
						<div className="media-body">
							<h5 className="mt-0 mb-1">List-based media object</h5>
							Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin.
							Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc
							ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
						</div>
					</li>
					<li className="media my-4">
						<img
							src="https://picsum.photos/id/237/200/300"
							className="mr-3"
							alt="imagen de la categoria del evento"
							height="64px"
							width="64"
						/>
						<div className="media-body">
							<h5 className="mt-0 mb-1">List-based media object</h5>
							Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin.
							Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc
							ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
						</div>
					</li>
					<li className="media">
						<img
							src="https://picsum.photos/id/237/200/300"
							className="mr-3"
							alt="imagen de la categoria del evento"
							height="64px"
							width="64"
						/>
						<div className="media-body">
							<h5 className="mt-0 mb-1">List-based media object</h5>
							Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin.
							Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc
							ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
						</div>
					</li>
				</ul>
			</div>
		</div>
	</div>
);
