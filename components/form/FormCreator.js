import React from "react";
import FormCheckbox from "./FormCheckbox";
import FormDatepicker from "./FormDatepicker";
import FormInput from "./FormInput";
import FormRadio from "./FormRadio";
import FormSelect from "./FormSelect";

const FormCreator = ({ data, state, setState }) => {
  function onChange(key, value) {
      setState({ ...state, [key]: value });
  }

  return (
    <div className="row justify-content-center px-3 my-1">
      <div className="row">
        {data.map((item, i) => 
          <div key={`${item.id}`} className={item.containerClass || "col-12 col-md-6 col-lg-4"}>
          {item.type == 'Break' ?
            <br />
          :item.type == 'Divider' ?
            <hr className={item.class}/>
            :item.type == 'Title' ?
            <p className={item.class || 'text-end '}>{item.title}</p>
            :item.type == 'Input' ?
          <FormInput
            item={item}
            onChangeText={v=>onChange(item.key,v)}
            value={state[item.key]}
           />
          :item.type == 'Select' ?
          <FormSelect 
            item={item}
            onSelect={obj=>onChange(item.key,obj)}
            value={state[item.key]}
          />
          :item.type == 'Date' ?
            <FormDatepicker 
              item={item}
              onSelect={date=>onChange(item.key,date)}
              value={state[item.key]}
            />

            :item.type == 'Checkbox' ?
              <FormCheckbox 
                item={item}
              onSelect={arr=>onChange(item.key,arr)}
              />
            
            :item.type == 'Radio' ?
              <FormRadio
                item={item}
              onSelect={arr=>onChange(item.key,arr)}
              />
            :
          <></>
        }
        </div>
        )}
      </div>
    </div>
  );
};

export default FormCreator;
