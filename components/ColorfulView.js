function ColorfulView({ title, backgroundClass, titleStyle, marginBottom }) {
  return (
    <div className="col-12">
      <div
        className={`
         d-flex justify-content-center align-items-center py-2 px-2 rounded-2 mt-2
        ${backgroundClass || "bg-primary"} 
        ${marginBottom || "mb-1"}`}
      >
        <span className="text-white align-middle fs-6">{title}</span>
      </div>
    </div>
  );
}

export default ColorfulView;
