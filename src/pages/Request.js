import React from "react";

function Request() {
  return (
    <div>
      <div>
        <label>Name :</label>
        <input id="fname" name="fname"></input>
      </div>
      <div>
        <label for="haweye">ID :</label>
        <input
          id="haweye"
          name="haweye"
          placeholder="Please enter your ID"
        ></input>
      </div>
      <div>
        <label for="sub">Subject Of Request :</label>
        <input id="sub" name="sub" placeholder="Please enter your ID"></input>
      </div>
      <div>
        <label for="request">Your Request :</label>
        <input id="request" name="request"></input>
      </div>

      <div>
        <button className="btn">Submit</button>
      </div>
    </div>
  );
}

export default Request;
