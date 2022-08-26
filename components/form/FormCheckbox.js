import { useState } from "react"

function FormCheckbox({item,onSelect}) {
  const [selected, setSelected] = useState([])  
  
  const onCheck = (item)=>{
    const {id} = item  
    const index = selected.findIndex(e=>e.id == id)
    let newArr 
    if(index > -1) newArr = selected.filter(e=>e.id!=id)
    else newArr = selected.concat(item)
    setSelected(newArr)
    onSelect(newArr)
  }  
  return (
    <div className="">
     <p  className="form-label">
        {item.title}
      </p>
      {item.data?.map((el,i)=>
      <div className="form-check form-check-inline col-6 col-md-12">
        <label className="form-check-label text-start align-middle me-4 mt-1 text-truncate" htmlFor={`checkbox-${i}`}>
          {el.title}
        </label>
        <input className="form-check-input float-end" type="checkbox" value="" id={`checkbox-${i}`} 
            checked={selected.findIndex(e=>e.id == el.id) > -1}
            onChange={(v)=>onCheck(el)}
        />
      </div>
      )}  
     
      
    </div>
  );
}

export default FormCheckbox;
