import React from "react";

export default function Request(props) {
  const [fullname, setFullName] = React.useState("");
  const [haweye, setHaweye] = React.useState("");
  const [sub, setSub] = React.useState("");
  const [content, setContent] = React.useState("");

  function Click(e) {
    e.preventDefault();
    const data = { fullname, haweye, sub, content };
    console.log(data);
    fetch("http://localhost:4000/request", {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "content-type": "application/json" },
    })
      .then((res) => {
        if (res.status === 201) {
          //   <Route path="/Profile" component={lastPage} /> need a new page
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
        <div>
          <label id="date" name="date">
            Date of today
          </label>
          <h3>Contact us:</h3>
          <div>
            <label>Full Name:</label>
            <input
              id="fullname"
              name="fullname"
              value={fullname}
              onChange={(event) => setFullName(event.target.value)}
              required
            ></input>
          </div>
          <div>
            <label>ID No. :</label>
            <input
              id="haweye"
              name="haweye"
              value={haweye}
              onChange={(event) => setHaweye(event.target.value)}
              required
            ></input>
          </div>
          <div>
            <label>Subject of request:</label>
            <input
              id="sub"
              name="sub"
              value={sub}
              onChange={(event) => setSub(event.target.value)}
              required
            ></input>
          </div>
          <div>
            <label>Your request:</label>
            <input
              id="content"
              name="content"
              value={content}
              onChange={(event) => setContent(event.target.value)}
              required
            ></input>
          </div>
          <div className="btn-div">
            <button className="btn" onClick={Click}>
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
