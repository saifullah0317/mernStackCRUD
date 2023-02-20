import React from "react";
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" to="./users">
                Users
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="./adduser">
                Add User
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
