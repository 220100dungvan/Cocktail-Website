import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Cocktails from "./components/Cocktails";
import About from "./components/About";
import Art from "./components/Art";



const App = () => {
  return (
    <main>
      <NavBar />
      <Hero />
      <Cocktails></Cocktails>
      <About></About>
      <Art />
      <div className="box h-[1000px]"></div>
    </main>
  );
};

export default App;
