import React from "react";
import "./Loader.css";

export default function Loader({ text = "Finding companies" }) {
  return (
    <div className="loader-wrap">
      <div className="loader-box">
        <div className="dotdot">🔍</div>
        <div className="loader-text">
          {text}
          <span className="dots">...</span>
        </div>
      </div>
    </div>
  );
}

