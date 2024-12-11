import { styleConfig } from "./Title.config";

const TitleComponent = ({ items, type = 'regular' }) => {
  return (
    <p className={styleConfig[type]}>{items}</p >
  );
};

export default TitleComponent;