import React from "react";
import NavBar from "./Components/NavBar/NavBar";
import "./App.css"
import Banner from "./Components/Banner/Banner";
import RowPost from "./Components/RowPost/RowPost";
import{ actions,originals,ComedyMovies,HorrorMovies} from "./url"

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <RowPost  url={originals} title='Netflix Originals' />
      <RowPost url={actions} title ='Actions' isSmall />
      <RowPost  url={ComedyMovies} title='Comedy Movies' isSmall/>
      <RowPost  url={HorrorMovies} title='Horror Movies' isSmall/>


      
    </div>
  );
}

export default App;
