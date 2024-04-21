import { useText } from "../Context/TextContext";

const Paragraph = () => {
  document.title = "Paragraph Analyzer"
  const { paraState, handlePara } = useText();
  return (
    <div className="w-full flex flex-col gap-8">
      <textarea
        name=""
        id=""
        className="resize-none w-full h-[16rem] p-2 border-none outline-borderColor"
        placeholder="Type, or copy/paste your content here."
        onChange={(e) => handlePara(e.target.value)}
      ></textarea>
      <div className="w-full overflow-x-auto">
        <table className="w-full">
          <thead className="w-full">
            <tr className="w-full">
              <th className="text-left py-2 px-4 bg-white border-[1px] border-borderColor">
                Characters
              </th>
              <th className="text-left py-2 px-4 bg-white border-[1px] border-borderColor">
                Words
              </th>
              <th className="text-left py-2 px-4 bg-white border-[1px] border-borderColor">
                Sentences
              </th>
              <th className="text-left py-2 px-4 bg-white border-[1px] border-borderColor">
                Paragraphs
              </th>
              <th className="text-left py-2 px-4 bg-white border-[1px] border-borderColor">
                Spaces
              </th>
              <th className="text-left py-2 px-4 bg-white border-[1px] border-borderColor">
                Punctuations
              </th>
            </tr>
          </thead>
          <tbody className="w-full">
            <tr className="w-full">
              <td className="p-4 bg-lightBg border-[1px] border-borderColor">
                {paraState.characters}
              </td>
              <td className="p-4 bg-lightBg border-[1px] border-borderColor">
                {paraState.words}
              </td>
              <td className="p-4 bg-lightBg border-[1px] border-borderColor">
                {paraState.sentences}
              </td>
              <td className="p-4 bg-lightBg border-[1px] border-borderColor">
                {paraState.paragraphs}
              </td>
              <td className="p-4 bg-lightBg border-[1px] border-borderColor">
                {paraState.spaces}
              </td>
              <td className="p-4 bg-lightBg border-[1px] border-borderColor">
                {paraState.punctuations}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Paragraph;
