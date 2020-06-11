import React, { Component } from "react";
import Toggle from './../toggle/toggle.jsx';
import "./profile.scss";

class Profile extends Component {
  render() {
    return (
      <div className="c-profile">
        <div className="c-header">
          <div className="c-nav"></div>
          <div className="c-header-info">
            <div className="c-profileImg"></div>
            <div className="c-info">
              <div className="name">Bernadette E.</div>
              <div className="title">Title</div>
              <div className="c-stats">
                <div className="c-followers">
                  <div className="followerImg"></div>
                  <div className="followerData">
                    <div>
                      <span className="followerNumber">280</span>
                      <span>K</span>
                    </div>
                    <p>Followers</p>
                  </div>
                </div>
              </div>
            </div>
            <Toggle />
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
