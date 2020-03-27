import React from "react";
import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

import "./styles.css";
import logoImg from "../../assets/logo.svg";

export default function NewIncident() {
  return (
    <div className="new-incident-container">
      <div className="content">
        <section>
          <img src={logoImg} alt="Be The Hero" />
          <h1>Registration new incident</h1>
          <p>Describe your incident to find a hero to sove it.</p>
          <Link className="back-link" to="/">
            <FiArrowLeft size={16} color="#E02041" />
            Go back to home
          </Link>
        </section>

        <form>
          <input type="text" placeholder="Incident Title" />
          <textarea placeholder="Description" />
          <input type="text" placeholder="Value" />

          <button className="button" type="submit">
            Register
          </button>
        </form>
      </div>
    </div>
  );
}
