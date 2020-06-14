import React, { Component } from "react";
import Meta from "./Meta";
import globalStyles from "./cssReset";

class Page extends Component {
  render() {
    return (
      <React.Fragment>
        <Meta />
        {this.props.children}
      </React.Fragment>
    );
  }
}

export default Page;
