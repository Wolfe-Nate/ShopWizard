import React from "react";
import logout from "../App"
// import { Link } from 'react-router-dom';
// import Navbar from './components/Navbar';
// import Header from '../components/Header';
// import Card from './components/Card';

function Home() {
  return (
    <div className="rpgui-content">
      <div
        style={{
          marginLeft: "5rem",
          fontSize: "20px",
          padding: "2px",
          bottom: "0px"
        }}
        className="rpgui-container framed rpgui-draggable"
      >
        <card>
          <button className="rpgui-button" type="button" onClick={logout}>
            <p>Logout</p>
          </button>
        </card>
        
      </div>
      <div class="rpgui-container framed rpgui-draggable" 
      style={{
        bottom: "0px",
        right: "0px"
        
      }}
      
      >
            <h1>Inventory</h1>
            <hr />

            <div class="rpgui-icon sword"></div>
            <div class="rpgui-icon shield"></div>
            <div class="rpgui-icon exclamation"></div>
            <br /><br />

            <div class="rpgui-icon potion-red"></div>
            <div class="rpgui-icon potion-green"></div>
            <div class="rpgui-icon potion-blue"></div>
            <br /><br />

            <div class="rpgui-icon weapon-slot"></div>
            <div class="rpgui-icon shield-slot"></div>
            <div class="rpgui-icon armor-slot"></div>
            <br /><br />

            <div class="rpgui-icon helmet-slot"></div>
            <div class="rpgui-icon ring-slot"></div>
            <div class="rpgui-icon potion-slot"></div>
            <br /><br />

            <div class="rpgui-icon magic-slot"></div>
            <div class="rpgui-icon shoes-slot"></div>
            <div class="rpgui-icon empty-slot"></div>
            <br /><br />
        </div>

    </div>
  );
}

export default Home;
