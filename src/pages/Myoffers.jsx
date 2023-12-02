// require myoffers.css

import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "./myoffers.css";
import { Link } from "react-router-dom";
// import {product_card}from "../../constants/data.js";

const Myoffers = () => {
  const [offers, setOffers] = useState([]);
  const authSlice = useSelector((state) => state.auth);
  let uname = authSlice.user.uname;
  useEffect(() => {
    const fetchOffers = async () => {
      let response = await fetch("http://localhost:8000/getAllOffers");
      let data = await response.json();
      console.log(data);

      setOffers(data.Offers.filter((offer) => offer.offerer === uname));
    };
    fetchOffers();
  }, []);
  console.log(offers);
  return (
    <div className="container">
      <h3
        style={{
          fontFamily: "Arial, sans-serif",
          marginTop: "2%",
          marginLeft: "2%",
        }}
      >
        Offers
      </h3>
      <div className="container-item">
        {offers.map((item) => (
          <Link key={item._id} to={`/productDetails?param=${item.productid}`}>
            <div className="offer-list ">
              <img src={item.thumb} alt={item.productName} width="10%" />
              <div
                className="product-text"
                style={{
                  position: "relative",
                  left: "5%",
                  display: "inline-block",
                }}
              >
                <p style={{ fontSize: "27px" }}>{item.productName}</p>
                <hr />
                <p
                  style={{
                    fontSize: "20px",
                    fontWeight: "bold",
                    color: "grey",
                  }}
                >
                  ₹ {item.amount}
                </p>
                {item.offerStatus==-1?'Rejected':item.offerStatus==0?'Pending':'Accepted'}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );  
};

export default Myoffers;
