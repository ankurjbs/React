import TabButton from "./TabButton";
import { EXAMPLES } from "../data";
import { useState } from "react";
import Sections from "./Sections";
import Tab from "./Tab";
export default function Examples() {
  const [selectedValue, setSelectedValue] = useState();
  function selectHandler(value) {
    setSelectedValue(value);
  }
  let tabContent = "Please Select any TAB";
  if (selectedValue) {
    tabContent = (
      <div id="tab-content">
        <h2>{EXAMPLES[selectedValue].title}</h2>
        <p>{EXAMPLES[selectedValue].description}</p>
        <pre>
          <code>{EXAMPLES[selectedValue].code}</code>
        </pre>
      </div>
    );
  }
  return (
    <Sections id="examples">
      <Tab buttonsContainer="menu" buttons={<> <TabButton
          isSelected={selectedValue === "components"}
          onClick={() => selectHandler("components")}
        >
          Components
        </TabButton>
        <TabButton
          isSelected={selectedValue === "jsx"}
          onClick={() => selectHandler("jsx")}
        >
          JSX
        </TabButton>
        <TabButton
          isSelected={selectedValue === "props"}
          onClick={() => selectHandler("props")}
        >
          Props
        </TabButton>
        <TabButton
          isSelected={selectedValue === "state"}
          onClick={() => selectHandler("state")}
        >
          State
        </TabButton></>}>
      {tabContent}
      </Tab>
     
    </Sections>
  );
}
