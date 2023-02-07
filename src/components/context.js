import { useState, useContext, createContext } from "react";
const StateData = createContext();

export const ContextProvider = ({ children }) => {
  const [postDeal, setPostDeal] = useState(false);
  const [signIn, setSignIn] = useState(false);
  const [askQuestion, setAskQuestion] = useState(false);
  const [writeReview, setWriteReview] = useState(false);

  return (
    <StateData.Provider
      value={{
        postDeal,
        setPostDeal,
        signIn,
        setSignIn,
        askQuestion,
        setAskQuestion,
        writeReview,
        setWriteReview,
      }}
    >
      {children}
    </StateData.Provider>
  );
};
export const useDataContext = () => useContext(StateData);
