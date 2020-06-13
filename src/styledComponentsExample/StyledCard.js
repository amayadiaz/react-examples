import React from "react";
import styled from "styled-components";

const StyledCard = styled.div`
  text-align: center;
  margin: 0 auto;
  border: 2px solid #1565c0;
  width: 30%;
  background-color: ${(props) => (props.retired ? "#e0e0e0" : "#c8e6c9")};

  .playerName {
    font-size: 24px;
    color: #1565c0;
  }

  button {
    margin: 5px 0px;
  }

  p {
    margin: 5px 0px;
  }
`;

const Card = (props) => {
  return (
    <StyledCard retired={props.retired}>
      <img
        src="https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/1610612744/2019/260x190/201939.png"
        alt="Profile"
      />
      <p className="playerName">Stephen Curry</p>
      <hr></hr>
      <p>Golden State Warriors Player</p>
      <p>#30</p>
      <hr></hr>
      <button onClick={props.clickActivate}>Activate</button>
      <button onClick={props.clickDeactivate}>Deactivate</button>
    </StyledCard>
  );
};

export default Card;
