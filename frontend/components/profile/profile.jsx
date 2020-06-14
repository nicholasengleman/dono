import Link from "next/link";

import StyledProfile from "./profileStyles";

const Profile = (props) => (
  <StyledProfile>
    <div className="c-header">
      <div className="c-nav">
        <Link href="/index">
          <a>Home</a>
        </Link>
      </div>
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
  </StyledProfile>
);

export default Profile;
