import { Button } from "../../components/button/Button";
import { Title } from "../../components/title/Title";
import "./StartScreen.scss";

export const StartScreen = ({ setScreen }) => {
  return (
    <div className="startScreen">
      <div clas="startScreen__wrapper">
        <div className="info">Stop spending time on mediocre online stuff!</div>
        <Title
          text="Explore our intriguing 3D game"
          classname="title__start-screen"
        />
        <div className="description">
          instead and experience unparalleled pleasure like you've never seen
          before.
        </div>
      </div>

      <div className="btns">
        <Button isAssept={false} text="no,thanks" />

        <span onClick={() => setScreen("slider")}>
          <Button isAssept={true} text="continue" />
        </span>
      </div>
    </div>
  );
};
