import Header from "./Components/Header/Header";
import CoreConcept from "./Components/CoreConcepts/CoreConcept";
import { data } from "./data";
import { examples } from "./data";
import TabButton from "./Components/TabButton";
import { useState } from "react";
import TabContent from "./Components/TabContent";
export default function App() {
  const [selectedTopics, setSelectedTopics] = useState(
    "Please click the button"
  );
  const [tabContent, setTabContent] = useState({ ...examples.components });

  function handleSelect(seleectedBtn) {
    setSelectedTopics(seleectedBtn);
  }
  function handleTabContent() {
    if(selectedTopics === ''){

    }
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
              onSelect={() => handleSelect("Components")}
              seleectedBtn="Components"
            >
              Components
            </TabButton>
            <TabButton onSelect={() => handleSelect("JSX")} seleectedBtn="JSX">
              JSX
            </TabButton>
            <TabButton
              onSelect={() => handleSelect("Props")}
              seleectedBtn="Props"
            >
              Props
            </TabButton>
            <TabButton
              onSelect={() => handleSelect("State")}
              seleectedBtn="State"
            >
              State
            </TabButton>
          </menu>
          <TabContent {...tabContent} />
        </section>
      </main>
    </>
  );
}
