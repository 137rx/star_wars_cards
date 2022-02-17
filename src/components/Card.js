import React, { useEffect, useContext } from "react";
import "../css/card.css";
import swlogo from "../../src/img/starwars.png";

import { CompareContext } from "../useContext/CompareContext";
import { PreviousCardsContext } from "../useContext/PreviousCardsContext";

const Card = ({ data, type }) => {

  //checks if data is for user or computer and renders accordingly

  const { compare, setCompare } = useContext(CompareContext);

  const { previousCards, setPreviousCards } = useContext(PreviousCardsContext);

  useEffect(() => {
    setPreviousCards([...previousCards, data.name]);
  });

  const generateClass = (header) => {
    return compare == header ? "card-title highlight" : "card-title";
  };
  return (
    <div className="single-card card">
      <div className="card-head">
        <h4 className="title">{data.name}</h4>
        <img className="d-img-top" src={swlogo} alt="Card cap" />
      </div>
      <div className="card-body">
        {type == "user" ? (
          <>
            <p
              className={generateClass("cargo_capacity")}
              onClick={() => setCompare("cargo_capacity")}
            >
              Max speed: {data.cargo_capacity}
            </p>
            <p
              className={generateClass("cost_in_credits")}
              onClick={() => setCompare("cost_in_credits")}
            >
              Credit Cost: {data.cost_in_credits}
            </p>
            <p
              className={generateClass("passengers")}
              onClick={() => setCompare("passengers")}
            >
              Passengers: {data.passengers}
            </p>
            <p
              className={generateClass("films")}
              onClick={() => setCompare("films")}
            >
              Film Appearances: {data.films.length}{" "}
            </p>
          </>
        ) : (
          <>
            <p
              className="card-title"
              onClick={() => setCompare("cargo_capacity")}
            >
              Max speed: ??
            </p>
            <p
              className="card-title"
              onClick={() => setCompare("cost_in_credits")}
            >
              Credit Cost: ??
            </p>
            <p className="card-title" onClick={() => setCompare("passengers")}>
              Passengers: ??
            </p>
            <p className="card-title" onClick={() => setCompare("films")}>
              Film Appearances: ??
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default Card;
