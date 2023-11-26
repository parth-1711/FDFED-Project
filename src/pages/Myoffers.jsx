
// require myoffers.css


import React from 'react';
import {product_card}from "../../constants/data.js";

const Myoffers = () => {
  return (
    <div className="container">
      <h3 style={{ fontFamily: 'Arial, sans-serif', marginTop: '2%' , marginLeft: '2%' }}>Offers</h3>
      <div className="container-item">
      {product_card.map((item) => (
        <div key={item.id} className="offer-list ">
          <img src={item.thumb} alt={item.product_name} width="10%" />
          <div className="product-text" style={{ position: 'relative', left: '5%', display: 'inline-block' }}>
            <p style={{ fontSize: '27px' }}>{item.product_name}</p>
            <hr />
            <p style={{ fontSize: '20px', fontWeight: 'bold', color: 'grey' }}>₹ {item.price}</p>
            {/* {statusMsg[item.offerStatus + 1]} */}
          </div>
        </div>
      ))}
      </div>
    </div>
  );
};

export default Myoffers;
