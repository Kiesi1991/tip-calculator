import React from "react";

export default function Payment({ cost, tip }) {
  const total = cost + tip;
  return (
    <div>
      You pay ${total} (${cost} + ${tip}){" "}
    </div>
  );
}
