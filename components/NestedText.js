function NestedText({ firstText,secondText, backgroundColor, titleStyle, marginBottom }) {
    return (
      <div className="col-12">
        <div
          className={`
           d-flex justify-content-between align-items-center py-2 px-3 rounded-2 mt-2
          ${marginBottom || "mb-1"}`}
          style={{
              backgroundColor:backgroundColor ||"#F2F6FF" 
          }}
        >
          <span className="align-middle">{firstText}</span>
          <span className="align-middle">{secondText}</span>
        </div>
      </div>
    );
  }
  
  export default NestedText;
  