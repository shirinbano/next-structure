import React from "react";

const withoutHeader = ["","home","auth",'auth/login','auth/register'];

function Header({ router }) {
  let { pathname } = router;
  const absolutePath = pathname.substring(1);
  const findTitle = () => {
    console.log(absolutePath);
    switch (absolutePath) {
      case "guarantees":
        return "لیست ضمانت ها";
      case "guarantees/[id]":
        return "جزییات ضمانت";

      default:
        return "";
    }
  };

  const _renderHeader = () => {
    switch (absolutePath) {
      case "custom":
        break;

      default:
        return (
          <div className="w-100 d-flex flex-row justify-content-between align-items-center px-2">
            <span className="w-30 text-truncate text-end" 
            onClick={()=>router.back()}
            >
                <img src='/assets/img/Header/back@3x.png' width='40' height='40' />
            </span>
            <span className="w-30 text-truncate text-center">{findTitle()}</span>
            <span className="w-30 text-truncate text-start"></span>
          </div>
        );
    }
  };

  return withoutHeader.includes(absolutePath) ? (
    <div className="py-0" />
  ) : (
    <div
      className="d-flex flex-row justify-content-center align-items-center position-sticky top-0  align-self-center w-100 bg-white shadow-sm "
      style={{ height: 60 }}
    >
      {_renderHeader()}
    </div>
  );
}

export default Header;
