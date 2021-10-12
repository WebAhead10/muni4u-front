import React from "react";
import "./Home.css";

function Home() {
  return (
    <div className="body">
      <label id="mainHeader" name="header">
        Municipality for you
      </label>

      <img
        src="https://i.ibb.co/h22gkZt/20160518-185643.jpg"
        alt="photo of the town"
      ></img>

      <label id="request" name="request">
        For any request or complaint
      </label>
      <button className="btn" onClick={() => window.location.href = '/request'} >Contact us</button>
      <div className="second-row">
        <button className="btn" onClick={() => window.location.href = '/signIn'}>Sign in</button>
        <button className="btn" onClick={() => window.location.href = '/signUp'}>Sign up</button>
      </div>
    </div>
  );
}

export default Home;
