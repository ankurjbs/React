import TabButton from "./TabButton";
import { EXAMPLES } from "../data";
import { useState } from "react";

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
    <section id="examples">
      <h2>Examples</h2>
      <menu>
        <TabButton
          isSelected={selectedValue === "components"}
          onSelect={() => selectHandler("components")}
        >
          Components
        </TabButton>
        <TabButton
          isSelected={selectedValue === "jsx"}
          onSelect={() => selectHandler("jsx")}
        >
          JSX{" "}
        </TabButton>
        <TabButton
          isSelected={selectedValue === "props"}
          onSelect={() => selectHandler("props")}
        >
          Props{" "}
        </TabButton>
        <TabButton
          isSelected={selectedValue === "state"}
          onSelect={() => selectHandler("state")}
        >
          State{" "}
        </TabButton>
      </menu>
      {tabContent}
    </section>
  );
}
