import React from 'react';
import '../styles/style.css';
// itemName
// image
// price
// description
// category
// gameName

const ItemCard = ({ item }) => {
    if (!ItemCard.length) {
        return <h3>No Items Yet</h3>;
    }
    return (
        <div classNameName="rpgui-content" style="width:280px; height:415px;">
            <div className="rpgui-container framed rpgui-draggable" style="left:560px">
                { }
                <h1>{item.itemName}</h1>
                <hr className="golden" />

                <div className="itemImage scimitar" style="margin-left: 25%;"></div>

                <div className="rpgui-container framed-golden-2" style="margin-top: 5px; width:100%; height:90px; left:0px; top:0px;">
                    <label>{item.description}.</label>
                </div>
                <hr className="golden" />
                <div>
                    <div className="rpgui-icon coin hovertext" style="margin-left:25px; margin-right:25px;" data-hover="1000" >
                        <label>{item.price}</label>
                    </div>

                    <div className="rpgui-icon sword hovertext" style="margin-left:25px; margin-right:25px;" data-hover="Weapon">
                        <label>{item.category}</label>

                    </div>
                    <hr className="golden-2" />
                    <div style="margin-left:25%;">
                        <p>{item.gameName}</p>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Card;