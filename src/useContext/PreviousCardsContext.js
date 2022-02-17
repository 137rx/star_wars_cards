import React, { createContext, useState } from "react";

export const PreviousCardsContext = createContext();

export const PreviousCardsProvider = ({ children }) => {
  const [previousCards, setPreviousCards] = useState([]);

  return (
    <PreviousCardsContext.Provider value={{ previousCards, setPreviousCards }}>
      {children}
    </PreviousCardsContext.Provider>
  );
};
