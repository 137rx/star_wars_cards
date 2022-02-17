import "./App.css";
import React, { useEffect, useState } from "react";
import Playground from "./components/Playground";

function App() {

  //render playground components and pass data props
  
  const [cards, setCards] = useState([]);

  const getData = async () => {
    try {
      const response = await fetch("https://swapi.dev/api/starships");
      const starships = await response.json();
      setCards(starships.results);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="App">
      {cards.length > 0 ? (
        <>
          <Playground cards={cards} />
        </>
      ) : (
        <h1>Loading</h1>
      )}
    </div>
  );
}

export default App;
