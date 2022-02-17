import React, { useEffect, useState, useContext } from "react";
import "../css/card.css";
import { CompareContext } from "../useContext/CompareContext";
import "../css/score.css";
import { PreviousCategoriesContext } from "../useContext/PreviousCategoriesContext";

const Score = ({ userCard, computerCard }) => {
  //generates and renders score and message

  const { previousCategories, setPreviousCategories } = useContext(
    PreviousCategoriesContext
  );

  const { compare } = useContext(CompareContext);
  const [userScore, setUserScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);
  const [message, setMessage] = useState("");

  const compareValues = (userValue, computerValue) => {
    setMessage("");
    if (compare.length > 0 && !previousCategories.includes(compare)) {
      if (isNaN(userValue) || isNaN(computerValue)) {
        setPreviousCategories(previousCategories.concat(compare));
        setMessage("Data not available, please choose another category");
      } else {
        if (userValue > computerValue) {
          setUserScore(userScore + 1);
          setMessage("You win");
          setPreviousCategories(previousCategories.concat(compare));
        } else if (userValue < computerValue) {
          setComputerScore(computerScore + 1);
          setMessage("You lose");
          setPreviousCategories(previousCategories.concat(compare));
        } else if (userValue == computerValue) {
          setMessage("Draw");
          setPreviousCategories(previousCategories.concat(compare));
        }
      }
    }
  };

  const generateScore = (userCard, computerCard, compare) => {
    return compare != "films"
      ? compareValues(userCard[compare], computerCard[compare])
      : compareValues(userCard[compare].length, computerCard[compare].length);
  };
  useEffect(() => {
    generateScore(userCard, computerCard, compare);
  }, [compare]);

  return (
    <div className="score-board">
      <p className="score">
        {userScore}:{computerScore}
      </p>

      <p className="message">{message}</p>
    </div>
  );
};

export default Score;
