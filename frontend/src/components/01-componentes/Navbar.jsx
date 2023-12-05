import React from "react";
import { Link } from "react-router-dom";
import Carousel from "./Carousel";

export const Navbar = () => {
  const images = [
    "https://images5.alphacoders.com/133/1331058.png",
    "https://images4.alphacoders.com/132/1323340.jpeg",
    "https://images7.alphacoders.com/121/1212908.jpg",
    "https://images8.alphacoders.com/872/872780.jpg",
    "https://images3.alphacoders.com/133/1331063.png",
    "https://images2.alphacoders.com/712/71210.jpg",
    "https://images2.alphacoders.com/712/71210.jpg",
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
