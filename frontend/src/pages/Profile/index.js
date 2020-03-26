import React from "react";

import { Link } from "react-router-dom";
import { FiPower, FiTrash2 } from "react-icons/fi";

import logoImg from "../../assets/logo.svg";

import "./styles.css";

export default function Profile() {
  return (
    <div className="profile-container">
      <header>
        <img src={logoImg} alt="Be The Hero" />
        <span>Welcome,APAD</span>
        <Link className="button" to="/indidents/new">
          Register new incidents
        </Link>

        <button type="button">
          <FiPower size={18} color="#E02041" />
        </button>
      </header>

      <h1>Registered Incidents</h1>

      <ul>
        <li>
          <strong>Incidents:</strong>
          <p>incidents test</p>

          <strong>Description:</strong>
          <p>description test</p>

          <strong>Value:</strong>
          <p>120€</p>

          <button type="button">
            <FiTrash2 size={20} color="#a8a8b3" />
          </button>
        </li>
        <li>
          <strong>Incidents:</strong>
          <p>incidents test</p>

          <strong>Description:</strong>
          <p>description test</p>

          <strong>Value:</strong>
          <p>120€</p>

          <button type="button">
            <FiTrash2 size={20} color="#a8a8b3" />
          </button>
        </li>
        <li>
          <strong>Incidents:</strong>
          <p>incidents test</p>

          <strong>Description:</strong>
          <p>description test</p>

          <strong>Value:</strong>
          <p>120€</p>

          <button type="button">
            <FiTrash2 size={20} color="#a8a8b3" />
          </button>
        </li>
        <li>
          <strong>Incidents:</strong>
          <p>incidents test</p>

          <strong>Description:</strong>
          <p>description test</p>

          <strong>Value:</strong>
          <p>120€</p>

          <button type="button">
            <FiTrash2 size={20} color="#a8a8b3" />
          </button>
        </li>
      </ul>
    </div>
  );
}
