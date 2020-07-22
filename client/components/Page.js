import React, { Component } from "react";
import Meta from "./Meta";
import GlobalStyles from "./cssReset";

class Page extends Component {
  render() {
    return (
      <React.Fragment>
        <GlobalStyles />
        <Meta />
        {this.props.children}
      </React.Fragment>
    );
  }
}

export default Page;
