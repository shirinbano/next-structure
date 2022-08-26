import React, { useState } from "react";
import { Drawer } from "../../components/drawer/drawer";

export const HomeHeader = ({ badgeCount, name, onPressMenu, onPressNotif }) => {
  const [isOpen, setisOpen] = useState(false);
  return (
    <div
      className="w-100"
      style={{
        background: 'url("/assets/icons/Header/HomeHeader.svg")',
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="d-flex flex-row justify-content-between px-2 pt-4">
        <img src="/assets/icons/Header/menu.svg" className="btn btn-white px-2 py-1 my-2 shadow-sm "  onClick={() => setisOpen(true)}/>
        
        <p className="text-primary text-center  fs-5">{name}</p>
        <img src="/assets/icons/Header/notif.svg" className="btn btn-white px-2 py-1 my-2 shadow-sm " />
      </div>
      <div className="d-flex flex-row justify-content-center">
        <img src="/assets/img/logo.png" className="w-25" />
      </div>
          <Drawer isOpen={isOpen} onClose={() => setisOpen(false)} />
    </div>
  );
};

export const EntryHeader = () => {
  return (
    <div className="d-flex flex-row justify-content-center mt-4">
      <img src="/assets/img/Auth/loginLogo.png" className=""  style={{width:200,height:200}} />
    </div>
  );
};
export const AuthHeader = () => {
  return (
    <div className="d-flex flex-row justify-content-center mt-4">
      <img src="/assets/img/Auth/loginLogo.png" style={{width:200,height:200}} />
    </div>
  );
};
