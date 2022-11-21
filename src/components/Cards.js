import React from 'react';
import './style/cards.css'

const Cards = ({item, handleClick}) => {
    const {id, name, price, image} = item;
  return (
    <div className="cards">
        <div className="image_box">
            <img src={image} alt="Image" /> 
        </div>
        <div className="details">
            <p>{id}ml</p>
            <p>{name}</p>
            <p>Price -${price}</p>
            <button onClick={()=>handleClick(item)} >Add to Cart</button>
        </div>
    </div>
  )
}

export default Cards
