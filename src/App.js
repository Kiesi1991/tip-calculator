import React from "react";
import Service from "./Service";
import Payment from "./Payment";
import { useState } from "react";

export default function App() {
  const [cost, setCost] = useState(0);
  const [myPercentage, setMyPercentage] = useState("0");
  const [friendPercentage, setFriendPercentage] = useState("0");

  function handleReset() {
    setCost(0);
    setMyPercentage("0");
    setFriendPercentage("0");
  }

  const tip =
    cost * ((Number(myPercentage) + Number(friendPercentage)) / 2 / 100);

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <span>How much was the bill? </span>
          <input
            type="text"
            value={cost}
            onChange={(e) => setCost(Number(e.target.value))}
          ></input>
        </div>
        <Service percentage={myPercentage} onPercentage={setMyPercentage}>
          How did you like the service?{" "}
        </Service>
        <Service
          percentage={friendPercentage}
          onPercentage={setFriendPercentage}
        >
          How did your friend like the service?{" "}
        </Service>
      </header>
      {cost > 0 && (
        <>
          <Payment cost={cost} tip={tip} />
          <button onClick={handleReset}>Reset</button>
        </>
      )}
    </div>
  );
}
