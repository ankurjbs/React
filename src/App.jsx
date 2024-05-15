import CoreConcepts from "./components/CoreConcepts";
import { useState } from "react";
import TabButton from "./components/TabButton.jsx";
import Header from "./components/Header/Header.jsx";
import { CORE_CONCEPTS } from "./data";
import { EXAMPLES } from "./data";

function App() {
  const [selectedValue,setSelectedValue] = useState();
  function selectHandler(value){
    setSelectedValue(value);
  }
  let tabContent = 'Please Select any TAB';
  if(selectedValue){
    tabContent = (<div id="tab-content">
    <h2>{EXAMPLES[selectedValue].title}</h2>
    <p>{EXAMPLES[selectedValue].description}</p>
    <pre>
      <code>
      {EXAMPLES[selectedValue].code}
      </code>
    </pre>
  </div>);
  }
  return (
    <>
      <div>
        <Header />
        <main>
          <section id="core-concepts">
            <h2>Core Concepts</h2>


             {/* First Way */}
          {/* <ul>
            <CoreConcepts title={CORE_CONCEPTS[0].title} description={CORE_CONCEPTS[0]['description']} image={CORE_CONCEPTS[0]['image']} />
            <CoreConcepts {...CORE_CONCEPTS[1]} />
            <CoreConcepts {...CORE_CONCEPTS[2]} />
            <CoreConcepts {...CORE_CONCEPTS[3]} />
          </ul> */}
            {/* Using List loop */}
            {/* {CORE_CONCEPTS.map((item)=>(<CoreConcepts {...item}/>))} */}



            
            {/*  Second Way */}
            <ul>
              {/* Listing using array map */}
              {CORE_CONCEPTS.map((item)=>(<CoreConcepts key= {item.title}concept={item}/>))}

              {/* <CoreConcepts concept={CORE_CONCEPTS[0]} />
              <CoreConcepts concept={CORE_CONCEPTS[1]} />
              <CoreConcepts concept={CORE_CONCEPTS[2]} />
              <CoreConcepts concept={CORE_CONCEPTS[3]} /> */}
            </ul>
          </section>
          <section id="examples">
          <h2>Examples</h2>
            <menu >

              <TabButton isSelected={selectedValue === 'components'} onSelect={()=>selectHandler('components')}>Components</TabButton>
              <TabButton isSelected={selectedValue === 'jsx'} onSelect={()=>selectHandler('jsx')}>JSX </TabButton>
              <TabButton isSelected={selectedValue === 'props'} onSelect={()=>selectHandler('props')}>Props </TabButton>
              <TabButton isSelected={selectedValue === 'state'} onSelect={()=>selectHandler('state')}>State </TabButton>
            </menu>
          </section>
          
          {tabContent}
        </main>
      </div>
    </>
  );
}

export default App;
