import React from 'react'
import classes from './UserImage.module.css'

const UserImage = () => {
  return (
    <div className={classes.imgdiv}>
        <img src="userLogo.png" alt="user" className='rounded-s-full rounded-e-full'/>
        <p>User</p>
    </div>
  )
}

export default UserImage