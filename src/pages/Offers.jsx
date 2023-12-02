import React, { useEffect, useState } from 'react'
import Offer from '../components/Offer'
import classes from './Offer.module.css'
import { useSelector } from 'react-redux';

const Offers = () => {
  const [offers,setOffers]=useState([]);
  const authSlice=useSelector((state)=>state.auth)
  useEffect(()=>{
    const fetchOffers=async()=>{
      let response=await fetch('http://localhost:8000/getAllOffers'); 
      let data=await response.json();
      console.log(data);
      setOffers(data.Offers.filter((offer)=>offer.owner===authSlice.user.uname));
      
    }
    fetchOffers();
  },[])
  

  return (
    <div>
      {offers.map((Ofr)=>{
        return(
          <div className={classes.ofrwpr} key={Ofr._id}>
            <Offer productName={Ofr.productName} productId={Ofr.productid} offerId={Ofr._id} buyer={Ofr.offerer} amount={Ofr.amount} status={Ofr.offerStatus} />
          </div>
        )
      })}
    </div>
  )
}

export default Offers