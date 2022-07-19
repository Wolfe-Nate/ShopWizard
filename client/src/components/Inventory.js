import React from 'react';

import '../styles/style.css';


function Inventory() {

return (
<div
        className="rpgui-container framed rpgui-draggable"
        style={{
          bottom: "0px",
          right: "0px",
        }}
      >
        <h1>Inventory</h1>
        <hr />

        <div className="rpgui-icon sword"></div>
        <div className="rpgui-icon shield"></div>
        <div className="rpgui-icon exclamation"></div>
        <br />
        <br />

        <div className="rpgui-icon potion-red"></div>
        <div className="rpgui-icon potion-green"></div>
        <div className="rpgui-icon potion-blue"></div>
        <br />
        <br />

        <div className="rpgui-icon weapon-slot"></div>
        <div className="rpgui-icon shield-slot"></div>
        <div className="rpgui-icon armor-slot"></div>
        <br />
        <br />

        <div className="rpgui-icon helmet-slot"></div>
        <div className="rpgui-icon ring-slot"></div>
        <div className="rpgui-icon potion-slot"></div>
        <br />
        <br />

        <div className="rpgui-icon magic-slot"></div>
        <div className="rpgui-icon shoes-slot"></div>
        <div className="rpgui-icon empty-slot"></div>
        <br />
        <br />
      </div>
      )}

      export default Inventory