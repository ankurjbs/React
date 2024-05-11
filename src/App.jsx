
import CoreConcepts from './components/CoreConcepts';
import Header from './components/Header/Header.jsx';
import { CORE_CONCEPTS } from './data';

function App() {
  return (
    <>
      <div>
        <Header />
        <main>
          <section id='core-concepts'>
          <h2>Core Concepts</h2>
          {/*  First Way
          <ul>
            <CoreConcepts title={CORE_CONCEPTS[0].title} description={CORE_CONCEPTS[0]['description']} image={CORE_CONCEPTS[0]['image']} />
            <CoreConcepts {...CORE_CONCEPTS[1]} />
            <CoreConcepts {...CORE_CONCEPTS[2]} />
            <CoreConcepts {...CORE_CONCEPTS[3]} />
          </ul> */}

          {/*  Second Way */}
          <ul>
            <CoreConcepts concept={CORE_CONCEPTS[0]} />
            <CoreConcepts concept={CORE_CONCEPTS[1]} />
            <CoreConcepts concept={CORE_CONCEPTS[2]} />
            <CoreConcepts concept={CORE_CONCEPTS[3]} />
          </ul> 
          </section>
          
        </main>
      </div>
    </>
  );
}

export default App;
