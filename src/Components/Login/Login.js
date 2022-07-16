import React, { useState } from "react";
import axios from "axios";
import "./Login.css";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsername = (e) => {
    //console.log("username", e.target.value);
    setUsername(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  //console.log("username", username, "password", password);
  //console.log("password", password);
  const handleSubmit = async () => {
    const apiResp = await axios.post(
      "https://dev.sutradhar.tech/libraryServices/api/v1/login/",
      { idlogin: username, password: password }
    );

    console.log("apiresp", apiResp);
  };
  return (
    <div className="container">
      <h3>Welcome to Library.</h3>
      <section className="section">
        <label>Username: </label>
        <input type="text" required="true" onChange={handleUsername} />
      </section>
      <section className="section">
        <label>Password:</label>
        <input type="password" required="true" onChange={handlePassword} />
      </section>
      <button className="loginbutton" type="submit" onClick={handleSubmit}>
        Login
      </button>
    </div>
  );
}

export default Login;
