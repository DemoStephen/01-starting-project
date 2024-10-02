import Header from "./Components/Header/Header";
import CoreConcept from "./Components/CoreConcepts/CoreConcept";
import { data } from "./data";
import { examples } from "./data";
import TabButton from "./Components/TabButton";
import { useState } from "react";
import TabContent from "./Components/TabContent";
import { map } from "zod";
export default function App() {
  const [selecteTopic, setSelecteTopic] = useState("");
  function handleSelect(selectedBtn) {
    setSelecteTopic(selectedBtn);
  }
  return (
    <>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {data.map((item) => (
              <CoreConcept {...item} key={item.title} />
            ))}
          </ul>
        </section>
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
      </main>
    </>
  );
}
