import CoreConceptsMain from "./components/CoreConeptMain.jsx";
import Header from "./components/Header/Header.jsx";
import Examples from "./components/Examples.jsx";
function App() {
  return (
    <>
      <div>
        <Header />
        <main>
          <CoreConceptsMain />
          <Examples />
        </main>
      </div>
    </>
  );
}

export default App;
