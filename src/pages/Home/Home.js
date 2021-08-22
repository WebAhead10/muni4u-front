import React from "react";

function Home() {
  return (
    <div className="body">
      <div>
        <div>
        <label id="date" name="date">
            Date of today
          </label>
          </div>
        <div>
          <label id="welcome" name="welcome">
            Hi user
          </label>
        </div>
        <div>
          <label id="request" name="request">
            For any request or complaint
          </label>
        </div>
        <div className="btn-div">
          
          <button className="btn">Contact Us</button>
        </div>
      </div>
    </div>
  );
}

export default Home;
