import { useState } from "react";
import StyledProfileHeader from "./profileHeaderStyles";
import AddProduct from "./../addProduct/addProduct.jsx";

import Nav from "../nav/nav";

const ProfileHeader = (props) => {
  const [visibility, setVisibility] = useState(false);

  return (
    <StyledProfileHeader>
      <div className="c-header">
        <AddProduct visibility={visibility} setVisibility={setVisibility} />
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
          <div className="button-menu">
            <button onClick={() => setVisibility(true)}>Add Product</button>
          </div>
        </div>
      </div>
    </StyledProfileHeader>
  );
};

export default ProfileHeader;
