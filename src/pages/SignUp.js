import React from "react";

export default function SignUp(props) {
  const [fullname, setFullName] = React.useState("");
  const [haweye, setID] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [address, setAddress] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [pass2, setPass2] = React.useState("");

  function Click(e) {
      e.preventDefault();
      const data = { fullname, haweye, phone, email, address, password, pass2 };
      console.log(data);
      fetch("http://localhost:4000/signUp", {
          method: "POST",
          body: JSON.stringify(data),
          headers: { "content-type": "application/json" },
      })
      .then((res) => {
          if ( res.status === 201){
              // window.location.href = "/home"
              console.log("success!");
      }})
      .catch((error) => {
          console.log(error);
      })
  }
  return (
    <div>
      <h6>Please enter your details</h6>
      <div>
        <label>Full Name:</label>
        <input id="username" name="username" value={fullname} onChange={(event) => setFullName(event.target.value)} required></input>
      </div>
      <div>
        <label>ID No. :</label>
        <input id="idnumber" name="idnumber" value={haweye} onChange={(event) => setID(event.target.value)} required></input>
      </div>
      <div>
        <label>Phone No. :</label>
        <input id="phone" name="phone" value={phone} onChange={(event) => setPhone(event.target.value)} required></input>
      </div>
      <div>
        <label>Email:</label>
        <input id="email" name="email" value={email} onChange={(event) => setEmail(event.target.value)} required></input>
      </div>
      <div>
        <label>Address:</label>
        <input id="address" name="address" value={address} onChange={(event) => setAddress(event.target.value)} required></input>
      </div>
      <h6>Create a password</h6>
      <div>
        <label>Password:</label>
        <input id="password" name="password" value={password} onChange={(event) => setPassword(event.target.value)} required></input>
      </div>
      <div>
        <label>Password Again:</label>
        <input id="pass2" name="pass2" value={pass2} onChange={(event) => setPass2(event.target.value)} required></input>
      </div>
      <div>
        <button className="btn" onClick={Click}>Sign Up</button>
      </div>
    </div>

  );
}


