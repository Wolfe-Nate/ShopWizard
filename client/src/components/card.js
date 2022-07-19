import React, { useState } from "react";

export default function Card({ item, currentUser }) {
  const [itemInfo, setItem] = useState(item || {});
  const [userInfo, setUser] = useState(currentUser || {});
  function purchaseItem(event) {
    console.log(itemInfo);
    console.log(userInfo);
    const purchaseCheck = userInfo.coins - itemInfo.price;
    if (purchaseCheck < 0) {
      console.log("Not enough coin!");
    } else {
      //   const ui = { ...userInfo };
      //   ui.coins = purchaseCheck;
      //   ui.items = [...ui.items, itemInfo._id];
      const requestData = {
        coins: purchaseCheck,
        itemId: itemInfo._id,
      };
      console.log(requestData);
    }
    //this.coin vs User.coins -- if this.price is more than User.coins, throw error
    //if this.price < User.coins, subtract this.price from User.coins
    //push this.Item to User.items
  }
  return (
    // <div
    //   className="rpgui-container framed rpgui-draggable"
    //   style={{
    //     width: "280px",
    //     height: "450px",
    //     marginTop: "8rem",
    //     marginLeft: "3rem",
    //     display: "inline-block",
    //     position: "relative",
    //     padding: "1rem",
    //   }}
    // >
    <>
      <div
        style={{
          padding: ".2rem",
        }}
      >
        <h1>{itemInfo.itemName}</h1>
      </div>
      <hr className="golden" />

      <div>

        <img src={item.image} alt={item.itemName} style={{ marginLeft: '25%', width: '120px', height: '120px', }}></img>
      </div>

      <div
        className="rpgui-container framed-golden-2"
        style={{
          // marginTop: '5px',
          width: "100%",
          height: "90px",
          // left: '0px',
          // top: '0px',
        }}
      >
        <label>{itemInfo.description}.</label>
      </div>
      <hr className="golden" />

      <div
        className="rpgui-icon coin hovertext"
        style={{
          marginLeft: "25px",
          // marginRight: '25px',
          // data-hover= {item.price},
        }}
      >
        <label>{itemInfo.price}</label>
      </div>

      <div
        className="rpgui-icon sword hovertext"
        style={{
          marginLeft: "25px",
          // marginRight: '25px',
          // data-hover={itemInfo.category},
        }}
      >
        <label>{itemInfo.category}</label>
      </div>
      <hr className="golden-2" />

      <div
        className=""
      // style={{
      //     marginLeft: '25%',
      // }}
      >
        <p>{itemInfo.gameName}</p>
      </div>
      <div>
        <button
          className="rpgui-button golden"
          type="button"
          onClick={purchaseItem}
          style={{
            marginLeft: "4%",
          }}
        >
          <p
            style={{
              marginTop: "13px",
            }}
          >
            Purchase Item
          </p>
        </button>
      </div>
      {/* </div> */}
    </>
  );
}
