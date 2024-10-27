import React, { createContext, useState } from "react";
import './App.css';
import Home from './Components/Home/Home';
import NavBar from './Navbar/NavBar';
import About from "./Components/About Me/About";


export const MyContext = createContext();

function App() {

  const [showMob, setShowMob] = useState(false);


  return (

    <MyContext.Provider
      value={{
        showMob: showMob,
        setShowMob: setShowMob,
      }}
    >


        <NavBar />
        <Home />
        <About />
       


    </MyContext.Provider>



  );
}

export default App;
