import React from "react";

import StyledCard from "./StyledCard";

class StyledContainer extends React.Component {
  state = {
    retired: false,
  };

  activateHandler = () => {
    this.setState({
      retired: false,
    });
  };

  deactivateHandler = () => {
    this.setState({
      retired: true,
    });
  };

  render() {
    return (
      <StyledCard
        clickActivate={this.activateHandler}
        clickDeactivate={this.deactivateHandler}
        retired={this.state.retired}
      />
    );
  }
}

export default StyledContainer;
