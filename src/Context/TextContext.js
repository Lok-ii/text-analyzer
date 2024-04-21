import { useContext } from "react";
import { createContext } from "react";

const TextContext = createContext({});

export const useText = () => {
  return useContext(TextContext);
};

export default TextContext;
