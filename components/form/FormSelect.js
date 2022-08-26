import React from "react";
import Select from "react-select";

function FormSelect({item,onSelect}) {
  return (
    <div className="mb-3">
      <label htmlFor={`${item.id}`} className="form-label">
        {item.title}
      </label>

      <Select
        id={`${item.id}`}
        options={item.data || []}
        placeholder={`انتخاب ${item.placeHolder || item.title}`}
        getOptionLabel={(option) => `${option.title}`}
        getOptionValue={(option) => `${option.id}`}
        onChange={(e) => onSelect(e)}
        isSearchable={item.isSearchable ||  true}
        isDisabled={item.disabled}
      />
    </div>
  );
}

export default FormSelect;
