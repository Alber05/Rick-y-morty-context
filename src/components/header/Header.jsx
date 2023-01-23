import React from "react";
import "./header.css";
import { NavLink } from "react-router-dom";

export function Header() {
  return (
    <header>
      <div className="logo-container">
        <img src="./src/assets/Rick_y_Morty.webp" alt="Móvil Menú" />
      </div>
      <div className="browser-container">
        <div className="tags-container">
          <NavLink to="/">
            <button id="characters-menu">Personajes</button>
          </NavLink>
          <NavLink to="/locations">
            <button id="locations-menu">Localizaciones</button>
          </NavLink>
          <NavLink to="/episodes">
            <button href="/episodes">Episodios</button>
          </NavLink>
        </div>
      </div>
    </header>
  );
}
