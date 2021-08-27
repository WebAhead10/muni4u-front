import React from "react";
// import Profile from "./Profile/Profile";
import Home from "./Home/Home";

export default function Request(props) {
  const [fullname, setFullName] = React.useState("");
  const [haweye, setHaweye] = React.useState("");
  const [sub, setSub] = React.useState("");
  const [content, setContent] = React.useState("");

  function Click(e) {
    e.preventDefault();
    const data = { fullname, haweye, sub, content };
    console.log(data);

    // should we change this link to heroku?

    fetch("http://localhost:4000/request", {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "content-type": "application/json" },
    })
      .then((res) => {
        if (res.status === 201) {
          return <Home />;
          console.log("success!");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }
  return (
    <div className="address">
      <div>
        <h1>Contact us:</h1>
      </div>
      <div className="content">
        <label>Full Name:</label>
        <input
          id="fullname"
          name="fullname"
          value={fullname}
          onChange={(event) => setFullName(event.target.value)}
          required
        ></input>
        <label>ID No. :</label>
        <input
          id="haweye"
          name="haweye"
          value={haweye}
          onChange={(event) => setHaweye(event.target.value)}
          required
        ></input>
        <label>Subject of request:</label>
        <input
          id="sub"
          name="sub"
          value={sub}
          onChange={(event) => setSub(event.target.value)}
          required
        ></input>
        <label>Your request:</label>
        <textarea
          id="textarea"
          name="content"
          value={content}
          onChange={(event) => setContent(event.target.value)}
          required
        ></textarea>
        <button className="btn" onClick={Click}>
          Send
        </button>
      </div>
    </div>
  );
}
