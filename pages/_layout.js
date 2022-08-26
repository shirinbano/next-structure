import { useRouter } from "next/dist/client/router";
import React, { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { Toaster } from "react-hot-toast";
import Header from "../components/Headers/Header";
import { useSelector } from "react-redux";
import Loading from "../components/Loading/Loading";

export const Layout = ({ children }) => {
  const isLogin = useSelector((state) => state.auth.isLogin);
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const [accessChecked, setAccessChecked] = useState(false)
  const router = useRouter();
  const path = router.pathname
  const isAuthScreen = path.match('auth');
  
  useEffect(() => {
    console.log(!isLogin && isAuthScreen);
    if(!isLogin && !isAuthScreen) {
      router.replace("/auth");
      setTimeout(() => {
        setAccessChecked(true)
      }, 1000);
    }  
  }, []);
  
  if (!isLogin && !accessChecked && !isAuthScreen) 
    return (
      <div className="d-flex flex-row justify-content-center mt-2">
        <Loading />
      </div>
    );
  return (
    <div>
      <Header router={router} isMobile={isMobile} />
      {React.cloneElement(children, { isMobile, router })}
      <Toaster />
    </div>
  );
};
