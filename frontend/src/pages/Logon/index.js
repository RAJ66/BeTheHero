import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { FiLogIn } from "react-icons/fi";

import api from "../../services/api";

import "./styles.css";

import heroesImg from "../../assets/heroes.png";
import logoImg from "../../assets/logo.svg";

export default function Logon() {
  const [id, setId] = useState("");
  const history = useHistory();

  const html = document.querySelector("html");
  //const checkbox = document.querySelector("input[name=theme]");

  // const getStyle = (element, style) =>
  //   window.getComputedStyle(element).getPropertyValue(style);

  function transformKeyMy(key) {
    for (let index = 0; index < key.length; index++) {
      if (key[index] == key[index].toUpperCase()) {
        key = key.replace(key[index], "-" + key[index].toLowerCase());
      }
    }
    return "--" + key;
  }

  const changeColors = (colors) => {
    Object.keys(colors).map((key) =>
      html.style.setProperty(transformKeyMy(key), colors[key])
    );
  };

  let tmp = "light";
  function change() {
    if (tmp == "light") {
      changeColors(darkMode);
      localStorage.setItem("theme", "dark");
      tmp = "dark";
      console.log(tmp);
    } else {
      changeColors(lightMode);
      localStorage.setItem("theme", "light");

      tmp = "light";
      console.log(tmp);
    }
    console.log("change");
  }

  const darkMode = {
    bg: "#212121",
    bgPanel: "#323232",
    color: "#e02041",
    colorWhite: "#f2f2f2",
    colorTextForm: "#f2f2f2",
    colorText: "#f2f2f2",
    colorBorder: "#dcdce6",
    colorBorderHover: "#999",
    colorLink: "#f2f2f2",
  };

  const lightMode = {
    bg: "#f0f0f5",
    bgPanel: "#ebebeb",
    color: "#e02041",
    colorWhite: "#fff",
    colorTextForm: "#333",
    colorText: "#737380",
    colorBorder: "#dcdce6",
    colorBorderHover: "#999",
    colorLink: "#41414d",
  };

  async function handleLogin(e) {
    e.preventDefault();

    try {
      const response = await api.post("sessions", { id });

      localStorage.setItem("ongId", id);
      localStorage.setItem("ongName", response.data.name);

      console.log(response.data.name);

      history.push("/profile");
    } catch (error) {
      alert("Error in login, please try again.");
      console.log(error);
    }
  }

  return (
    <div className="logon-container">
      <section className="form">
        <img src={logoImg} alt="Be The Hero" />
        <form onSubmit={handleLogin}>
          <h1>Login</h1>
          <input
            type="Your ID"
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
          <button type="submit" className="button">
            Enter
          </button>
          <button type="button" className="button" onClick={change}>
            Light / Dark
          </button>
          <Link className="back-link" to="/register">
            <FiLogIn size={16} color="#E02041" />I dont have an account
          </Link>
        </form>
      </section>
      <img src={heroesImg} alt="Heroes" />
    </div>
  );
}
