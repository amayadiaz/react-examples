import React from "react";

import classes from "./styles.module.css";

const CssModuleCard = (props) => {
  const cardClasses = [classes.card];

  if (props.retired) {
    cardClasses.push(classes.cardGray);
  } else {
    cardClasses.push(classes.cardGreen);
  }

  return (
    <div className={cardClasses.join(" ")}>
      <img
        src="https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/1610612744/2019/260x190/201939.png"
        alt="Profile"
      />
      <p className={classes.playerName}>Stephen Curry</p>
      <hr></hr>
      <p>Golden State Warriors Player</p>
      <p>#30</p>
      <hr></hr>
      <button onClick={props.clickActivate}>Activate</button>
      <button onClick={props.clickDeactivate}>Deactivate</button>
    </div>
  );
};

export default CssModuleCard;
