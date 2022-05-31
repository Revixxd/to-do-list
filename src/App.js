
// importing components
import Header from "./components/Header/Header";
import InteractiveSection from "./components/InteractiveSection/InteractiveSection";
import ListElementsContainer from "./components/ListElements/ListElementsContainer";
import Footer from "./components/Footer/Footer";

// importing styling 
import {GlobalStyles} from "./components/globalstyling"
import React from "react";


function App() {

  const [currentTasks, setCurrentTasks] = React.useState([
    {
      id: 1,
      complite: false,
      content: "learn React"
    },
    {
      id: 2,
      complite: false,
      content: "learn js"
    },
  ])

  return (
    <>
      <GlobalStyles />
        <Header/>
        <InteractiveSection />
        <ListElementsContainer tasks = {currentTasks}/>
        <Footer/>
    </>
  );
}

export default App;
