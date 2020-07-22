import StyledProfileHeader from "./profileHeaderStyles";

import Nav from "../nav/nav";

const ProfileHeader = (props) => (
  <StyledProfileHeader>
    <div className="c-header">
      <Nav />
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
      </div>
    </div>
  </StyledProfileHeader>
);

export default ProfileHeader;
