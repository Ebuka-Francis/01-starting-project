import CoreConcepts from "./components/coreConcepts.jsx";
import Header from "./components/Header/Header.jsx";
import Examples from "./components/Examples.jsx";

// the concept of configuring datas is called props

function App() {


  return ( 
    <>
      <Header />
      <main>
        <CoreConcepts />
        <Examples />
        </main>
    </>
  );
}

export default App;
