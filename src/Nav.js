import React from "react";

function Nav() {

  function Click(e) {
    
}
  return (
    <nav>
      <ul className="lista">
          {/* <img src="src/images/city.jpg" width="100px" height="100px" /> */}
      
        <li>
        <a href="/home">Home</a>
        </li>
        <li>
        <a href="/Profile">Profile</a>
        </li>
        <li>
        <a href="/Request">Request</a>
        </li>
        <li>
          
        </li>
        <button className="logout" onClick={Click}
                >Log out</button>
      </ul>
    </nav>
  );
}

export default Nav;
