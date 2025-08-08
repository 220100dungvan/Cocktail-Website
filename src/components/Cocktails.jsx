import { cocktailLists, mockTailLists } from "../../constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Cocktails = () => {
  useGSAP(() => {
    gsap.from(".cocktail-left-leaf", {
      x: -100,
      y: 100,
      duration: 1,
      scrollTrigger: {
        trigger: ".cocktail-left-leaf",
        start: "top 80%",
        end: "bottom 20%",
        scrub: true,
      },
    });
    gsap.from(".cocktail-right-leaf", {
      x: 100,
      y: 100,
      duration: 1,
      scrollTrigger: {
        trigger: ".cocktail-right-leaf",
        start: "top 80%",
        end: "bottom 20%",
        scrub: true,
      },
    });
  }, []);
  return (
    <section className="noise-radial-gradient" id="cocktails">
      <img
        className="cocktail-left-leaf"
        src="/images/cocktail-left-leaf.png"
        alt=""
      />
      <img
        className="cocktail-right-leaf"
        src="/images/cocktail-right-leaf.png"
        alt=""
      />
      <div className="content">
        <div>
          <h1>Most popular cocktails:</h1>
          <ul>
            {cocktailLists.map((cocktail, index) => (
              <li key={index}>
                <p>
                  <span className="name">{cocktail.name}</span>
                  <p className="space-x-2.5">
                    <span className="font-semibold">-</span>
                    <span className="price">{cocktail.price}</span>
                  </p>
                </p>
                <p>
                  <span className="country">{cocktail.country}</span>
                  <span>|</span>
                  <span className="detail">{cocktail.detail}</span>
                </p>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h1>Most loved mocktails:</h1>
          <ul>
            {mockTailLists.map((cocktail, index) => (
              <li key={index}>
                <p>
                  <span className="name">{cocktail.name}</span>
                  <p className="space-x-2.5">
                    <span className="font-semibold">-</span>
                    <span className="price">{cocktail.price}</span>
                  </p>
                </p>
                <p>
                  <span className="country">{cocktail.country}</span>
                  <span>|</span>
                  <span className="detail">{cocktail.detail}</span>
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Cocktails;
