import React, { useState } from "react";
import { useMutation } from "@apollo/client";

import { ADD_ITEM } from "../utils/mutations";
import { QUERY_ALL_ITEMS } from "../utils/queries";

function AddItem() {
  const [formState, setFormState] = useState({
    itemName: "",
    price: 0,
    description: "",
    category: "",
    gameName: "",
  });
  const [addItem, { error }] = useMutation(ADD_ITEM, {
    update(cache, { data: { addItem } }) {
      try {
        const { getItems } = cache.readQuery({ query: QUERY_ALL_ITEMS });

        cache.writeQuery({
          query: QUERY_ALL_ITEMS,
          data: { getItems: [addItem, ...getItems] },
        });
      } catch (e) {
        console.error(e);
      }
    },
  });
  if (error) {
    console.log(JSON.stringify(error));
  }
  const handleInputChange = (event) => {
    const fS = { ...formState };
    const { name, value, type } = event.target;
    if (type === "number") {
      fS[name] = parseInt(value);
      console.log(type);
    } else {
      fS[name] = value;
    }
    setFormState(fS);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      console.log(formState);
      await addItem({
        variables: { ...formState },
      });

      setFormState({
        itemName: "",
        price: 0,
        description: "",
        category: "",
        gameName: "",
      });
    } catch (err) {
      console.error(err);
    }
  };

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
          onChange={handleInputChange}
        />
        <br />
        <br />
        <label>Price:</label>
        <input
          input
          type="number"
          name="price"
          placeholder="What is this items Price?"
          onChange={handleInputChange}
        />
        <br />
        <br />
        <label>Item Description</label>
        <input
          type="text"
          name="description"
          placeholder="A quick description of this item"
          onChange={handleInputChange}
        />
        <br />
        <br />
        <label>Game of Origin</label>
        <input
          type="text"
          name="gameName"
          placeholder="What Game is this Item Found in?"
          onChange={handleInputChange}
        />
        <br />
        <br />
        <p>What Category is this Item? (Choose Only One)</p>
        <select name="category" onChange={handleInputChange}>
          <option value="">Select a Category</option>
          <option value="Weapon">Weapon</option>
          <option value="Armor">Armor</option>
          <option value="Consumable">Consumable</option>
          <option value="Cosmetic">Cosmetic</option>
        </select>
        {/* <label for="weapon">WEAPON</label>
        <input type="radio" id="weapon" name="Weapon" value="Weapon" />
        <br />
        <label for="armor">ARMOR</label>
        <input type="radio" id="armor" name="Armor" value="Armor" />
        <br />
        <label for="consumable">CONSUMABLE</label>
        <input
          type="radio"
          id="consumable"
          name="consumable"
          value="consumable"
        />
        <br />
        <label for="cosmetic">COSMETIC</label>
        <input type="radio" id="cosmetic" name="cosmetic" value="cosmetic" placeholder="co" />
        <br /> */}

        <button
          className="rpgui-button"
          style={{ cursor: "pointer" }}
          type="submit"
          onClick={handleFormSubmit}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default AddItem;
