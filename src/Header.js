import React from "react";

function Header() {
  return (
    <header>
      <ul>
      
          <img src="src/images/city.jpg" width="100px" height="100px" />
      
        <li>
          <a href="http://localhost:3000/signUp">SignUp</a>
        </li>
        <li>
          <a href="http://localhost:3000/signIn">Sign In</a>
        </li>
        <li>
          <a href="http://localhost:3000/Profile">Profile</a>
        </li>
        <li>
          <a href="http://localhost:3000/Request">Request</a>
        </li>
      </ul>
    </header>
  );
}

export default Header;
