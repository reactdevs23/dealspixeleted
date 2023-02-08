import { useState, useContext, createContext, useRef } from "react";
const StateData = createContext();

export const ContextProvider = ({ children }) => {
  const bottom = useRef();
  const filteringText = [];
  const question = [
    {
      name: "Lima Islam   ",
      date: "06 Aug 2021",
      question: "is there any Lorem ipsum available?",
      answer: "Yes sir, Lorem Ipsum-H2105D Lorem Ipsum is simply dummy text",
    },
  ];
  const [submitQuestion, setSubmitQuestion] = useState(false);
  const [submitComment, setSubmitComment] = useState(false);

  return (
    <StateData.Provider
      value={{
        question,
        submitQuestion,
        setSubmitQuestion,
        submitComment,
        setSubmitComment,
        filteringText,
        bottom,
      }}
    >
      {children}
    </StateData.Provider>
  );
};
export const useDataContext = () => useContext(StateData);
