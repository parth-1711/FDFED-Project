import React from "react";
import classes from "./ProductDetails.module.css";
import ProductImageCarousel from "../components/ProductImageCarousel";
import { purple } from "@mui/material/colors";

const ProductDetails = () => {
  const product = {
    title: "Product 1",
    description: "This is test product",
    usageDuration: "5 years",
    price: 5000,
    address: "wsfdxgfchgvjhbjnkjuyfjgc",
    owner: "Parth",
    images: [
      "https://www.trustedreviews.com/wp-content/uploads/sites/54/2022/11/PS5-Review-8-scaled.jpg",
      "https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blt054c12973dc65d3e/60db71928491e60f790b1b87/f61138da5e0a3af7c7c83b6166f1cb03dbfee30f.jpg",
      "https://media.cnn.com/api/v1/images/stellar/prod/spider-man-2-ps5-hands-on-lead-cnnu.jpg?c=16x9&q=h_720,w_1280,c_fill",
    ],
  };
  return (
    <div className="grid grid-cols-2 gap-4">
      <div className="flex-wrap justify-center p-6">
        <div className={classes.centerer}>
          <div className={classes.carousel}>
            <ProductImageCarousel images={product.images} />
          </div>
        </div>

        <div className={classes.offerForm}>
          <br />

          <p><span className={classes.textgradient}>Expected Price:-</span></p>
          <h3> ₹ {product.price}</h3>
          <br />
          <hr />
          <br />
          <form>
            <label><span className={classes.textgradient}>Entered Price to Offer : -</span><br /></label>

            {/* <div className="input-group mb-3" style={{ width: "15rem" }}>
              
              <span className="input-group-text">₹</span>
              <input type="text" className="form-control" />
            </div> */}
            <div className={classes.input_controls}>
              <span>₹</span>
              <input type="text" />
            </div>
            {/* <button type="button" className="btn btn-outline-primary">
              Offer
            </button> */}
            <div className={classes.offerbtn}>
              <button type="button">Add Expense</button>
            </div>
          </form>
        </div>
      </div>
      <div className="">
        <div className={classes.title}>
          <h3 className={classes.textgradient}>{product.title}</h3>
        </div>
        <div className={classes.description}>
          <p> <span className={classes.textgradient}>Owner :- </span> {product.owner}</p>
          <br />
          <hr />
          <br />
          <p><span className={classes.textgradient}>Duration of Usage :- </span> {product.usageDuration}</p>
          <br />
          <hr />
          <br />
          <p className={classes.textgradient}>Description:-</p>
          <br />
          {product.description}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
