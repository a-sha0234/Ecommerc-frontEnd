import { Link } from "react-router-dom";
import React from "react";

export default function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">
            <p>Home</p>
          </Link>
        </li>
        <li>
          <Link to="/trainers">
            <p>Trainers</p>
          </Link>
        </li>
        <li>
          <Link to="/shirts">
            <p>Shirts</p>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
