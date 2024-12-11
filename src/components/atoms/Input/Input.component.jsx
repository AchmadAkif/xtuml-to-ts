import { useDispatch } from "react-redux";

import { readJson } from "../../../utils/readJson";

import { styleConfig } from "./Input.config";

const InputComponent = ({ type = 'text', setFileContent }) => {
  const dispatch = useDispatch();

  const handleReadFile = async (e) => {
    try {
      const fileContent = await readJson(e);
      setFileContent(fileContent);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <input type={type} {...styleConfig[type]} onChange={handleReadFile} />
    </>
  );
};

export default InputComponent;