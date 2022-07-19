import React from "react";
import logout from "../App"
import { useQuery } from "@apollo/client";
import { QUERY_ALL_ITEMS, QUERY_SINGLE_ITEM } from "../utils/queries";
import ItemCard from "../components/cards";
import { Link } from "react-router-dom";
import Auth from "../utils/auth";
// import  from "../utils/queries";

function Home() {
  const { loading, data } = useQuery(QUERY_ALL_ITEMS);
  const items = data?.items || [];
  // const userData = useQuery(QUERY_SINGLE_USER, {variables: _id})
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
        <div  >
          <button style={{
          left: "0px"
        }} className="rpgui-button" onClick={logout} type="button">
            <p>Logout</p>
          </button>
          
          {/* <p  
          style={{
  fontSize: ".8rem",
  color: "black",
  float: "right"
}}
>
You have {userData.coins} coins left!</p> */}
{/* need user ID from queries.js */}
        </div>
      </div>
      <div>
        {loading ? 
        <div>Loading...</div> : 
      <ItemCard items={items} />}
      </div>
    </div>
  );
}

export default Home;
