import Loading from "./Loading/Loading";

const Button = ({ className, title, background,width, disabled, loading, onPress }) => {
  let buttonClass = `btn ${
    disabled ? "btn-secondary" : background || "btn-primary"
  } ${width || "w-50"} mt-4 align-self-center d-flex flex-row justify-content-center position-relative`;

  return (
    <button className={className || buttonClass} onClick={!disabled ? onPress : ()=>''}>
      {title}
      {loading && (
        <div className="position-absolute start-3">
          <Loading 
            type='button'
          />
        </div>
      )}
    </button>
  );
};

export default Button;
