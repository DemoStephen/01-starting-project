import { useState } from "react";
import { examples, data } from "../../data";
import TabButton from "../TabButton";
import TabContent from "../TabContent";
import "./Example.css";

export default function Example() {
  const [selecteTopic, setSelecteTopic] = useState("");
  function handleSelect(selectedBtn) {
    setSelecteTopic(selectedBtn);
  }
  return (
    <section id="examples">
      <h2>Examples</h2>
      <menu>
        {data.map(({ title }) => (
          <TabButton
            onSelect={() => handleSelect(title.toLocaleLowerCase())}
            isSelected={selecteTopic === title.toLocaleLowerCase()}
            key={title}
          >
            {title}
          </TabButton>
        ))}
      </menu>
      <TabContent {...examples[selecteTopic]} />
    </section>
  );
}
