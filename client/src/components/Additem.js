import React, { useState } from "react";
import { useMutation } from "@apollo/client";

import { ADD_ITEM } from "../../utils/mutations";
import Additem from "../pages/Additem";

const AddItemForm = () => {
  const [formState, setFormState] = useState({
    itemName: "",
    ItemPrice: "",
    itemDesc: "",
    gameName: "",
  });
};

export default Additem;
