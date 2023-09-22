import React from 'react'

const sellForm = () => {
  return (
    <form>
        <label style="font-size: 20px">Ad title:</label>
        <input type="text" class="adtitl" id="adtitle" name="title" /><br />
        <label style="font-size: 10px; color: grey">
          Mention the name of your item with some key features
        </label>
        <p style="font-size: 20px">Description</p>
        <input
          type="text"
          class="adddesc"
          id="adddesc"
          name="description"
        /><br />
        <p style="font-size: 10px; color: grey">
          Include condition, features and reason for selling
        </p>

        <p style="font-size: 20px">How old is your item</p>
        <input type="text" class="addoldness" id="adage" name="howold" /><br />
        <p style="font-size: 10px; color: grey">Mention clearly</p>

        <p style="font-size: 20px">Set price:</p>
        <input
          type="text"
          class="addprice"
          id="addprice"
          name="setprice"
        /><br />
        <p style="font-size: 10px; color: grey">In rupees ₹</p>
        <hr />
        <p style="font-size: 30px; margin-top: 30px; font-weight: bold">
          <i class="fa fa-address-book-o"></i> Please confirm your address
        </p>
        <br />
        <p style="font-size: 20px">
          Flat, House no., Building, Company, Apartment
        </p>
        <input id="adln1" class="addflat" type="text" name="flat" />
        <p style="font-size: 10px; color: grey">Address line 1</p>
        <p style="font-size: 20px">Area, Street, Sector, Village</p>
        <input id="adln2" class="addstreet" type="text" name="street" />
        <p style="font-size: 10px; color: grey">Address line 2</p>
        <p style="font-size: 20px">Landmark</p>
        <input id="adln3" class="addlandmark" type="text" name="landmark" />
        <p style="font-size: 20px">Town/City</p>
        <input type="text" class="addcity" name="city" />
        <hr />
        <p style="font-size: 30px; font-weight: bold">
          <i class="fa fa-link"></i> Add Drive link
        </p>
        <br />
        <p style="font-size: 20px">Front View</p>
        <input id="images1" type="text" class="addlandmark" name="images1" />
        <p style="font-size: 10px; color: grey">
          Paste the Drive link of image
        </p>
        <p style="font-size: 20px">Back View</p>
        <input type="text" id="images2" class="addlandmark" name="images2" />
        <p style="font-size: 10px; color: grey">
          Paste the Drive link of image
        </p>
        <p style="font-size: 20px">Side View</p>
        <input type="text" id="images3" class="addlandmark" name="images3" />
        <p style="font-size: 10px; color: grey">
          Paste the Drive link of image
        </p>
        <hr />
        <div
          id="empty-warning"
          class="hidden"
          style="text-align: center; color: crimson"
        >
          Any field shouldn't be empty !
        </div>
        <div
          id="neg-warning"
          class="hidden"
          style="text-align: center; color: crimson"
        >
          Price shouldn't be 0 or less than 0 !
        </div>

        <div
          id="pat-warning"
          class="hidden"
          style="text-align: center; color: crimson"
        >
          title or age field shouldn't contain special characters !
        </div>

        <input
          type="submit"
          value="Submit"
          class="btn btn-outline-success"
          style="margin-left: 45%"
        />
    </form>
  )
}

export default sellForm