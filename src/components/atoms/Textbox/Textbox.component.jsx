const TextboxComponent = ({ fileContent }) => {

  return (
    <textarea className="h-full w-full p-4 bg-white border-2 border-black rounded-md text-sm text-[#6B6B6B]" value={fileContent} disabled />
  );
};

export default TextboxComponent;