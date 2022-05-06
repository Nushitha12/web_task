import Header from "./components/Header";
import Main from "./components/Main";
import Heading from "./components/Heading";
import "./App.css";
import Aboutus from "./components/Aboutus";
import Best from "./components/Best";
import AboutComp from "./components/AboutCompany";
import Embedded from "./components/Embedded";
import Success from "./components/Success";
import Serivce from "./components/Service";
import Signup from "./components/Singup";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Heading />
      <Aboutus />
      <Best />
      <AboutComp />
      <Embedded />
      <Success />
      <Serivce />
      <Signup />
      <Footer />
    </div>
  );
}

export default App;
