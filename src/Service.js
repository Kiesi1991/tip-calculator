import React from "react";

export default function Service({ children, percentage, onPercentage }) {
  return (
    <div>
      <label>{children}</label>
      <select value={percentage} onChange={(e) => onPercentage(e.target.value)}>
        <option value="0">Dissatisfied (0%)</option>
        <option value="5">It was okay (5%)</option>
        <option value="10">It was good (10%)</option>
        <option value="20">Absolute amazing! (20%)</option>
      </select>
    </div>
  );
}
