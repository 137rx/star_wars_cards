import React, { createContext, useState } from "react";

export const PreviousCategoriesContext = createContext();

export const PreviousCategoriesProvider = ({ children }) => {
  const [previousCategories, setPreviousCategories] = useState([]);

  return (
    <PreviousCategoriesContext.Provider
      value={{ previousCategories, setPreviousCategories }}
    >
      {children}
    </PreviousCategoriesContext.Provider>
  );
};
