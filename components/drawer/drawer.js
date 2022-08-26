import { useRouter } from "next/dist/client/router";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
const drawerMenu = [
  {
    id: 0,
    name: "صفحه اصلی",
    icon: "/assets/img/drawer/Home@3x.png",
    route: "Home",
  },
  {
    id: 1,
    name: "ارسال پیام",
    icon: "/assets/img/drawer/sendMessage@3x.png",
    route: "SendMessage",
  },

  {
    id: 3,
    name: "درباره صندوق",
    icon: "/assets/img/drawer/aboutus@3x.png",
    route: "AboutUs",
  },
  {
    id: 22,
    name: "شرایط ضمانت",
    icon: "/assets/img/drawer/condition@3x.png",
    route: "Condition",
  },
  {
    id: 2,
    name: "تماس با ما",
    icon: "/assets/img/drawer/contactus@3x.png",
    route: "ContactUs",
  },
  {
    id: 4,
    name: "تغییر کلمه عبور",
    icon: "/assets/img/drawer/password@3x.png",
    route: "ChangePassword",
  },

  {
    id: 8,
    name: "خروج",
    icon: "/assets/img/drawer/logout@3x.png",
    route: "logOut",
  },
];
export const Drawer = ({ isOpen, onClose }) => {
  const router = useRouter()
  const dispatch = useDispatch();
  const userInfo = useSelector((state) => state.init.userInfo);
  
  function _onPress(routeName) {
    // navigation.closeDrawer();
    switch (routeName) {
      case "logOut":
        dispatch({
          type: "LOGIN",
          isLogin: false,
          token: null,
        });
        router.push('/auth')
        break;
      case "ContactUs":
        // Linking.openURL("https://www.56879500.ir/index.php?mod=contact&route=contact");

        break;

      default:
        router.push(routeName)
        break;
    }
  }
  return (
    <div
      id="mySidenav"
      className="sidenav"
      style={{
        marginRight: isOpen ? 0 : -250,
      }}
    >
        <span className='d-flex flex-row justify-content-end ps-2 pt-3'>
        <button className="btn btn-white fs-5" onClick={onClose}>
          X
        </button>

        </span>
      <div className="d-flex justify-content-start align-items-center pe-2 py-2 mt-1">

        <span>
          <img src={"/assets/img/drawer/user@3x.png"} style={{ width: 45, height: 45 }} />
        </span>

        <span className="me-2">{userInfo.info || ""}</span>
      </div>
      <hr className="bg-gray" />
      {drawerMenu.map((el) => (
        <div key={`${el.id}`}
        onClick={()=>_onPress(el.route)}
        >
          <div className="d-flex justify-content-start pe-3 mt-3">
            <span>
              <img src={el.icon} style={{ width: 14, height: 14 }} className="ms-2" />
            </span>
            <span className="text-black">{el.name}</span>
          </div>
          <hr className="bg-gray" />
        </div>
      ))}
    </div>
  );
};
