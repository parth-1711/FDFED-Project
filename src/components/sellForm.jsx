import React, { useRef } from "react";
import "./SellForm.css";

const SellForm = () => {
  const adtitleRef = useRef();
  const descRef = useRef();
  const ageRef = useRef();
  const priceRef = useRef();
  const addln1Ref = useRef();
  const addln2Ref = useRef();
  const addln3Ref = useRef();
  const cityref = useRef();
  const img1ref = useRef();
  const img2ref = useRef();
  const img3ref = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
    const title = adtitleRef.current.value;
    const desc = descRef.current.value;
    const age=ageRef.current.value;
    const price=priceRef.current.value;
    const addln1=addln1Ref.current.value;
    const addln2=addln2Ref.current.value;
    const addln3=addln3Ref.current.value;
    const city=cityref.current.value;
    const img1=img1ref.current.value;
    const img2=img2ref.current.value;
    const img3=img3ref.current.value;
    const address=[addln1,addln2,addln3,city];
    const img=[img1,img2,img3];
    const product={
      title,
      desc,
      age,
      price,
      address,
      img
    }
    console.log(product);
  };

  return (
    <div className="containform">
      <p>Please fill in the details</p>
      <hr />
      <form onSubmit={submitHandler}>
        <p>Ad title:</p>
        <input type="text" ref={adtitleRef} className="adtitl" name="title" />
        <br />


        <p>Mention the name of your item with some key features</p>

        <p>Description</p>
        <textarea ref={descRef} className="adddesc" name="description" />
        <br />
        <p>Include condition, features and reason for selling</p>


        <p>How old is your item</p>
        <input type="text" ref={ageRef} className="addoldness" name="howold" />
        <br />
        <p>Mention clearly</p>

        <p>Set price:</p>
        <input
          type="text"
          ref={priceRef}
          className="addprice"
          name="setprice"
        />
        <br />
        <p>In rupees ₹</p>
        <hr />
        <p>
          <i className="fa fa-address-book-o"></i> Please confirm your address
        </p>
        <br />
        <p>Flat, House no., Building, Company, Apartment</p>
        <input className="addflat" ref={addln1Ref} type="text" name="flat" />
        <p>Address line 1</p>
        <p>Area, Street, Sector, Village</p>
        <input
          className="addstreet"
          ref={addln2Ref}
          type="text"
          name="street"
        />
        <p>Address line 2</p>
        <p>Landmark</p>
        <input
          className="addlandmark"
          ref={addln3Ref}
          type="text"
          name="landmark"
        />
        <p>Town/City</p>
        <input type="text" ref={cityref} className="addcity" name="city" />
        <hr />
        <p>
          <i className="fa fa-link"></i> Add Drive link
        </p>
        <br />
        <p>Front View</p>
        <input
          type="text"
          ref={img1ref}
          className="addlandmark"
          name="images1"
        />
        <p>Paste the Drive link of image</p>
        <p>Back View</p>
        <input
          type="text"
          ref={img2ref}
          className="addlandmark"
          name="images2"
        />
        <p>Paste the Drive link of image</p>
        <p>Side View</p>
        <input
          type="text"
          ref={img3ref}
          className="addlandmark"
          name="images3"
        />
        <p>Paste the Drive link of image</p>
        <hr />
        <div
          // id="empty-warning"
          className="hidden"
          // style="text-align: center; color: crimson"
        >
          Any field shouldn't be empty !
        </div>
        <div
          // id="neg-warning"
          className="hidden"
          // style="text-align: center; color: crimson"
        >
          Price shouldn't be 0 or less than 0 !
        </div>

        <div
          // id="pat-warning"
          className="hidden"
          // style="text-align: center; color: crimson"
        >
          title or age field shouldn't contain special characters !
        </div>

        <input
          type="submit"
          value="Submit"
          className="btn btn-outline-success"
          // style="margin-left: 45%"
        />
      </form>
    </div>
  );
};

export default SellForm;
