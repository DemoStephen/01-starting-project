import "./Example.css";
import { data } from "../../data";
import { examples } from "../../data";
import TabButton from "../TabButton";
import { useState } from "react";
import TabContent from "../TabContent";
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
