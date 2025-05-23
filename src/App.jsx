import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Header from "./components/header";
import Readme from "./components/Readme";
import Dev from "./components/Dev";
import Audio from "./components/Audio";
import Experience from "./components/Experience";
import Contact from "./components/Contact";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className=" bg-darkestgray">
      <Header />
      <Readme />
      <Dev />
      <Audio />
      <Experience />
      <Contact />
    </div>
  );
}

export default App;
