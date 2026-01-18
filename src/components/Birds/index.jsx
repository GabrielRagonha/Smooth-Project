import { ANIMALS } from "@/utils/constants";
import styles from "./style.module.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useLayoutEffect, useRef, useState } from "react";

const Index = () => {
  const [selectedAnimal, setSelectedAnimal] = useState(0);
  const imgContainer = useRef(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    ScrollTrigger.create({
      trigger: imgContainer.current,
      start: "-=100px",
      end: document.body.offsetHeight,
      pin: true,
    });
  }, []);

  return (
    <div className={styles.animals}>
      <div className={styles.animalDescription}>
        <div ref={imgContainer} className={styles.imageContainer}>
          <Image
            src={`/images/${ANIMALS[selectedAnimal].src}`}
            fill
            alt={ANIMALS[selectedAnimal].alt}
          />
        </div>

        <div className={styles.column}>
          <p>
            A vida animal reflete o equilíbrio silencioso da natureza, onde cada
            movimento, instinto e som fazem parte de um ciclo maior. Observar os
            animais é lembrar que a simplicidade também carrega sabedoria.
          </p>
        </div>

        <div className={styles.column}>
          <p>
            Na diversidade dos animais existe beleza, força e delicadeza. Eles
            nos ensinam sobre adaptação, respeito ao ambiente e a importância de
            viver em harmonia com o mundo natural que compartilhamos.
          </p>
        </div>
      </div>

      <div className={styles.animalsList}>
        {ANIMALS.map(({ title }, index) => {
          return (
            <div
              onMouseOver={() => {
                setSelectedAnimal(index);
              }}
              className={styles.animalEl}
              key={`animal_${index}`}
            >
              <p>{title}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Index;
