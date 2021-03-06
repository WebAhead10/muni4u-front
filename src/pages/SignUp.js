import React from "react";
import "../App.css";
import { useHistory } from "react-router-dom";
// import { Notification } from 'rsuite';

export default function SignUp(props) {
  let history = useHistory();

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
    // please check if password 1 match to Password 2

    if (is_israeli_id_number(haweye)) {
    }
    // phone number 10

    console.log(check_phone(phone));

    if (pass1 === pass2) {
      // Notification.success(props: NotificationProps);
    }

    console.log(data);
    fetch("http://localhost:4000/signUp", {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "content-type": "application/json" },
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        if (res.success) {
          console.log("work !");
          // this function is to change page
          history.push("/SignIn");
        } else {
          // (1) we have to put some note to the user
          console.log("not work !");
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
        <div className="btn-div">
          <button className="btn" onClick={Click}>
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );

  function is_israeli_id_number(id) {
    id = String(id).trim();
    if (id.length > 9 || isNaN(id)) return false;
    id = id.length < 9 ? ("00000000" + id).slice(-9) : id;
    return (
      Array.from(id, Number).reduce((counter, digit, i) => {
        const step = digit * ((i % 2) + 1);
        return counter + (step > 9 ? step - 9 : step);
      }) %
        10 ===
      0
    );
  }

  function check_phone(phone) {
    return phone.length !== 10 || isNaN(phone) ? false : true;
  }
}
