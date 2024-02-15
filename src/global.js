import React, { createContext, useContext, useState } from 'react';

const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [dmode, setDmode] = useState(false);

  return (
    <GlobalContext.Provider value={{ dmode, setDmode }}>
      {children}
    </GlobalContext.Provider>
  );
};

export { GlobalContext };