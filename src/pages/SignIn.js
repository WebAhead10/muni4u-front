import React from "react";
import "../App.css";

function SignIn(props) {
  const [phone, setPhone] = React.useState("");

  const [pass1, setPass1] = React.useState("");

  function Click(e) {
    e.preventDefault();
    const data = {  phone, pass1 };
    console.log(data);
    fetch("http://localhost:4000/signIn", {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "content-type": "application/json" },
    })
      .then((res) => {
        if (res.status === 201) {
          // window.location.href = "/home"
          console.log("success!");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div className="body">
      <div>
        <label>Phone :</label>
      </div>
      <div>
        <input
          id="phone"
          name="phone"
          value={phone}
          onChange={(event) => setPhone(event.target.value)}
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
