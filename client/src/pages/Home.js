import React from "react";
// import { Link } from 'react-router-dom';
// import Navbar from './components/Navbar';
// import Header from '../components/Header';
// import Card from './components/Card';

function Home() {
  return (
    <div className="rpgui-content">
      <div className="rpgui-container framed rpgui-draggable">
        <card>
          <button className="rpgui-button" type="button">
            <p>Sign Up</p>
          </button>
        </card>
      </div>
      <div
        style={{
          marginLeft: "8rem",
          fontSize: "20px",
          padding: "20px",
          color: "white",
        }}
        className="rpgui-container framed rpgui-draggable"
      >
        <card>
          <button className="rpgui-button" type="button">
            <p>Login</p>
          </button>
        </card>
      </div>
    </div>
  );
}

export default Home;
