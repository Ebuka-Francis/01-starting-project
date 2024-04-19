import { useState } from "react";

import TabButton from "./TabButton";
import Tabs from "./Tabs";
import Section from "./Section";
import { EXAMPLES } from "../data";

export default function Examples() {
  const [selectedTopic, setSelectedTopic] = useState();
  // let tabContent = 'Please click a button';
  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton);
    // console.log(selectedTopic);
  }

  let tabContent = <div id="frame"><p> Please select a topic.</p></div>;

  if(selectedTopic) {
    tabContent = (
      <div id="tab-content">
      <h3>{EXAMPLES[selectedTopic].title}</h3>
      <p>{EXAMPLES[selectedTopic].description}</p>
      <pre>
        <code>{EXAMPLES[selectedTopic].code}</code>
      </pre>
    </div>
    );
  }
    
return (
    <Section title="Examples" id="examples">
      <Tabs buttons={
        <>
             <TabButton isSelected={selectedTopic === 'components'} onSelect={() => handleSelect("components")}>Component</TabButton>
             <TabButton isSelected={selectedTopic === 'JSX'} onSelect={() => handleSelect("JSX")}>JSX</TabButton>
             <TabButton isSelected={selectedTopic === 'props'} onSelect={() => handleSelect("props")}>Props</TabButton>
             <TabButton isSelected={selectedTopic === 'state'} onSelect={() => handleSelect("state")}>State</TabButton>
             </>
      }>
        
      {tabContent}
      </Tabs>
        </Section>
);
}