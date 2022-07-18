import React from "react";

function Login() {
  return (
    <div
      class="rpgui-container framed rpgui-draggable"
      style={{
        marginLeft: "8rem",
        fontSize: "20px",
        padding: "20px",
      }}
    >
      <h1>Inputs</h1>
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
      <textarea rows="3" cols="50">
        
      </textarea>

      <hr class="golden" />
      <a href="#"> Don't have an account? Sign Up</a>
    </div>
  );
}
export default Login;
