import React, { useState } from "react";
import "./style.css";

const App = () => {
  let [score, setScore] = useState(0);

  return (
    <div className="container text-center mt-5">
      <h1> Hey this is my Counter Application </h1>
      <h3 className="mb-5">The value of score is {score}</h3>
      <button
        className="btn btn-primary mr-2"
        onClick={() => {
          if (score < 25) {
            setScore(score + 1);
          }
        }}
      >
        + Increment
      </button>{" "}
      <button
        className="btn btn-primary mr-2"
        onClick={() => (score > 0 ? setScore(score - 1) : "")}
      >
        - Decrement
      </button>{" "}
      <button
        className="btn btn-danger"
        onClick={() => {
          setScore(0);
        }}
      >
        Reset
      </button>
    </div>
  );
};

export default App;
