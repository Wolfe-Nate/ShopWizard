import React from "react";

function Admin() {
    return (
      <div
        class="rpgui-container framed rpgui-draggable"
        style={{
          marginLeft: "25%",
          position: "center",
          alignItems: "center",
          fontSize: ".9rem",
          padding: "1rem",
          height: "45%",
          width: "45%",
        }}
      >
        <h1>Add Item Form</h1>
        <hr />

        <label>Item Name:</label>
        <input
          type="text"
          name="itemName"
          value=""
          placeholder="What is this Item?"
        />
        <br />
        <br />
        <label>Price:</label>
        <input
          type="text"
          name="ItemPrice"
          value=""
          placeholder="What is this items Price?"
        />
        <br />
        <br />
        <label>Item Image</label>
        <input
          type="text"
          name="itemImage"
          value=""
          placeholder="Link a picture of the Item"
        />
        <br />
        <br />
        <label>Item Description</label>
        <input
          type="text"
          name="itemDesc"
          value=""
          placeholder="A quick description of this item"
        />
        <br />
        <br />
        <label>Game of Origin</label>
        <input
          type="text"
          name="itemGame"
          value=""
          placeholder="What Game is this Item Found in?"
        />
        <br />
        <br />
        <label>Category</label>
        <input
          type="text"
          name="category"
          value=""
          placeholder="What Game is this Item Found in?"
        />
      </div>
    );
}