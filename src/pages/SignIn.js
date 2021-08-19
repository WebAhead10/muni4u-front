import React from "react";
import "../App.css";

function SignIn() {
  return (
    <div className="body">
      <div>
        <label>Phone :</label>
      </div>
      <div>
        <input id="phone" name="phone"></input>
      </div>
      <div>
        <label>Password :</label>
      </div>
      <div>
        <input id="pass1" name="pass1"></input>
      </div>

      <div>
        <button className="btn">Sign In</button>
      </div>
    </div>
  );
}

export default SignIn;
