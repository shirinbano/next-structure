import React from "react";

function FormInput({ item,value,onChangeText }) {
  return (
    <div className="mb-3">
      <label htmlFor={`${item.id}`} className="form-label">
        {item.title}
      </label>
      {!!item.multiline ?
      <textarea
        type={item.type}
        inputMode={item.keyboardType}
        className="form-control"
        id={`${item.id}`}
        placeholder={item.placeHolder || item.title}
        onChange={(v) => onChangeText(v.target.value)}
        maxLength={item.maxLength || 256}
        value={value}
        disabled={item.disabled}
      />
      :
      <input
        type={item.type}
        inputMode={item.keyboardType}
        className="form-control"
        id={`${item.id}`}
        placeholder={item.placeHolder || item.title}
        onChange={(v) => onChangeText(v.target.value)}
        maxLength={item.maxLength || 256}
        value={value}
        disabled={item.disabled}
      />
      }
      {!!item.hint && (
        <div id={`${item.id}`} className="form-text">
          {item.hint}
        </div>
      )}
    </div>
  );
}

export default FormInput;
