import React from "react";

import "./Button.css";

const Button = props => {
  let classes = ["Button"];
  classes.push(props.btnType);
  return (
    <button onClick={props.clicked} className={classes.join(" ")}>
      {props.children}
    </button>
  );
};

export default Button;
