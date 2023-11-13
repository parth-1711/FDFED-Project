import React from "react";
import classes from "./UploadedProducts.module.css";

const OfferList = [
  {
    productName: "abcef",
    amount: 50,
    status: "Accecpted",
  },
  {
    productName: "abcef",
    amount: 50,
    status: "Accecpted",
  },
  {
    productName: "abcef",
    amount: 50,
    status: "Rejected",
  },
  {
    productName: "abcef",
    amount: 50,
    status: "Rejected",
  },
  {
    productName: "abcef",
    amount: 50,
    status: "Rejected",
  },
];

const UploadedProducts = () => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.product_list}>
        <ul>
          {OfferList.map((offer) => {
            return (
              <li className={classes.list}>
                <span>
                  <img
                    src="pimg.png"
                    className="w-1/12 inline-block"
                    alt="product"
                  />
                </span>
                <div className="inline-block w-16 text-center">
                  {offer.productName}
                </div>
              </li>
            );
          })}
        </ul>
        <div className="flex justify-center">
          <div className={classes.offerbtn}>
            <button type="button">View More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UploadedProducts;
