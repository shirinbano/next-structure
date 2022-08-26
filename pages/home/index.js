import React, { useEffect, useState } from "react";
import { homeItems, homeItemsTemp } from "../../utils/home_items";
import { HomeHeader } from "../../components/Headers/CustomHeader";

import { Swiper, SwiperSlide } from "swiper/react";
import { useSelector } from "react-redux";
import { chunk } from "lodash";
import { ApiCall } from "../../helpers/ApiCall";
import { apiRoutes } from "../../utils/apiRoutes";

const Home = ({ router, isMobile }) => {
  const token = useSelector((state) => state.auth.token);
  const userInfo = useSelector((state) => state.init.userInfo);
  const [index, setIndex] = useState(0);
  const [badgeList, setBadgeList] = useState({});
  const [salavatVisibility, setSalavatVisibility] = useState(false);
  const [appVersion, setAppVersion] = useState('')
  
  useEffect(() => {
    // getVersion();
    // getSalavatVisibility();
    // getBadges()
  }, []);

  function getSalavatVisibility() {
    ApiCall(
      'post',
      urls.SALAVAT_VISIBILITY,
      null,
      'get salavat',
      token,
      (res) => {
        if (res?.result == '1') setSalavatVisibility(true);
      },
    );
  }
  function getBadge() {
    ApiCall('post', apiRoutes.BADGE, null, 'get badge', token, (res) => {
      setBadgeList(res.data);
    });
  }
  function getVersion() {
    ApiCall('post', urls.VERSION, null, 'get version', token, (res) => {
      setAppVersion(res.data);
    });
  }
  const goToItem = (path) => {
    router.push(path || "home");
  };

  const _renderPaginate = () => {
    return (
      <div className="d-flex flex-row justify-content-center   mx-auto  ">
        {[1, 2, 3].map((e, i) => (
          <div
            key={i}
            className={i == index ? "bg-primary" : "bg-secondary"}
            style={{
              width: 8,
              height: 8,
              borderRadius: 4,
              margin: 2,
              backgroundColor: i == index ? "" : "#fff000",
            }}
          ></div>
        ))}
      </div>
    );
  };

  return (
    <div className="container-md p-0">
      <HomeHeader 
        // onPressMenu={() => navigation.openDrawer()}
        // onPressNotif={() => navigation.navigate('Messages')}
        badgeCount={badgeList.unread_sms_cnt}
        name={userInfo.info || ''}
      />
     
      {!isMobile ? (
        <div className="row align-items-center">
          {homeItems.map((el) => (
            <div key={el.id} className="d-flex justify-content-center col-4 col-md-3 col-lg-2 my-2 px-2" onClick={() => goToItem(el.route)}>
              <div className="w-100 py-3 position-relative" style={{ borderRadius: "10%", backgroundColor: "#D6E4FF" }}>
                <span className="position-absolute bottom-0 start-95 translate-middle-x badge rounded-pill bg-success fs-8 ">99</span>
                <div className="text-center">
                  <img src={el.icon} width={50} height={50} />
                  <p className="text-center mt-2 fs-6">{el.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="position-relative pt-2">
          {_renderPaginate()}
          <Swiper spaceBetween={50} slidesPerView={1} onSlideChange={(e) => setIndex(e.activeIndex)}>
            {chunk(homeItems, 9).map((item,index) => (
              <SwiperSlide key={`${index}`}>
                <div style={{ display: "flex", flexDirection: "row", justifyContent: "flex-start", flexWrap: "wrap" }}>
                  {item.map((el) => (
                    <div key={`${el.id}`} className="d-flex justify-content-center col-4  my-2 px-1 " 
                    onClick={() => goToItem(el.route)}>
                      <div className="w-100 pt-2">
                        <div className="d-flex flex-column align-items-centertext-center">
                          <div
                            className="rounded-circle justify-content-center d-flex flex-row align-items-center align-self-center position-relative"
                            style={{ width: 100, height: 100, alignSelf: "center", backgroundColor: "#D6E4FF" }}
                          >
                            <span className="position-absolute bottom-5 end-5  badge  bg-success fs-8">99</span>
                            <img src={el.icon} width={50} height={50} />
                          </div>
                          <p className="text-center mt-2 fs-7">{el.title}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}
    </div>
  );
};

export default Home;

//"PCj7JkwbBoDLlShzBHfoRuENzxUIP627mumDy3bxFQwb4YhIdFsXnigVGpja"
