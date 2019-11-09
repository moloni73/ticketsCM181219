import React from "react";
import eventMusicImg from "../../img/musica.jpg";
import { Link } from "react-router-dom";
import { Consumer } from "../store/appContext";
import "../../styles/event.scss";
import PropTypes from "prop-types";

export const Event = () => {
	return (
		<div className="row">
			<div className="col-6">
				<div className="card">
					<div className="card-body">
						<img className="card-img-top" src={eventMusicImg} alt="Card image" />

						<div className="list-group">
							<p className="mb-1">Event Description</p>
							<button className="btn btn-success" onClick={""}>
								<span>addMyCalendar</span>
							</button>
						</div>
					</div>
				</div>
			</div>
			<div className="col-6">
				<div className="card">
					<div className="card-body">
						<h2 className="card-title">NAME Event</h2>
					</div>
					<div className="jumbotron">
						<h1 className="display-4 center">Here goes the EventMap</h1>
					</div>
				</div>

				<Link to="/">
					<span className="btn btn-primary btn-lg" href="#" role="button">
						Back home
					</span>
				</Link>
			</div>
		</div>
	);
};

/*export const Event = props => {
    return (
        <div className="container-fluid">
            <Consumer>
                {({ store, actions }) => {
                    return (
                        <div className="row">
                            <div className="col-6">
                                <div className="card">
                                    <div className="card-body">
                                        <img className="card-img-top" src={eventMusicImg} alt="Card image" />

                                        <div className="list-group">
                                            <p className="mb-1">{store.events[props.match.params.theid].description}Event Description. OnHover changes its color</p>
                                            <button className="btn btn-success"
                                            onClick={() => actions.addCalendar(store.events[props.match.params.theid])}>
                                            <span>addMyCalendar</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="card">
                                    <div className="card-body">
                                        <h2 className="card-title">
                                            {store.events[props.match.params.theid].name}
                                        </h2>
                                    </div>
                                    <div className="jumbotron">
                                        <h1 className="display-4 center">Here goes the EventMap</h1>
                                    </div>
                                </div>

                                <Link to="/">
                                    <span className="btn btn-primary btn-lg" href="#" role="button">
                                        Back home
									</span>
                                </Link>
                            </div>
                        </div>
                    );
                }}
            </Consumer>
        </div>
    );
};

Event.propTypes = {
	match: PropTypes.object
};*/
