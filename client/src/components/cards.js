import React from "react";
import Card from "./card";
import "../styles/style.css";
import { useQuery } from "@apollo/client";
import { QUERY_ME } from "../utils/queries";
// itemName
// image
// price
// description
// category
// gameName

const ItemCard = ({ items }) => {
    const { loading, data } = useQuery(QUERY_ME);
    //   const currentUser = data?.me || {};
    const currentUser = data?.me || data;
    if (items.length <= 0 || loading) {
        return <h3>No Items Yet</h3>;
    }
    return (
        <div
            className=""
            style={{
                padding: ".5rem",
                overflow: "auto",
            }}
        >
            {items &&
                items.map((item, i) => (
                    <div
                        key={i}
                        className="rpgui-container framed rpgui-draggable"
                        style={{
                            width: "280px",
                            height: "550px",
                            marginTop: "8rem",
                            marginLeft: "3rem",
                            display: "inline-block",
                            position: "relative",
                            padding: "1rem",
                        }}
                    >
                        <Card item={item} currentUser={currentUser} />
                    </div>
                ))}
        </div>
    );
};

export default ItemCard;
