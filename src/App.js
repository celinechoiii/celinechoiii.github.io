import logo from "./logo.svg";
import "./App.css";
import { Navbar } from "./components/Navbar/Navbar";
import { Banner } from "./components/Banner/Banner";
import { About } from "./components/About/About";
import { Projects } from "./components/Projects/Projects";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <About />
      {/* <Projects /> */}
    </div>
  );
}

export default App;
