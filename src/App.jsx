import { useState } from "react";

import { Atomics } from "./components";
import { Organism } from "./components";

const App = () => {
  const [fileContent, setFileContent] = useState();

  return (
    <div className="h-[100vh] flex flex-col space-y-4">
      <Organism.HeaderComponent />
      <Atomics.InputComponent type='file' setFileContent={setFileContent} />
      <Organism.TextDisplayComponent fileContent={fileContent} setFileContent={setFileContent} />
    </div>
  );
};

export default App;