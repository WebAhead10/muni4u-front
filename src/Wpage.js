import React from "react";
import "./WPage.css";

function WelcomePage(params) {
    return (
        <div className="body">
          <div className="container">
            <div>
              <label id="date" name="date">
                Date of today
              </label>
              
                <button className="btn">
                  Send
                </button>
             
            </div>
          </div>
        </div>
      );
}
export default WelcomePage;
 

