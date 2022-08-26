import React, { useEffect, useState } from "react";
import ErrorPage from "next/error";
import {AuthHeader} from "../../components/Headers/CustomHeader";
import toast from "react-hot-toast";
import { ApiCall } from "../../helpers/ApiCall";
import { apiRoutes } from "../../utils/apiRoutes";
import { useDispatch } from "react-redux";
import Button from "../../components/Button";

const Login = ({ isMobile, router }) => {
  const dispatch = useDispatch();
  const [nationalCode, setNationalCode] = useState(null);
  const [password, setPassword] = useState(null);
  const [disable, setDisable] = useState(false);
  useEffect(() => {
     document.addEventListener('keydown', _onKeyDown);
    return ()=>{
      document.removeEventListener('keydown', _onKeyDown);
    } 
  }, [onSubmit])

  function _onKeyDown(e) {
    if(e.code == 'Enter') onSubmit()
  }
  function onSubmit() {
    if (nationalCode?.length < 10) return toast.error("لطفا کد ملی وارد شده را بررسی نمایید");

    setDisable(true);
    const body = {
      code_meli: nationalCode,
      password: password,
    };
    console.log(':::',body);
    ApiCall(
      "post",
      apiRoutes.AUTH1,
      body,
      "login",
      null,
      (res) => {
        dispatch({ type: "LOGIN", isLogin: true, token: res.data.api_token });
        dispatch({ type: "INIT", userInfo: res.data });
        router.push("/home");
        setDisable(false);
      },
      (err) => setDisable(false)
    );
  }

  return (
    <div className="container-fluid wrapper px-0 mx-0 justify-content-center ">
      <div
        className={`d-flex flex-column justify-content-between col-12 col-md-8 col-lg-6  bg-white rounded-3
      ${isMobile ? "vh-100" : "vh-50 shadow rounded-5"}`}
      >
        <AuthHeader />
        <div className="row justify-content-center p-3 my-1">
          <div className="mb-4 col-8">
            <input
              type="number"
              inputmode="numeric"
              className="form-control text-center "
              id="code_melli"
              maxLength={10}
              placeholder="کد ملی خود را وارد نمایید"
              required
              onChange={(e) => setNationalCode(e.target.value)}
            />
          </div>
          <div className="mb-3 col-8 ">
            <input
              type="number"
              inputmode="numeric"
              className="form-control text-center"
              id="pass"
              placeholder="کلمه عبور خود را وارد نمایید"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <Button 
            title='ورود'
            disabled={disable}
            loading={disable}
            onPress={onSubmit}
          />
        </div>
        
        <div className="h-25 d-md-none" />
      </div>
    </div>
  );
};

export default Login;
