import React from "react";
import "../App.css";

function SignIn(props) {
  const [phone, setPhone] = React.useState("");

  const [pass1, setPass1] = React.useState("");

  function Click(e) {
    e.preventDefault();
    const data = { phone, pass1 };
    console.log(data);
    fetch("https://muni4u.herokuapp.com/signIn", {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "content-type": "application/json" },
    })
      .then((res) => {
        if (res.success) {
          console.log("work !");
          // we have to send the user to dashboard page 
        }
        else{
          console.log("not work !");
          //(1) we have to put some note to the user
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
          id="id"
          name="id"
          value={phone} // pleas change this to be match with the back-end
          onChange={(event) => setPhone(event.target.value)}
          required
        ></input>
      </div>
      <div>
        <label>Password :</label>
      </div>
      <div>
        <input
          id="password"
          name="password"
          value={pass1} // pleas change this to be match with the back-end
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
