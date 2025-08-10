import { useState } from "react";
import { allCocktails } from "../../constants";
import { useGSAP } from "@gsap/react";

import gsap from "gsap";
import { SplitText } from "gsap/all";

// console.log(allCocktailsName);

const Menu = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const currentCocktail = getCocktailAt(0);
  const nextCocktail = getCocktailAt(1);
  const previousCocktail = getCocktailAt(-1);

  useGSAP(() => {
    document.fonts.ready.then(() => {
      const recipeSplitText = SplitText.create(".recipe p", { type: "lines" });
      const infoSplitText = SplitText.create(".cocktail-info p", {
        type: "lines",
      });
        gsap.from(recipeSplitText.lines, {
            y:100,
            opacity: 0,
            duration: 1,
            ease: "expo.out",
            stagger: 0.05,
        });
        gsap.from(infoSplitText.lines, {
            y:100,
            opacity: 0,
            duration: 1,
            ease: "expo.out",
            stagger: 0.05,
        });
    });
    gsap.from(".cocktail-image", {
      x: -150,
      duration: 1,
    });
  }, [currentIndex]);

  function getCocktailAt(indexOffset) {
    return allCocktails[
      (currentIndex + indexOffset + allCocktails.length) % allCocktails.length
    ];
  }
  function goToSlide(index) {
    let newIndex = (index + allCocktails.length) % allCocktails.length;

    setCurrentIndex(newIndex);
  }
  return (
    <section id="menu" className="noise-radial-gradient">
      <div className="tabs">
        {allCocktails.map(({ name }, index) => (
          <button
            className={index === currentIndex ? "active" : ""}
            key={index}
            onClick={() => goToSlide(index)}
          >
            {name}
          </button>
        ))}
      </div>
      <div className="cocktail-image mx-auto absolute mt-16 ">
        <img src={currentCocktail.image} alt="" />
      </div>
      <div className="content">
        <div className="recipe">
          <p>Recipes for:</p>
          <p className="cocktail-name">{currentCocktail.name}</p>
        </div>
        <div className="cocktail-info">
          <p className="cocktail-title">{currentCocktail.title}</p>
          <p className="cocktail-detail">{currentCocktail.description}</p>
        </div>
      </div>
      <img
        src="/images/slider-left-leaf.png"
        className="m-left-leaf"
        alt="leaf image"
      />
      <img
        src="/images/slider-right-leaf.png"
        className="m-right-leaf"
        alt="leaf image"
      />
      <div className="arrows">
        <div
          className="action-previous cursor-pointer"
          onClick={() => goToSlide(currentIndex - 1)}
        >
          <p>{previousCocktail.name}</p>
          <img src="/images/right-arrow.png" alt="Previous" />
        </div>
        <div
          className="action-next flex flex-col items-end cursor-pointer"
          onClick={() => goToSlide(currentIndex + 1)}
        >
          <p className="text-right">{nextCocktail.name}</p>
          <img src="/images/left-arrow.png" alt="Next" />
        </div>
      </div>
    </section>
  );
};

export default Menu;
