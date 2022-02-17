import React, { createContext, useState } from "react";

export const CompareContext = createContext();

export const CompareProvider = ({ children }) => {
  const [compare, setCompare] = useState("");

  return (
    <CompareContext.Provider value={{ compare, setCompare }}>
      {children}
    </CompareContext.Provider>
  );
};
