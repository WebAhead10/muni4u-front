import React from "react";
import List from "./list";

function Profile() {
  return (
    <div>
      <img alt=""></img>
      <div>
        <label id="fname" name="fname"></label>
      </div>
      <div>
        <label id="phone" name="phone"></label>
      </div>
      <div>
        <label id="address" name="address"></label>
      </div>
      <div>
        <label id="reports" name="reports"></label>
        <List></List>
      </div>
      <div>
        <label id="payment" name="payment"></label>
        <List></List>
      </div>
      <div>
        <label id="change" name="change"></label>
        <List></List>
      </div>
    </div>
  );
}

export default Profile;
