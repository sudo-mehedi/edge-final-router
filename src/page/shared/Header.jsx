import React from "react";
import { Link } from "react-router-dom";
function Header() {
  return (
    <div style={{ display: "flex" }}>
      <Link to="/profile" style={{ padding: "5px" }}>
        Profile
      </Link>
      <Link style={{ padding: "5px" }} to="/profile/1">
        Profile 1
      </Link>
    </div>
  );
}

export default Header;
