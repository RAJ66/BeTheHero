import React from "react";
import { FiLogIn } from "react-icons/fi";
import "./styles.css";

import heroesImg from "../../assets/heroes.png";
import logoImg from "../../assets/logo.svg";

export default function Logon() {
  return (
    <div className="logon-container">
      <section className="form">
        <img src={logoImg} alt="Be The Hero" />
        <form>
          <h1>Login</h1>
          <input type="Your ID" />
          <button type="submit" className="button">
            Enter
          </button>
          <a href="/register">
            <FiLogIn size={16} color="#E02041" />I dont have an account
          </a>
        </form>
      </section>
      <img src={heroesImg} alt="Heroes" />
    </div>
  );
}
