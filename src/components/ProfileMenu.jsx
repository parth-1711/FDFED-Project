import React from 'react'
import classes from './ProfileMenu.module.css'

const ProfileMenu = () => {
  return (
    <div className={classes.wrapper}>
      <div className='border-radius:0.25rem'>
        <ul>
            <li>My Orders</li>
            <hr />
            <li>My Offers</li>
            <hr />
            <li>Saved Address</li>
            <hr />
            <li>Help Center</li>
        </ul>
    </div>
    </div>
    
  )
}

export default ProfileMenu