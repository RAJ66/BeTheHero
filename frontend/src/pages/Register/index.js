import React from "react";
import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

import logoImg from "../../assets/logo.svg";

import "./styles.css";

export default function Register() {
  return (
    <div className="register-container">
      <div className="content">
        <section>
          <img src={logoImg} alt="Be The Hero" />
          <h1>Registration</h1>
          <p>
            Do your registration, get into the platform and help people to find
            your ONG incidents.
          </p>
          <Link className="back-link" to="/profile">
            <FiArrowLeft size={16} color="#E02041" />I have an account
          </Link>
        </section>

        <form>
          <input type="text" placeholder="Name of the ONG" />
          <input type="email" placeholder="E-mail" />
          <input type="text" placeholder="WhatsApp" />

          <div className="input-group">
            <input type="text" placeholder="City" />
            <input type="text" placeholder="UF" style={{ width: 80 }} />
          </div>
          <button className="button" type="submit">
            Register
          </button>
        </form>
      </div>
    </div>
  );
}
