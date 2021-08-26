import React from "react";

function Nav() {
  return (
    <nav>
      <ul className="lista">
          {/* <img src="src/images/city.jpg" width="100px" height="100px" /> */}
      
        <li>
          <a href="/signUp">SignUp</a>
        </li>
        <li>
          <a href="/signIn">Sign In</a>
        </li>
        <li>
          <a href="/Profile">Profile</a>
        </li>
        <li>
          <a href="/Request">Request</a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
