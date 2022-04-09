// // import Komponen from "./Materi/Komponen";
// import {Container, Navbar, Nav, Button} from "react-bootstrap";
// import {
//   BrowserRouter,
//   Routes,
//   Route,
//   Link,
// } from "react-router-dom";
// import { Button } from 'reactstrap';
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
