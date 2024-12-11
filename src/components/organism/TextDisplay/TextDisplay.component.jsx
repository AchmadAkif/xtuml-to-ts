import { useState } from "react";
import { parseJSON } from "../../../utils/parser";

const TextDisplayComponent = ({ fileContent, setFileContent }) => {
  const [isParsed, setIsParsed] = useState(false);

  const handleParseJSON = () => {
    parseJSON(fileContent);
  };

  return (
    <div className="h-[calc(100%-200px)] w-full px-4 flex space-x-4">
      <div className="w-full flex flex-col">
        <textarea className="h-full w-full p-4 bg-white border-2 border-black rounded-md text-sm text-[#6B6B6B]" value={fileContent}></textarea>
        <button className="p-2 bg-black rounded-md" onClick={handleParseJSON}>Parse</button>
      </div>
      <div className="w-full flex flex-col">
        <textarea className="h-full w-full p-4 bg-white border-2 border-black rounded-md text-sm text-[#6B6B6B]"></textarea>
        <button className="p-2 bg-black rounded-md" disabled={!isParsed}>Translate</button>
      </div>
    </div>
  );
};

export default TextDisplayComponent;