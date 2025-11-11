import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const navigate = useNavigate();
  return (
    <header className="nav">
      <div className="container nav-inner">
        <div className="brand" onClick={() => navigate("/")}>
          <h1>CompanyDirectory</h1>
          <small className="muted">Find companies worldwide</small>
        </div>

        <nav className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/companies">Companies</Link>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
