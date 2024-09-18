import { Button } from "../../components/button/Button";
import { Title } from "../../components/title/Title";
import "./WarningScreen.scss";

export const WarningScreen = () => (
  <div className="warning">
    <div className="warning__wrapper">
      <Title text="Warning" classname="title__warning" />

      <div className="warning__description">
        You must be at least 18 years old and comfortable with mature topics to
        play the game.
      </div>
    </div>
    <div className="warning__btn">
      <Button isAssept={true} text="ok, continue" />
    </div>
  </div>
);
