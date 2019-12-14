import React, { useState, useEffect, useContext } from "react";
import { Component } from "react";
import { Link } from "react-router-dom";
import { LoginForm } from "./LoginForm";
import { Context } from "../store/appContext";


const EventsThumbnails = () => {


    return(
        <div className="col-2 mb-4">
        <Link to="/events-category/event" className="text-decoration-none">
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
    )
}