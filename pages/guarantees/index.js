import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ColorfulCard from "../../components/ColorfulCard";
import ColorfulView from "../../components/ColorfulView";
import Header from "../../components/Headers/Header";
import Loading from "../../components/Loading/Loading";
import NestedText from "../../components/NestedText";
import { numberWithCommas } from "../../helpers/numberWithCommas";
import { ApiCall } from "../../helpers/ApiCall";
import { apiRoutes } from "../../utils/apiRoutes";

function GuaranteeList({router}) {
  //لیست ضمانت ها
  const token = useSelector((state) => state.auth.token);
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const [total, setTotal] = useState([]);
  useEffect(() => {
    getData();
  }, []);
  function getData() {
    ApiCall("post", apiRoutes.GU1, null, "get zemanat list", token, (res) => {
      setData(res.data.list || []);
      setTotal(res.total || []);
      setIsLoading(false);
    });
  }
  if (isLoading) return <Loading />;
  return (
    <div className="container">
      
        {/* LIST */}
      <div className="row">
        {data.map((e, i) => (
          <ColorfulCard
            key={i}
            index={i}
            list={e}
            onPress={() => router.push(`/guarantees/${Object.values(e[0])[0]}`)}
          />
        ))}
      </div>
      <ColorfulView title="مجموع" backgroundClass="bg-success" />
      {/* TOTAL */}
      <div className="row row-cols-md-2 row-cols-lg-3">
        {total.map((e, i) => (
          <NestedText
            key={i}
            firstText={Object.keys(e)[0]}
            secondText={numberWithCommas(Object.values(e)[0])}
            backgroundColor={'rgba(1,153,52,0.2)'}
          />
        ))}
      </div>
    </div>
  );
}

export default GuaranteeList;
