import React from "react";
import ProfileMenu from "../components/ProfileMenu";
import classes from "./UserProfile.module.css";
import UserImage from "../components/UserImage";
import UploadedProducts from "../components/UploadedProducts";

const UserProfile = () => {
  return (
    <div className="grid grid-cols-3 gap-4">
      <div className={classes.usermenu}>
        <div className="rounded-2xl shadow-2xl p-4 text-center">
          <UserImage />

          <div className="my-4">
            <ProfileMenu />
          </div>
        </div>
      </div>
      <div className="col-span-2">
        <div className={classes.secondaryBlock}>
          <div>
            <div className={classes.title}>
              <p>Hi, Welcome back parth</p>
              Your Advertisements
              </div>
            <UploadedProducts />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
