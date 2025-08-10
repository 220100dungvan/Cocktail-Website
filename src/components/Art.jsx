import { useGSAP } from "@gsap/react";
import { featureLists, goodLists } from "../../constants";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import { useMediaQuery } from "react-responsive";

gsap.registerPlugin(SplitText);

const Art = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  useGSAP(() => {
    document.fonts.ready.then(() => {
      const splitText = SplitText.create(".mask-content", { type: "lines" });
      console.log(splitText)
      const start = isMobile ? "bottom top" : "top top";
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: "#art",
          start,
          end: "bottom center",
          scrub: 1.5,
          pin: true,
        },
      });

      tl.to(".will-fade", {
        y: 100,
        opacity: 0,
        duration: 1.5,
        ease: "expo.out",
      })
        .to(".text-fade p", {
          y: 100,
          opacity: 0,
          duration: 1,
        })
        .to(
          ".a-cocktail-list",
          {
            opacity: 0,
            duration: 1.2,
            ease: "expo.out",
          },
          ">-0.5"
        )
        .to(
          ".element",
          {
            maskSize: "400%",
            duration: 2,
          },
          ">-0.5"
        )
        .from(".left-cup", {
          x: -200,
          y: 100,
          duration: 1.5,
        }, ">1")
        .from(".right-cup", {
          x: 250,
          y: -100,
          duration: 1.5,
        }, ">-1.5")
        .from(
          splitText.lines,
          {
            opacity: 0,
            y: 100,
            duration: 1,
            stagger: 0.2,
          },
          ">-0.8"
        );
    }, []);
  });
  return (
    <section id="art" className="noise-radial-gradient">
      <h1 className="will-fade">The ART</h1>
      <div className="image-art-center">
        <img className="element" src="/images/under-img.jpg" alt="" />
      </div>
      <div className="content">
        <ul className="good-list a-cocktail-list">
          {goodLists.map((item, index) => (
            <li key={index} className="good-item">
              <img src="/images/check.png" />
              {item}
            </li>
          ))}
        </ul>
        <ul className="feature-list a-cocktail-list">
          {featureLists.map((item, index) => (
            <li key={index} className="feature-item">
              <img src="/images/check.png" />
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div className="description">
        <div className="text-fade">
          <p>Sip-Worthy Perfection</p>
        </div>
        <div className="mask-content">
          <h2>Made with Craft, Poured with Passion</h2>
          <p>
            This isn’t just a drink. It’s a carefully crafted moment made just
            for you.
          </p>
        </div>
      </div>
      <img src="/images/left-cup.png" className="left-cup" alt="" />
      <img src="/images/right-cup.png" className="right-cup" alt="" />
    </section>
  );
};

export default Art;
