import React from 'react'
import Offer from '../components/Offer'
import classes from './Offer.module.css'

const Offers = () => {
  const OfferList=[
    {
      buyer:'abcef',
      amount:50,
      status:'Accecpted'
    },
    {
      buyer:'abcef',
      amount:50,
      status:'Accecpted'
    },
    {
      buyer:'abcef',
      amount:50,
      status:'Rejected'
    },
    {
      buyer:'abcef',
      amount:50,
      status:'Rejected'
    },
    {
      buyer:'abcef',
      amount:50,
      status:'Rejected'
    },
  ]
  return (
    <div>
      {OfferList.map((Ofr)=>{
        return(
          <div className={classes.ofrwpr}>
            <Offer buyer={Ofr.buyer} amount={Ofr.amount} status={Ofr.status} />
          </div>
        )
      })}
    </div>
  )
}

export default Offers