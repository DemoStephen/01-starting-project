import Header from "./Components/Header/Header";
import CoreConcept from "./Components/CoreConcepts/CoreConcept";
import { data } from "./data";
import { examples } from "./data";
import TabButton from "./Components/TabButton";
import { useState } from "react";
import TabContent from "./Components/TabContent";
export default function App() {
  const [selecteTopic, setSelecteTopic] = useState("");
  const [activeState, setActiveState] = useState("");
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
            <CoreConcept {...data[0]} />
            <CoreConcept {...data[1]} />
            <CoreConcept {...data[2]} />
            <CoreConcept {...data[3]} />
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton
              onSelect={() => handleSelect("components")}
              active={activeState}
            >
              Components
            </TabButton>
            <TabButton
              onSelect={() => handleSelect("jsx")}
              active={activeState}
            >
              JSX
            </TabButton>
            <TabButton
              onSelect={() => handleSelect("props")}
              active={activeState}
            >
              Props
            </TabButton>
            <TabButton
              onSelect={() => handleSelect("state")}
              active={activeState}
            >
              State
            </TabButton>
          </menu>
          <TabContent {...examples[selecteTopic]} />
        </section>
      </main>
    </>
  );
}
