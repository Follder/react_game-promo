import "./Title.scss";

export const Title = ({ text, classname }) => (
  <div className={`title ${classname}`}>
    <h1>{text}</h1>
  </div>
);
