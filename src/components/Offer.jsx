import React from "react";
import classes from "./Offer.module.css";

const Offer = (props) => {
  return (
    <div>
      <p>Name of the buyer:- {props.buyer}</p>
      <div style={{display: 'flex', justifyContent: 'space-between'}}>
        <div>
      <div className={classes.amount}>Amount:- {props.amount}</div>
      <div className={classes.status}>Status:- {props.status}</div>
      </div>
      {props.status == "Accecpted" && (
        <div className={classes.ofrbtn}>
          <button type="button" className="btn btn-outline-success">
            Offer
          </button>
        </div>
      )}</div>
    </div>
  );
};

export default Offer;
