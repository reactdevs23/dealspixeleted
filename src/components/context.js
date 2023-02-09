import { useState, useContext, createContext, useRef } from "react";
const StateData = createContext();

export const ContextProvider = ({ children }) => {
  const bottom = useRef();
  const filteringText = [];
  const [question, setQuestion] = useState([]);
  const [comments, setComments] = useState([]);

  return (
    <StateData.Provider
      value={{
        question,
        setQuestion,
        comments,
        setComments,
        filteringText,
        bottom,
      }}
    >
      {children}
    </StateData.Provider>
  );
};
export const useDataContext = () => useContext(StateData);
