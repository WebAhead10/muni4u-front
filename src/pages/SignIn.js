import React from "react";
// import App from "../App";
import "../App.css";
// import Home from "./Home/Home"
// import Profile from "./Profile/Profile";
import { useHistory } from "react-router-dom";

function SignIn(props) {
  const [haweye, setHaweye] = React.useState("");
  const [pass1, setPass1] = React.useState("");
  let history = useHistory();

  function Click(e) {
    e.preventDefault();
    const data = { haweye, pass1 };
    console.log(data);
    fetch("http://localhost:4000/signIn", {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "content-type": "application/json" },
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.success) {
          console.log("work !");
          // we have to send the user to dashboard page
          history.push("/Profile", { res });
        } else {
          //(1) we have to put some note to the user
          alert("Sorry,your ID or password not correct, please try again");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div className="body">
      <label id="header" name="header">
        You are Welcome
      </label>
      <div className="content">
        <label>ID :</label>
        <input
          id="haweye"
          name="haweye"
          value={haweye}
          onChange={(event) => setHaweye(event.target.value)}
          required
        ></input>
        <label>Password :</label>
        <input
          id="pass1"
          name="pass1"
          value={pass1}
          onChange={(event) => setPass1(event.target.value)}
          required
        ></input>
        <button className="btn" onClick={Click}>
          Sign In
        </button>
      </div>
    </div>
  );
}

export default SignIn;
