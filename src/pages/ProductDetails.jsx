import React from "react";
import classes from "./ProductDetails.module.css";
import ProductImageCarousel from "../components/ProductImageCarousel";

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
    <div className="row">
      <div className="col col-mid-auto">
        <div className={classes.carousel}>
          <ProductImageCarousel images={product.images} />
        </div>

        <div className={classes.offerForm}>
          <p>Expected Price:-</p>
          <h3> ₹ {product.price}</h3>

          <form>
            <label>Entered Price to Offer:-</label>
            <div className="input-group mb-3" style={{width:'15rem'}}>
              <span className="input-group-text">₹</span>
              <input type="text" className="form-control" />
            </div>
            <button type="button" className="btn btn-outline-primary">Offer</button>
          </form>
        </div>
      </div>
      <div className="col col-mid-1">
        <div className={classes.title}>
          <h3>{product.title}</h3>
        </div>
        <div className={classes.description}>
          <p>Owner:- {product.owner}</p>
          <br />
          <p>Duration of Usage:- {product.usageDuration}</p>
          <br />
          <p>Description:-</p>
          {product.description}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
