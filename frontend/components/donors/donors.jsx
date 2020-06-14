import React, { Component } from "react";
import axios from "axios";
import StyledDonors from "./donateStyles";

class Donors extends Component {
  constructor(props) {
    super(props);
    this.state = {
      subThumbnails: [],
      subsTotal: Math.floor(Math.random() * (99 - 6 + 1)) + 6,
    };
  }

  componentDidMount() {
    let subThumbnails = [];

    axios
      .get("https://randomuser.me/api/?results=10")
      .then((response) => {
        if (response.data.results) {
          response.data.results.forEach((sub) => {
            subThumbnails.push(sub.picture.thumbnail);
          });
          this.setState({ subThumbnails });
        }
      })
      .catch((error) => {
        console.log("[Error]: ", error);
      });
  }

  render() {
    return (
      <StyledDonors>
        {this.state.subThumbnails.map((sub, i) => {
          if (i < this.state.subThumbnails.length - 1) {
            return (
              <div key={i} className="subThumbnail">
                <img src={sub} alt="" />
              </div>
            );
          }
          return null;
        })}

        <div className="subThumbnail">
          <img
            className="tint"
            src={this.state.subThumbnails[this.state.subThumbnails.length - 1]}
            alt=""
          />
          <div className="subsRemaining">+{this.state.subsTotal - 5}</div>
        </div>
      </StyledDonors>
    );
  }
}

export default Donors;
