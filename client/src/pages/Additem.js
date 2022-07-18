import React from "react";

function Additem() {
  return (
    <div
      class="rpgui-container framed rpgui-draggable"
      style={{
        marginLeft: "25%",
        position: "center",
        alignItems: "center",
        fontSize: ".9rem",
        padding: "1rem",
        height: "90%",
        width: "45%",
      }}
    >
      <h1>Add Item Form</h1>
      <hr />
      <form>
        <label>Item Name:</label>
        <input
          input
          type="text"
          name="itemName"
          placeholder="What is this Item?"
        />
        <br />
        <br />
        <label>Price:</label>
        <input
          input
          type="text"
          name="ItemPrice"
          placeholder="What is this items Price?"
        />
        <br />
        <br />
        <label>Item Description</label>
        <input
          type="text"
          name="itemDesc"
          placeholder="A quick description of this item"
        />
        <br />
        <br />
        <label>Game of Origin</label>
        <input
          type="text"
          name="gameName"
          placeholder="What Game is this Item Found in?"
        />
        <br />
        <br />
        <p>What Category is this Item? (Choose Only One)</p>
        <input type="checkbox" id="weapon" name="Weapon" value="Weapon" />
        <label for="weapon">WEAPON</label>
        <br />
        <input type="checkbox" id="armor" name="Armor" value="Armor" />
        <label for="armor">ARMOR</label>
        <br />
        <input
          type="checkbox"
          id="consumable"
          name="consumable"
          value="consumable"
        />
        <label for="consumable">CONSUMABLE</label>
        <br />
        <input type="checkbox" id="cosmetic" name="cosmetic" value="cosmetic" />
        <label for="cosmetic">COSMETIC</label>
        <br />
      </form>
    </div>
  );
}

export default Additem;
