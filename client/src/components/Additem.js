import React, { useState } from "react";
import { useMutation } from "@apollo/client";

import { ADD_ITEM } from "../utils/mutations";
import Additem from "../pages/Additem";

const AddItemForm = () => {
  const [formState, setFormState] = useState({
    itemName: "",
    price: "",
    description: "",
    category: "",
    $gameName: "",
  });
  const [Additem, {error}] = useMutation(ADD_ITEM, {update(cache, {data: addItem}}) {}
};

export default Additem;
