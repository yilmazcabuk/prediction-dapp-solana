import { createContext } from "react";

export const PredictionContext = createContext(undefined, undefined);

export const PredictionProvider = ({ children }) => {
  let connected = true;

  return (
    <PredictionContext.Provider
      value={{
        connected,
      }}
    >
      {children}
    </PredictionContext.Provider>
  );
};
