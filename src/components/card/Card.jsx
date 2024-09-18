import './Card.scss';

export const Card = ({ image, text }) => (
  <div className="card">
    <img src={image} alt={text} className="card-img" />
    <div className="card-text">{text}</div>
  </div>
)