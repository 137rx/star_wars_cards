import React, { useEffect, useState, useContext } from "react";
import "../css/card.css";
import Card from "./Card";
import Score from "./Score";
import { CompareContext } from "../useContext/CompareContext";
import { PreviousCategoriesContext } from "../useContext/PreviousCategoriesContext";
import { PreviousCardsContext } from "../useContext/PreviousCardsContext";
import "../css/playground.css";

const Playground = ({ cards }) => {
  //render cards if name not in previousCards array, score board and button to generate new card


  const [userCard, setUserCard] = useState({});
  const [computerCard, setComputerCard] = useState({});
  const { setCompare } = useContext(CompareContext);
  const [selectedFromCard, setSelectedFromCard] = useState([]);
  const { previousCategories, setPreviousCategories } = useContext(
    PreviousCategoriesContext
  );
  const { previousCards, setPreviousCards } = useContext(PreviousCardsContext);

  const randomCard = (state) => {
    let card = cards[Math.floor(Math.random() * cards.length)];

    if (
      !previousCards.includes(card.name) &&
      card.name != userCard.name &&
      card.name != computerCard.name
    ) {
      return state(card);
    } else {
      randomCard(state);
    }
  };

  useEffect(() => {
    randomCard(setUserCard);
    randomCard(setComputerCard);
    setPreviousCards([...previousCards, userCard.name, computerCard.name]);
  }, []);

  const handleNewCard = () => {
    randomCard(setUserCard);

    randomCard(setComputerCard);
    setPreviousCards([...previousCards, userCard.name, computerCard.name]);

    setCompare("");
    setSelectedFromCard([]);
    setPreviousCategories([]);
  };

  return (
    <div className="playground container">
      {Object.keys(userCard).length > 0 ? (
        <>
          <div className="cards">
            <Card data={userCard} type={"user"} />

            <Card data={computerCard} type={"computer"} />
          </div>
          <div className="score-buttons">
            <Score userCard={userCard} computerCard={computerCard} />
            <button onClick={handleNewCard}>New Card</button>
          </div>
        </>
      ) : (
        <h1>Loading</h1>
      )}
    </div>
  );
};

export default Playground;
