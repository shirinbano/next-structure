import { useState } from "react"

function FormRadio({item,onSelect}) {
  const [selected, setSelected] = useState({})  
  
  const onCheck = (item)=>{
    setSelected(item)
    onSelect(item)
  }  
  return (
    <div className="">
     <p  className="form-label">
        {item.title}
      </p>
      {item.data?.map((el,i)=>
      <div className="form-check form-check-inline col-6 col-md-12">
        <label className="form-check-label text-start align-middle me-4 mt-1 text-truncate" htmlFor={`radio-${i}`}>
          {el.title}
        </label>
        <input className="form-check-input float-end" type="radio" value="" id={`checkbox-${i}`} 
            checked={selected.id == el.id}
            onChange={(v)=>onCheck(el)}
        />
      </div>
      )}  
     
      
    </div>
  );
}

export default FormRadio;
