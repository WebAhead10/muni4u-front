import React from "react";
function SignUp() {

  return (
    <div>
      <div>
        <label>User Name :</label>
        <input id="username" name="username"></input>
      </div>
      <div>
        <label>ID No. :</label>
        <input id="idnumber" name="idnumber"></input>
      </div>
      <div>
        <label>Phone No. :</label>
        <input id="phone" name="phone"></input>
      </div>
      <div>
        <label>Password :</label>
        <input id="password" name="password"></input>
      </div>
      <div>
        <label>Password Again :</label>
        <input id="pass2" name="pass2"></input>
      </div>
      <div>
        <label>Address :</label>
        <input id="address" name="address"></input>
      </div>
      <div>
        <button class="btn">Confirm</button>
      </div>
    </div>

  );
}

export default SignUp;
