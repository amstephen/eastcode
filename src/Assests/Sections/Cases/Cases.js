import React from "react";
import "./Cases.css";

function Cases() {
  return (
    <div id="cases">
      <h1 id="caseh">Cases</h1>
      <p>Some of the things we have done. And we did it with love!</p>
      <div id="cases-container">
        <div id="case-container-left">
          <h1>
            Implemented B2B System <br />
            to simplify procurement process
          </h1>
          <button>Read the case study</button>
        </div>
        <div id="case-container-right">
          <img
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YjJifGVufDB8fDB8fHww"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Cases;
