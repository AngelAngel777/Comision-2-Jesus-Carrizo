import React from "react";
import { Link } from "react-router-dom";
import Carousel from "./Carousel";

import img1 from '../../assets/img-slider/img1.jpg';
import img2 from '../../assets/img-slider/img2.jpg';
import img3 from '../../assets/img-slider/img3.jpg';
import img4 from '../../assets/img-slider/img4.jpg';
import img5 from '../../assets/img-slider/img5.jpg';
import img6 from '../../assets/img-slider/img6.jpg';
import img7 from '../../assets/img-slider/img7.jpg';
import img8 from '../../assets/img-slider/img8.jpg';

export const Navbar = () => {
  const images = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
  ];

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">

        <Carousel images={images} />
      <div className="container-fluid nav">
        <a className="navbar-brand nav-borde1" href="/Publicar">
          Publica
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link active nav-borde" to="/">
                Inicio
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active nav-borde" to="/news">
                Noticias
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active nav-borde" to="/login">
                Iniciar sesion
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active nav-borde" to="/register">
                Registrarse
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active nav-borde" to="/perfil">
                Perfil
              </Link>
            </li>
            {/* <li className="nav-item">
            <Link className="nav-link active" to="/tareas">Tareas</Link>
          </li> */}
            {/* <li className="nav-item">
            <a className="nav-link disabled" aria-disabled="true">Disabled</a>
          </li> */}
          </ul>
        </div>
      </div>
    </nav>
  );
};