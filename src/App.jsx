import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Cocktails from "./components/Cocktails";
import About from "./components/About";



const App = () => {
  return (
    <main>
      <NavBar />
      <Hero />
      <Cocktails></Cocktails>
      <About></About>
      <div className="h-[1000px]"></div>
    </main>
  );
};

export default App;
