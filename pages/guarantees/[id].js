import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import {ApiCall} from '../../helpers/ApiCall';
import {apiRoutes} from '../../utils/apiRoutes';
import Loading from '../../components/Loading/Loading';
import NestedText from '../../components/NestedText';
import { numberWithCommas } from '../../helpers/numberWithCommas';


const GuaranteeSingle = ({router}) => {
  const {id} = router.query;
  const token = useSelector((state) => state.auth.token);
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);
  useEffect(() => {
    getData();
  }, []);
  function getData() {
    const body = {id: id};
    ApiCall('post', apiRoutes.GU2, body, 'get zemanat single', token, (res) => {
      const list = res.data?.list || [];
      
      setData(list);
      setIsLoading(false);
    });
  }
  if (isLoading) return <Loading />;
  return (
    <div className="container">
        <div className="row row-cols-md-2 row-cols-lg-3 mt-3">
        {data.map((e, i) => (
          <NestedText
            key={i}
            firstText={Object.keys(e)[0]}
            secondText={numberWithCommas(Object.values(e)[0])}
            // backgroundColor={'rgba(1,153,52,0.2)'}
          />
        ))}
        </div>
    </div>
  );
};

export default GuaranteeSingle;
