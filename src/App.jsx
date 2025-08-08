import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Cocktails from "./components/Cocktails";



const App = () => {
  return (
    <main>
      <NavBar />
      <Hero />
      <Cocktails></Cocktails>
      <div className="h-[1000px]"></div>
    </main>
  );
};

export default App;
