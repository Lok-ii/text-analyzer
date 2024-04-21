import { useRef } from "react";
import { useText } from "../Context/TextContext";

const Word = () => {
  const wordRef = useRef(null);
  const { wordState, handleWord, wordData, word, setWord } = useText();
  document.title = "Word Analyzer";
  return (
    <div className="w-full flex flex-col gap-8">
      <form
        className="flex flex-wrap gap-4 items-center w-full justify-between h-[4rem] md:h-[2.5rem]"
        onSubmit={(e) => {
          e.preventDefault();
          handleWord(wordRef.current.value);
        }}
      >
        <input
          type="text"
          className="w-full md:w-[87%] h-1/2 md:h-full rounded-lg outline-borderColor border-none pl-4"
          placeholder="Enter a word"
          defaultValue={"urban"}
          ref={wordRef}
          onChange={(e) => setWord(e.target.value)}
        />
        <button
          className={`text-white w-[10%] min-w-[8rem] md:min-w-0 h-1/2 md:h-full rounded-lg ${word.split(" ").length > 1 ? "bg-[#a87ede]" : "bg-buttonColor"} `}
          disabled={word.split(" ").length > 1 ? true : false}
        >
          Process Word
        </button>
      </form>
      <div className="w-full flex flex-col gap-4">
        <table className="w-full max-w-[25rem] border-collapse">
          <thead>
            <tr>
              <th className="text-left text-secondaryText bg-white border-[1px] border-borderColor py-2 px-4">
                Characters
              </th>
              <th className="text-left text-secondaryText bg-white border-[1px] border-borderColor py-2 px-4">
                Words
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="bg-lightBg border-[1px] border-borderColor p-4">
                {wordState.characters}
              </td>
              <td className="bg-lightBg border-[1px] border-borderColor p-4">
                {wordState.words}
              </td>
            </tr>
          </tbody>
        </table>
        {wordData.found ? (
          <div className="flex flex-col gap-4 border-[2px] border-borderColor p-6">
            <div className="flex">
              <p className="max-w-[10rem] min-w-[10rem] text-secondaryText font-semibold text-lg">
                Definition:{" "}
              </p>
              <p className="font-semibold">{wordData.definition}</p>
            </div>
            <div className="flex">
              <p className="max-w-[10rem] min-w-[10rem] text-secondaryText font-semibold text-lg">
                Parts of speech:{" "}
              </p>
              <p className="font-semibold">{wordData.partOfSpeech}</p>
            </div>
            <div className="flex">
              <p className="max-w-[10rem] min-w-[10rem] text-secondaryText font-semibold text-lg">
                Synonyms:{" "}
              </p>
              <p className="font-semibold">
                {wordData.synonyms.length > 0
                  ? wordData.synonyms.join(", ")
                  : "Not found"}
              </p>
            </div>
            <div className="flex">
              <p className="max-w-[10rem] min-w-[10rem] text-secondaryText font-semibold text-lg">
                Antonyms:{" "}
              </p>
              <p className="font-semibold">
                {wordData.antonyms.length > 0
                  ? wordData.antonyms.join(", ")
                  : "Not found"}
              </p>
            </div>
          </div>
        ) : (
          <div className="flex flex-col gap-4 border-[2px] border-borderColor p-6">
            <div className="flex">
              <p className="max-w-[10rem] min-w-[10rem] text-secondaryText font-semibold text-lg">
                Title:{" "}
              </p>
              <p className="font-semibold">{wordData.title}</p>
            </div>
            <div className="flex">
              <p className="max-w-[10rem] min-w-[10rem] text-secondaryText font-semibold text-lg">
                Message:{" "}
              </p>
              <p className="font-semibold">{wordData.message}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Word;
