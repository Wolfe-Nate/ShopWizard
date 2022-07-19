import React from "react";

function Additem() {
  // const {loading, data}
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
        <label for="weapon">WEAPON</label>
        <input type="checkbox" id="weapon" name="Weapon" value="Weapon" />
        <br />
        <label for="armor">ARMOR</label>
        <input type="checkbox" id="armor" name="Armor" value="Armor" />
        <br />
        <label for="consumable">CONSUMABLE</label>
        <input
          type="checkbox"
          id="consumable"
          name="consumable"
          value="consumable"
        />
        <br />
        <label for="cosmetic">COSMETIC</label>
        <input type="checkbox" id="cosmetic" name="cosmetic" value="cosmetic" />
        <br />
        {/* need to add the handleFormSubmit from the component */}
        <button
          className="rpgui-button"
          style={{ cursor: "pointer" }}
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Additem;
