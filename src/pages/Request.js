import React from "react";
function Request() {
  return (
    <div>
      <h2>Name :</h2>
      <input></input>
      <h2>ID :</h2>
      <input></input>
      <h2>Subject Of Request :</h2>
      <input></input>
      <h2>Your Request :</h2>
      <textarea className="text"></textarea>
      <br></br>
      <button className="btn">Submit</button>
    </div>
  );
}

export default Request;