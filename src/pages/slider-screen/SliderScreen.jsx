import "./SliderScreen.scss";
import { Button } from "../../components/button/Button";
import { Slider } from "../../components/slider/Slider";
import { Title } from "../../components/title/Title";

export const SliderScreen = ({ setScreen }) => {
  return (
    <div className="slider-screen">
      <Title
        text="Who Would You Choose as Your First Partner, if you play right now?"
        classname="title__slider-screen"
      />

      <Slider />
      <div className="slider-screen_btn" onClick={() => setScreen('warning')}>
        <Button isAssept={true} text="next" />
      </div>
    </div>
  );
};
