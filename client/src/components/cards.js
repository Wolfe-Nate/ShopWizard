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
              height: "450px",
              marginTop: "8rem",
              marginLeft: "3rem",
              display: "inline-block",
              position: "relative",
              padding: "1rem",
            }}
<<<<<<< HEAD
          >
            <Card item={item} currentUser={currentUser} />
          </div>
        ))}
    </div>
  );
=======
        >
            {items &&
                items.map((item) => (
                    <div className="rpgui-container framed rpgui-draggable"
                        style={{
                            width: '280px',
                            height: '520px',
                            marginTop: "8rem",
                            marginLeft: "3rem",
                            display: "inline-block",
                            position: "relative",
                            padding: "1rem",

                        }}
                    >

                        <div
                            style={{
                                padding: ".2rem"
                            }}
                        >
                            <h1>{item.itemName}</h1>
                        </div>
                        <hr className="golden" />

                        <div>
                            <img src={item.image} alt={item.itemName} style={{ marginLeft: '25%', width: '120px', height: '120px', }}
                            ></img>
                        </div>

                        <div className="rpgui-container framed-golden-2"
                            style={{
                                // marginTop: '5px',
                                width: '100%',
                                height: '90px',
                                // left: '0px',
                                // top: '0px',

                            }}
                        >

                            <label>{item.description}.</label>
                        </div>
                        <hr className="golden" />

                        <div className="rpgui-icon coin hovertext"
                            style={{
                                marginLeft: '25px',
                                // marginRight: '25px',
                                // data-hover= {item.price}, 
                            }}
                        >
                            <label>{item.price}</label>
                        </div>

                        <div className="rpgui-icon sword hovertext"
                            style={{
                                marginLeft: '25px',
                                // marginRight: '25px',
                                // data-hover={item.category},
                            }}
                        >
                            <label>{item.category}</label>
                        </div>
                        <hr className="golden-2" />

                        <div className=''
                        // style={{
                        //     marginLeft: '25%',
                        // }}
                        >
                            <p
                            style={{
                            fontSize: ".6rem",
                            maxHeight: "5rem"
                            }}
                            >{item.gameName}</p>
                        </div>
                        <div>
                            <button className="rpgui-button golden" type="button"
                                style={{
                                    marginLeft: "4%"
                                }}>
                                <p style={{
                                    marginTop: "13px"
                                }}>Purchase Item</p>

                            </button>
                        </div>
                    </div>
                ))}
        </div>
    );
>>>>>>> main
};

export default ItemCard;
