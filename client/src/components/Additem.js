import React, { useState } from "react";
import { useMutation } from "@apollo/client";

import { ADD_ITEM } from "../utils/mutations";
import AddItem from "../pages/AddItem";
import { QUERY_ALL_ITEMS } from "../utils/queries";

const AddItemForm = () => {
  const [formState, setFormState] = useState({
    itemName: "",
    price: "",
    description: "",
    category: "",
    $gameName: "",
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
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addItem({
        variable: { ...formState },
      });

      setFormState({
        itemName: "",
        price: "",
        description: "",
        category: "",
        gameName: "",
      });
    } catch (err) {
      console.error(err);
    }
  };
};

export default AddItem;
