import React from "react";
import "./Header.css";

const Header = ({ score, bestScore }) => {
  return (
    <header className="header">
      <div className="score">Score: {score}</div>
      <div className="score">Best Score: {bestScore}</div>
    </header>
  );
};

export default Header;
