import React from "react";

function SignUp() {
  return (
  <div class="rpgui-content">
    <div
      class="rpgui-container framed "
      style={{
        marginLeft: "25%",
        marginTop: "5%",
        position: "center",
        alignItems: "center",
        fontSize: ".9rem",
        padding: "1rem",
        height: "45%",
        width: "35%",
      }}
    >
      <h1>Sign Up</h1>
      <hr />

      <label>New Username:</label>
      <input type="text" name="username" value="" placeholder="HeroName" />
      <br />
      <br />

      <label>New Password:</label>
      <input
        type="password"
        name="password"
        value=""
        placeholder="Secret Password"
      />
      <br />
      <br />

      {/* <label>Your hero bio:</label>
      <textarea rows="3" cols="50"></textarea> */}
      <button
        class="rpgui-button"
        type="button"
        style={{
          float: "right",
          // justifyContent: "center",
          position: "relative",
          fontSize: ".9rem",
          padding: "1rem",
          height: "15%",
          width: "5%",
        }}
      >
        <p
          style={{
            alignItems: "center",
            fontSize: ".9rem",
          }}
        >
          Login
        </p>
      </button>
      <hr class="golden" />
      <a href="/login"> Already have an account? Log In</a>
    </div>
    </div>
  );
}
export default SignUp;
