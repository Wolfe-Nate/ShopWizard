import React from "react";
import logout from "../App"
// import { Link } from 'react-router-dom';
// import Navbar from './components/Navbar';
// import Header from '../components/Header';
// import Card from './components/Card';
import { useQuery } from '@apollo/client';
import { QUERY_ALL_ITEMS } from '../utils/queries'

import ItemCard from '../components/cards'

function Home() {

  const { loading, data } = useQuery(QUERY_ALL_ITEMS);

  const items = data?.items || [];

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
        <div>
          <button className="rpgui-button" type="button">
            <p>Logout</p>
          </button>
        </div>

      </div>
      <div className="rpgui-container framed rpgui-draggable"
        style={{
          bottom: "0px",
          right: "0px"

        }}

      >
        <h1>Inventory</h1>
        <hr />

        <div className="rpgui-icon sword"></div>
        <div className="rpgui-icon shield"></div>
        <div className="rpgui-icon exclamation"></div>
        <br /><br />

        <div className="rpgui-icon potion-red"></div>
        <div className="rpgui-icon potion-green"></div>
        <div className="rpgui-icon potion-blue"></div>
        <br /><br />

        <div className="rpgui-icon weapon-slot"></div>
        <div className="rpgui-icon shield-slot"></div>
        <div className="rpgui-icon armor-slot"></div>
        <br /><br />

        <div className="rpgui-icon helmet-slot"></div>
        <div className="rpgui-icon ring-slot"></div>
        <div className="rpgui-icon potion-slot"></div>
        <br /><br />

        <div className="rpgui-icon magic-slot"></div>
        <div className="rpgui-icon shoes-slot"></div>
        <div className="rpgui-icon empty-slot"></div>
        <br /><br />
      </div>

      <div>{loading ? (
        <div>Loading...</div>
      ) : (
        <ItemCard
          items={items}
        />
      )}
      </div>


    </div>
  );
}

export default Home;
