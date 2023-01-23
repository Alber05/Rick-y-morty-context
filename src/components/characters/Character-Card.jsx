import React from "react";
import "./characters.css";


export function CharacterCard({ characters }) {
  return characters.map((item, index) => (
    <article key={index} className="card">
      <div className="card__image-container">
        <img className="card__image" src={item.image} />
      </div>
      <section className="card__name">
        <h2 className="card__name-title">{item.name}</h2>
      </section>
      <section className="card__info">
        <div className="card__info-wrapper status">
          <span>Estado del personaje</span>
          <div>
            <span>
              {item.status == "Alive"
                ? "Vivo"
                : item.status == "Dead"
                ? "Muerto"
                : "Desconocido"}
            </span>
            <img
              src={
                item.status == "Alive"
                  ? "../src/assets/alive.png"
                  : item.status == "Dead"
                  ? "../src/assets/dead.png"
                  : "../src/assets/unknow.png"
              }
            />
          </div>
        </div>
        <div className="card__info-wrapper gender">
          <span>Especie del personaje</span>
          <span>{item.gender}</span>
        </div>
        <div className="card__info-wrapper location">
          <span>Localización del personaje</span>
          <span>{item.location.name}</span>
        </div>
      </section>
    </article>
  ));
}
