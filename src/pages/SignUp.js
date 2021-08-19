import React from "react";
import "../App.css";

export default function SignUp(props) {
  const [fullname, setFullName] = React.useState("");
  const [haweye, setHaweye] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [address, setAddress] = React.useState("");
  const [pass1, setPass1] = React.useState("");
  const [pass2, setPass2] = React.useState("");

  function Click(e) {
    e.preventDefault();
    const data = { fullname, haweye, phone, email, address, pass1, pass2 };
    console.log(data);
    fetch("http://localhost:4000/signUp", {
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
      <div className="container">
        <h4>Please enter your details</h4>
        <div>
          <label>Full Name:</label>
        </div>
        <div>
          <input
            id="fullname"
            name="fullname"
            required="true"
            value={fullname}
            onChange={(event) => setFullName(event.target.value)}
            required
          ></input>
        </div>
        <div>
          <label>ID No. :</label>
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
          <label>Phone No. :</label>
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
          <label>Email:</label>
        </div>
        <div>
          <input
            id="email"
            name="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          ></input>
        </div>
        <div>
          <label>Address:</label>
        </div>
        <div>
          <input
            id="address"
            name="address"
            value={address}
            onChange={(event) => setAddress(event.target.value)}
            required
          ></input>
        </div>
        <h4>Create a password</h4>
        <div>
          <label>Password:</label>
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
        <div>
          <label>Password Again:</label>
        </div>
        <div>
          <input
            id="pass2"
            name="pass2"
            value={pass2}
            onChange={(event) => setPass2(event.target.value)}
            required
          ></input>
        </div>
        <div>
          <button className="btn" onClick={Click}>
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
}
