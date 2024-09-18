import "./App.scss";
import cn from "classnames";
import volumeIcon from "../../assets/images/volume.svg";
import womanLeft1 from "../../assets/images/woman-left-1.png";
import womanRight1 from "../../assets/images/woman-right-1.png";
import womanLeft2 from "../../assets/images/woman-left-2.png";
import womanRight2 from "../../assets/images/woman-right-2.png";

import { motion } from "framer-motion";
import { useState } from "react";
import { StartScreen } from "../../pages/start-screen/StartScreen";
import { SliderScreen } from "../../pages/slider-screen/SliderScreen";
import { WarningScreen } from "../../pages/warning-screen/WarningScreen";

function App() {
  const [volume, setVolume] = useState(false);
  const [screen, setScreen] = useState("welcome");

  const variants = {
    initial: {
      opacity: 0,
      scale: 0.8,
      filter: "blur(10px)",
    },
    animate: {
      opacity: 1,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
    exit: {
      opacity: 0,
      scale: 1.2,
      filter: "blur(10px)",
      transition: {
        duration: 0.6,
      },
    },
  };

  const womanLeftAnimation = {
    hidden: { y: '20%', opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };
  
  const womanRightAnimation = {
    hidden: { y: '20%', opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <div className="App">
      <div
        className={cn("volume-icon", { "volume-icon__off": volume })}
        onClick={() => setVolume(!volume)}
      >
        <img src={volumeIcon} alt="volume-icon" />
      </div>

      <div className="container">
        {screen === "welcome" && (
          <motion.div
            key="welcome"
            initial="initial"
            animate="animate"
            exit="exit"
            variants={variants}
            transition={{ duration: 0.5 }}
            className="motion-wrapper"
          >
            <StartScreen setScreen={setScreen} />
          </motion.div>
        )}

        {screen === "slider" && (
          <motion.div
            key="slider"
            initial="initial"
            animate="animate"
            exit="exit"
            variants={variants}
            transition={{ duration: 0.5 }}
            className="motion-wrapper"
          >
            <SliderScreen setScreen={setScreen} />
          </motion.div>
        )}

        {screen === "warning" && (
          <motion.div
            key="warning"
            initial="initial"
            animate="animate"
            exit="exit"
            variants={variants}
            transition={{ duration: 0.5 }}
            className="motion-wrapper"
          >
            <WarningScreen />
          </motion.div>
        )}
      </div>

      {screen === "welcome" && (
        <motion.img
          className="woman woman_left"
          src={womanLeft1}
          alt="woman"
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={womanLeftAnimation}
          transition={{ duration: 0.8 }}
        />
      )}
      {screen === "welcome" && (
        <motion.img
          className="woman woman_right"
          src={womanRight1}
          alt="woman"
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={womanRightAnimation}
          transition={{ duration: 0.8 }}
        />
      )}
      {screen === "warning" && (
        <motion.img
          className="woman woman_left-2"
          src={womanLeft2}
          alt="woman"
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={womanLeftAnimation}
          transition={{ duration: 0.8 }}
        />
      )}
      {screen === "warning" && (
        <motion.img
          className="woman woman_right-2"
          src={womanRight2}
          alt="woman"
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={womanRightAnimation}
          transition={{ duration: 0.8 }}
        />
      )}
    </div>
  );
}

export default App;
