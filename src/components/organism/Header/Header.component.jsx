import { TitleComponent } from "../../atoms";

const HeaderComponent = () => {
  return (
    <div className="bg-black py-2">
      <TitleComponent items="xtUML to Typescript" type="headingTitle" />
      <TitleComponent items="from xtUML JSON model to Typescript" type="headingSubtitle" />
    </div>
  );
};

export default HeaderComponent;