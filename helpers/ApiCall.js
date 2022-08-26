import axios from "axios";
import { baseUrl } from "../utils/apiRoutes";

// import {errorHandling} from './errorHandling';
import { toast } from "react-hot-toast";

const headerItems = (token) => {
  if (token)
    return {
      Accept: "application/json",
      "Content-Type": "application/json",
      "x-api-key": `${token}`,
    };
  else
    return {
      Accept: "application/json",
      "Content-Type": "application/json",
    };
};
const config = (method, url, data, token) => {
  if (method == "get")
    return {
      method: method,
      headers: headerItems(token),
      url: baseUrl,
    };
  else
    return {
      method: method,
      headers: headerItems(token),
      url: baseUrl,
      data: { ...data, method: url },
    };
};

export const ApiCall = async (method, url, data, name = "response ->", token, callback, onError) => {
  try {
    const response = await axios(config(method, url, data, token));
    if (response.status == 200) {
      const res = response.data;

      console.log(name, res);
      if (res.result == 1) {
        if (typeof callback == "function") callback(res);
      } else {
        //Failed
        if (typeof onError == "function") onError(response);
        if (res.data?.message && res.result != 2) toast.error(res.data?.message?.replace(/<br>/g, "\n"));
      }
    } else {
      // Status != 200
      if (typeof onError == "function") onError(response);
    }
  } catch (error) {
    if (typeof onError == "function") onError(error);
    console.log("Error", error.response?.data || error);
    if (error && error.message == "Network Error") toast.error("لطفا اتصال اینترنت خود را بررسی نمایید");
    else toast.error(error ? error.message : "متاسفانه خطایی رخ داده است!");
  }
};
