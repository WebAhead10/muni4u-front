import React from "react";

function Home() {
  return (
    <div class="home" height="100vh">
      <div class="body" height="50%">
        <label id="date" name="date"></label>
        <label id="welcome" name="welcome">
          Hi user
        </label>
      </div>
      <div class="body" height="50%">
        <label id="request" name="request">
          For any request or complaint
        </label>
        <button class="btn">Contact Us</button>
      </div>
    </div>
  );
}

export default Home;
