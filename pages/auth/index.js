import { useRouter } from "next/dist/client/router";
import React from "react";
import { EntryHeader } from "../../components/Headers/CustomHeader";

const entry = ({isMobile}) => {
  const router = useRouter();
  
  return (
    <div className="container-fluid wrapper px-0 mx-0 justify-content-center  ">
      <div
        className={`d-flex flex-column justify-content-between col-12 col-md-8 col-lg-6  bg-white rounded-3
      ${isMobile ? "vh-100" : "vh-50 shadow rounded-5"}
          `}
      >
        <EntryHeader />
        <div className="d-flex flex-row-reverse justify-content-around w-100 my-5 py-5">
          <button className="btn btn-primary col-4" onClick={() => router.push("/auth/login")}>
            ورود
          </button>
          <button className="btn btn-success text-white col-4" onClick={() => router.push("/auth/register")}>
            ثبت نام
          </button>
        </div>
        <div className="h-25 d-md-none" />
      </div>
    </div>
  );
};

export default entry;
