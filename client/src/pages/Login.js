import React from "react";

function Login() {
  return (
    <div
      class="rpgui-container framed rpgui-draggable"
      style={{
        marginLeft: "25%",
        position: "center",
        alignItems: "center",
        fontSize: ".9rem",
        padding: "1rem",
        height: "45%",
        width: "45%",
      }}
    >
      <h1>Login</h1>
      <hr />

      <label>Your hero name:</label>
      <input type="text" name="FirstName" value="" placeholder="Hero name" />
      <br />
      <br />

      <label>Your hero last name:</label>
      <input
        type="text"
        name="FirstName"
        value=""
        placeholder="Hero last name"
      />
      <br />
      <br />

      <label>Your hero bio:</label>
      <textarea rows="3" cols="50"></textarea>
      <button
        class="rpgui-button"
        type="button"
        style={{
          float: "right",
          justifyContent: "center",
          fontSize: ".9rem",
          padding: "1rem",
          height: "15%",
          width: "5%",
        }}
      >
        <p
          style={{
            position: "relative",
            float: "right",
            justifyContent: "center",
            fontSize: ".9rem",
          }}
        >
          Login
        </p>
      </button>
      <hr class="golden" />
      <a href="/signup"> Don't have an account? Sign Up</a>
    </div>
  );
}
export default Login;
