import React from "react";
import logout from "../App"
import { useQuery } from "@apollo/client";
import { QUERY_ALL_ITEMS, QUERY_SINGLE_ITEM } from "../utils/queries";
import ItemCard from "../components/cards";
import { Link } from "react-router-dom";
import Auth from "../utils/auth";
// import QUERY_SINGLE_USER from "../utils/queries";

function Home() {
  const { loading, data } = useQuery(QUERY_ALL_ITEMS);
  const items = data?.items || [];
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  return (
    <div className="rpgui-content"
    style={{
      overflowY: "scroll"
    }}
    >
      <div
        style={{
          marginLeft: "5rem",
          fontSize: "20px",
          padding: "2px",
          bottom: "0px",
          
        }}
        
      >
      </div>
      <button style={{
          left: "0px"
        }} className="rpgui-button" onClick={logout} type="button">
            <p>Logout</p>
          </button>

          <a href="/inventory">
          <button style={{
          left: "0px"
        }} className="rpgui-button"  type="button">
            <p>Inventory</p>
          </button></a>

      <div>
        <a href="/AddItem">
          <button style={{
          right: "0px"
        }} className="rpgui-button"  type="button">
            <p>Add Item</p>
          </button></a>

          <a href="/Admin">
          <button style={{
          right: "0px",
            position: "relative"
        }} className="rpgui-button"  type="button">
            <p>Admin</p>
          </button></a>
        {loading ? 
        <div>Loading...</div> : 
      <ItemCard items={items} />}
      </div>
        <div  >
          

          
          
          {/* <p  
          style={{
  fontSize: ".8rem",
  color: "black",
  float: "right"
}}
>
You have {QUERY_SINGLE_USER.coins} coins left!</p> */}
        </div>
    </div>


  );
}

export default Home;
