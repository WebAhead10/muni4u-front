import React from "react";
import List from "./list";
import { useLocation } from 'react-router-dom';

function Profile() {
  const location = useLocation();

  return (
    <div>
      {/* <img alt=""></img> */}
      <div>
        <label id="fname" name="fname">{location.state.res.data[0].fullname}</label>
      </div>
      <div>
        <label id="phone" name="phone">{location.state.res.data[0].phone}</label>
      </div>
      <div>
        <label id="address" name="address">{location.state.res.data[0].address}</label>
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
