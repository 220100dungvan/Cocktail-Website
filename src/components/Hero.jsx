import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import { useRef } from "react";
import { useMediaQuery } from "react-responsive";

gsap.registerPlugin(ScrollTrigger, SplitText);

const Hero = () => {
  const videoRef = useRef(null);

  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const startValue = isMobile ? "top 50%" : "center 60%";
  const endValue = isMobile ? "120% top" : "bottom top";


  useGSAP(() => {
    document.fonts.ready.then(() => {
      const mojitoSplit = SplitText.create("#hero > h1", { type: "chars" });
      const recipeSplit = SplitText.create(".recipe p", { type: "lines" });
      const viewCocktailsSplit = SplitText.create(".view-cocktails p", {
        type: "lines",
      });
      mojitoSplit.chars.forEach((char) => char.classList.add("text-gradient"));
      gsap
        .timeline()
        .from(mojitoSplit.chars, {
          yPercent: 100,
          duration: 1.8,
          ease: "expo.out",
          stagger: 0.06,
        })
        .from(
          recipeSplit.lines,
          {
            yPercent: 150,
            opacity: 0,
            duration: 1.8,
            ease: "expo.out",
            stagger: 0.06,
          },
          ">-1"
        )
        .from(
          viewCocktailsSplit.lines,
          {
            yPercent: 150,
            opacity: 0,
            duration: 1.8,
            ease: "expo.out",
            stagger: 0.06,
          },
          ">-1.8"
        );
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "video",
        start: startValue,
        end: endValue,
        scrub: true,
        pin: true,
      },
    });
    videoRef.current.onloadedmetadata = () => {
      tl.to("video", {
        currentTime: videoRef.current.duration,
      });
    };

    gsap.from(".left-leaf", {
      x: -100,
      y: 100,
      duration: 1,
    });
    gsap.from(".right-leaf", {
      x: 100,
      y: 100,
      duration: 1,
    });
    
  }, []);
  return (
    <>
      <section id="hero" className="noise">
        <h1>Mojito</h1>
        <img className="left-leaf" src="/images/hero-left-leaf.png" alt="" />
        <img className="right-leaf" src="/images/hero-right-leaf.png" alt="" />
        <img className="hero-arrow" src="/images/arrow.png" alt="" />
        <div className="wrapper">
          <div className="content">
            <div className="recipe">
              <p>Cool. Crisp. Classic.</p>
              <p className="subtitle">Sip the Spirit of Summer</p>
            </div>
            <div className="view-cocktails">
              <p>
                Every cocktail on our menu is a blend of premium ingredients,
                creative flair, and timeless recipes — designed to delight your
                senses.
              </p>
              <a href="">View cocktails</a>
            </div>
          </div>
        </div>
      </section>
      <div className="video">
        <video muted playsInline preload="auto" ref={videoRef}>
          <source src="/videos/output.mp4" type="video/mp4" />
        </video>
      </div>
    </>
  );
};

export default Hero;
