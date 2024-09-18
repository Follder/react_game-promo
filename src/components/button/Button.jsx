import React from "react";
import './Button.scss';

export const Button = ({ isAssept, text }) => {
  const classname = isAssept ? 'btn_accept' : 'btn_decline';

  return (
    <div className="btn">
      <button className={classname}>{text}</button>
    </div>
  );
};
