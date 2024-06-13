import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef, useState } from "react";

const App = () => {
  // const [circle, setCircle] = useState(0);

  // const random = gsap.utils.random(-500, 500, 100);

  // useGSAP(() => {
  //   gsap.to(".circle", {
  //     x: circle,
  //     duration: 0.5,
  //   });
  // }, [circle]);

  const randomX = gsap.utils.random(-500, 500, 100);
  const randomY = gsap.utils.random(-500, 500, 30);
  const rotateRandom = gsap.utils.random(-360, 360, 30);

  const [xValue, setXValue] = useState(0);
  const [yValue, setYValue] = useState(0);
  const [rotateX, setRotateX] = useState(0);

  const boxRef = useRef();
  const imageRef = useRef();

  useGSAP(() => {
    gsap.to(imageRef.current, {
      x: xValue,
      y: yValue,
      duration: 0.6,
      rotate: rotateX,
    });
  }, [xValue, yValue, rotateX]);

  useGSAP(() => {
    gsap.to(boxRef.current, {
      x: xValue,

      duration: 1,
      rotate: rotateX,
    });
  }, [xValue, rotateX]);

  return (
    <main>
      {/* <button
        onClick={() => {
          setCircle(random);
          console.log(circle);
        }}
      >
        Animate
      </button> */}
      <button
        onClick={() => {
          setXValue(randomX);
          setRotateX(rotateRandom);
          setYValue(randomY);
        }}
      >
        Animate
      </button>
      {/* <div ref={boxRef} className="box"></div> */}
      <img
        ref={imageRef}
        src="https://images.vexels.com/content/242241/preview/side-fly-geometric-color-stroke-123fa9.png"
        alt="fly"
      />
    </main>
  );
};

export default App;
