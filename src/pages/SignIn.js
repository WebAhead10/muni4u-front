import React from "react";
import App from "../App";
import "../App.css";
import Profile from "./Profile/Profile";

function SignIn(props) {
  const [haweye, setHaweye] = React.useState("");
  const [pass1, setPass1] = React.useState("");

  function Click(e) {
    e.preventDefault();
    const data = { haweye, pass1 };
    console.log(data);
    fetch("https://muni4u.herokuapp.com/signIn", {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "content-type": "application/json" },
    })
      .then((res) => {
        if (res.success) {
          // console.log("work !");
          // we have to send the user to dashboard page
          return <Home />;
        } else {
          console.log("not work !");
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
      <div>
        <label>ID :</label>
      </div>
      <div>
        <input
          id="haweye"
          name="haweye"
          value={haweye}
          onChange={(event) => setHaweye(event.target.value)}
          required
        ></input>
      </div>
      <div>
        <label>Password :</label>
      </div>
      <div>
        <input
          id="pass1"
          name="pass1"
          value={pass1}
          onChange={(event) => setPass1(event.target.value)}
          required
        ></input>
      </div>

      <div className="btn-div">
        <button className="btn" onClick={Click}>
          Sign In
        </button>
      </div>
    </div>
  );
}

export default SignIn;
