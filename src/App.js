
import "./App.css";
import Navbar from "./Assests/Component/Navbar";
import Cases from "./Assests/Sections/Cases/Cases";
import Contact from "./Assests/Sections/Contact/Contact";
import Footer from "./Assests/Sections/Footer/Footer";
import Home from "./Assests/Sections/Home/Home"
import OurWork from "./Assests/Sections/OurWork/OurWork"


function App() {
  return (
    <div id="App">
      <Navbar/>
     <Home/>
     <OurWork/>
     <Cases/>
     <Contact/>
     <Footer/>
    </div>
  );
}

export default App;
