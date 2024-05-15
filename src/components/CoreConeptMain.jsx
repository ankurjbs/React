import CoreConcepts from "./CoreConcepts";
import { CORE_CONCEPTS } from "../data";

export default function CoreConceptsMain() {
  return (
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
        {CORE_CONCEPTS.map((item) => (
          <CoreConcepts key={item.title} concept={item} />
        ))}

        {/* <CoreConcepts concept={CORE_CONCEPTS[0]} />
      <CoreConcepts concept={CORE_CONCEPTS[1]} />
      <CoreConcepts concept={CORE_CONCEPTS[2]} />
      <CoreConcepts concept={CORE_CONCEPTS[3]} /> */}
      </ul>
    </section>
  );
}
