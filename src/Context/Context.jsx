import { useEffect, useState } from "react";
import TextContext from "./TextContext";
import PropTypes from "prop-types";
import axios from "axios";

const Context = ({ children }) => {
  const [paraState, setParaState] = useState({
    characters: 0,
    words: 0,
    sentences: 0,
    paragraphs: 0,
    spaces: 0,
    punctuations: 0,
  });

  const [wordState, setWordState] = useState({ characters: 0, words: 0 });
  const [wordData, setWordData] = useState({
    found: true,
    synonyms: ["Town"],
    antonyms: ["Rural"],
    definition: `in, relating to, or characteristic of a town or city.\n "the urban population";`,
    partOfSpeech: "Noun",
  });
  const [word, setWord] = useState("urban");

  const handlePara = (text) => {
    setParaState(() => {
      const characters = text.length;
      const words = text.match(/\w+/g) || [];
      const sentences = text
        .split(".")
        .filter((sentence) => sentence.trim() !== "").length;
      const paragraphs = text
        .split("\n")
        .filter((paragraph) => paragraph.trim() !== "").length;
      const spaces = text.match(/\s/g) || [];
      const punctuations = text.match(/[^\w\s]/g) || [];
      return {
        characters,
        words: words.length,
        sentences,
        paragraphs,
        spaces: spaces.length,
        punctuations: punctuations.length,
      };
    });
  };

  const handleWord = async (text) => {
    setWordState(() => {
      const characters = text.length;
      const words = text.match(/\w+/g) || [];
      return {
        characters,
        words: words.length,
      };
    });

    try {
      const response = await axios.get(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${text}`
      );
      const data = response.data[0].meanings[0];
      setWordData(() => {
        return {
          found: true,
          synonyms:
            data.definitions[0].synonyms.length > 0
              ? data.definitions[0].synonyms
              : data.synonyms,
          antonyms:
            data.definitions[0].antonyms.length > 0
              ? data.definitions[0].antonyms
              : data.antonyms,
          definition: data.definitions[0].definition,
          partOfSpeech: data.partOfSpeech,
        };
      });
    } catch (error) {
      console.log(error.response.data);
      setWordData({
        found: false,
        message: error.response.data.message,
        title: error.response.data.title,
      });
    }
  };

  useEffect(() => {
    handleWord("urban");
  }, []);
  const value = {
    paraState,
    wordState,
    wordData,
    word,
    setWord,
    handleWord,
    handlePara,
  };
  return <TextContext.Provider value={value}>{children}</TextContext.Provider>;
};
Context.propTypes = {
  children: PropTypes.node.isRequired,
};
export default Context;
