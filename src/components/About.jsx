import React from "react";
import { rating } from "../../constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";

gsap.registerPlugin(ScrollTrigger, SplitText);

const About = () => {
  useGSAP(() => {
    document.fonts.ready.then(() => {
      const titleSplitText = SplitText.create(".title p", { type: "lines" });
      // console.log(titleSplitText);
      gsap.timeline().from(titleSplitText.lines, {
        yPercent: 300,
        opacity: 0,
        duration: 1.2,
        ease: "expo.out",
        stagger: 0.1,
        scrollTrigger: {
          trigger: ".title",
          start: "top 80%",
          end: "bottom 20%",
          scrub: true,
        },
      });
    });
    gsap.from(".image-box ", {
      // y: 100,
      opacity: 0,
      duration: 1,
      ease: "expo.out",
      stagger: 0.1,
      scrollTrigger: {
        trigger: ".cocktail-images",
        start: "top 90%",
        end: "bottom 5%",
        scrub: true,
      },
    });
  }, []);

  const renderStar = (index) => {
    if (Math.floor(rating) > index) {
      return (
        <img
          className="star"
          src="/images/star-filled-full.svg"
          alt="Filled Full Star"
        />
      );
    } else if (Math.ceil(rating) > index && Math.floor(rating) === index) {
      return (
        <img
          className="star"
          src="/images/star-filled-half.svg"
          alt="Filled Half Star"
        />
      );
    } else {
      return (
        <img
          className="star"
          src="/images/star-unfilled.svg"
          alt="Empty Star"
        />
      );
    }
  };

  return (
    <section id="about" className="noise-radial-gradient">
      <div className="content">
        <div className="info">
          <div className="title">
            <button>Best Cocktails</button>
            <p>Where every detail matters—from muddle to garnish</p>
          </div>
          <div className="description">
            <p>
              Every cocktail we serve is a reflection of our obsession with
              detail — from the first muddle to the final garnish. That care is
              what turns a simple drink into something truly memorable.
            </p>
            <div className="vote-cocktails">
              <div className="rating">
                <p className="rating-stars">
                  {Array(5)
                    .fill()
                    .map((_, index) => (
                      <span key={index}>{renderStar(index)}</span>
                    ))}
                </p>
                <p className="font-bold text-2xl">
                  <span className="text-yellow text-3xl">{rating}</span>/5
                </p>
                <p className="font-medium text-sm whitespace-nowrap">
                  More than +12000 customers
                </p>
              </div>
              <div className="vertical-bar w-0.5 bg-white"></div>
              <div className="people">
                <img src="/images/profile1.png" alt="" />
                <img src="/images/profile2.png" className="-ml-3" alt="" />
                <img src="/images/profile3.png" className="-ml-3" alt="" />
                <img src="/images/profile4.png" className="-ml-3" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="cocktail-images">
          <div className="image-box col-span-3">
            <img src="/images/abt1.png" alt="" />
            <div className="noise"></div>
          </div>
          <div className="image-box cocktail-feature col-span-4">
            <h1>Crafted to Impress</h1>
            <ul className="cocktail-feature__list font-medium text-lg flex flex-col gap-3">
              <li className="flex items-center gap-4 ">
                <img src="/images/check.png" alt="" />
                <span>Perfectly balanced blends</span>
              </li>
              <li className="flex items-center gap-4">
                <img src="/images/check.png" alt="" />
                <span>Garnished to perfection</span>
              </li>
              <li className="flex items-center gap-4">
                <img src="/images/check.png" alt="" />
                <span>Ice-cold every time</span>
              </li>
              <li className="flex items-center gap-4">
                <img src="/images/check.png" alt="" />
                <span>Expertly shaken & stirred</span>
              </li>
            </ul>
          </div>
          <div className="image-box col-span-5">
            <img src="/images/abt2.png" alt="" />
            <div className="noise"></div>
          </div>
          <div className="image-box col-span-8">
            <img src="/images/abt3.png" alt="" />
            <div className="noise"></div>
          </div>
          <div className="image-box col-span-4">
            <img src="/images/abt4.png" alt="" />
            <div className="noise"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
