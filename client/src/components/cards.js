import React from 'react';
import '../styles/style.css';
// itemName
// image
// price
// description
// category
// gameName

const ItemCard = ({ items }) => {
    if (!ItemCard.length) {
        return <h3>No Items Yet</h3>;
    }
    return (
        <div className='rpgui-container'  >
            {items &&
                items.map((item) => (
                    <div className="rpgui-container framed rpgui-draggable"
                        style={{
                            width: '280px',
                            height: '415px',
                            marginTop: "8rem",
                            display: "inline-block",
                            position: "relative"
                        }}
                    >

                        <div
                            
                        >
                            <h1>{item.itemName}</h1>
                        </div>
                        <hr className="golden" />

                        <div src={items.image}
                            style={{
                                marginLeft: '25%',
                            }}
                        ></div>

                        <div className="rpgui-container framed-golden-2"
                            style={{
                                marginTop: '5px',
                                width: '100%',
                                height: '90px',
                                left: '0px',
                                top: '0px',
                            }}
                        >
                            <label>{item.description}.</label>
                        </div>
                        <hr className="golden" />

                        <div className="rpgui-icon coin hovertext"
                            style={{
                                marginLeft: '25px',
                                marginRight: '25px',
                                // data-hover= {item.price}, 
                            }}
                        >
                            <label>{item.price}</label>
                        </div>

                        <div className="rpgui-icon sword hovertext"
                            style={{
                                marginLeft: '25px',
                                marginRight: '25px',
                                // data-hover={item.category},
                            }}
                        >
                            <label>{item.category}</label>
                        </div>
                        <hr className="golden-2" />

                        <div className='rpgui-content h3'
                            // style={{
                            //     marginLeft: '25%',
                            // }}
                        >
                            <p>{item.gameName}</p>
                        </div>
                    </div>
                ))}
        </div>
    );
};

export default ItemCard;