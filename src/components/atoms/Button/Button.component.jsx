import { buttonConfig } from "./Button.config";

const ButtonComponent = ({ items }) => {
  return (
    <button className="p-2 bg-black rounded-md" {...buttonConfig[items]}>{items}</button>
  );
};

export default ButtonComponent;