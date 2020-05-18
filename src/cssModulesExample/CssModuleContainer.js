import React from "react";

import CssModuleCard from "./CssModuleCard";

class CssModuleContainer extends React.Component {
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
      <CssModuleCard
        clickActivate={this.activateHandler}
        clickDeactivate={this.deactivateHandler}
        retired={this.state.retired}
      />
    );
  }
}

export default CssModuleContainer;
