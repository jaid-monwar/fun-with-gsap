import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const App = () => {
  const boxRef = useRef();

  const { contextSafe } = useGSAP();

  const rotateBox = contextSafe(() => {
    gsap.to(boxRef.current, {
      duration: 1,
      rotate: 360,
    });
  });

  return (
    <main>
      <button onClick={rotateBox}>Animate</button>
      <div ref={boxRef} className="box">
        Box
      </div>
    </main>
  );
};

export default App;
