import React from 'react';
import Footer from "./Components/Footer/Footer";
import { Header } from "./Components/Header/Header";
import { Intro } from "./Components/Intro/Intro";
import { Question } from "./Components/Question/Question";
import Skill  from "./Components/Skill/Skill"







function App() {
  return (
    
    <div className="App">
    <Header/>
    <Intro/>
    <Skill/>
    <Question/>
    <Footer/>
    </div>
    
  );
}

export default App;
