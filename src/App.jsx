import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";



const App = () => {
  return (
    <main>
      <NavBar />
      <Hero />
      <div className="h-[1000px]"></div>
    </main>
  );
};

export default App;
