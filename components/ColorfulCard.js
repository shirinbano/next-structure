
const ColorfulCard = ({
  index = 0,
  list,
  onPress,
  secondTextStyle,
  condition
}) => {
  return (
    <div className=" col-12 col-md-6 col-lg-4">
    <div className="bg-primary rounded-card shadow-lg  py-3 my-2 px-3"
        onClick={onPress}
    >
        <div
          className= 'd-flex align-items-center justify-content-center  rounded-circle colorful-card-index'
          >
          <span className="text-white">
            {index + 1 < 10 ? `0${index + 1}` : index + 1}
          </span>
        </div>
        <hr className="bg-secondary"/>
        {list.map((e,i) => (
        <div key={`${i}`} className="row justify-content-between">
            <p className="text-white text-end col-6">{Object.keys(e)[0]}</p>
            <p className="text-white text-start col-6 text-truncate">{Object.values(e)[0]}</p>
        </div>
        ))}
      </div>
    </div>
  );
};

export default ColorfulCard;
