import Image from "next/image";
import styles from "./style.module.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";

const index = () => {
  const backgroundImage = useRef(null);
  const introImage = useRef(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: document.documentElement,
        start: "top",
        end: "+=500px",
        scrub: true,
      },
    });

    timeline
      .from(backgroundImage.current, {
        clipPath: "inset(15%)",
      })
      .to(
        introImage.current,
        {
          height: "200px",
        },
        0
      );
  }, []);

  return (
    <div className={styles.intro}>
      <div ref={backgroundImage} className={styles.backgroundImage}>
        <Image src="/images/background.png" fill alt="Teste" />
      </div>

      <div className={styles.introContainer}>
        <div
          ref={introImage}
          data-scroll
          data-scroll-speed="0.3"
          className={styles.introImage}
        >
          <Image src="/images/intro.png" fill alt="Teste 2" />
        </div>

        <h1 data-scroll data-scroll-speed="0.7">
          Smooth Project
        </h1>
      </div>
    </div>
  );
};

export default index;
