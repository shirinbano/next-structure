import React, { useState, useRef } from "react";
import { toast } from "react-hot-toast";
// import { FaEye, FaTrashAlt } from "react-icons/fa";
import { imageUrl } from "../../utils/apiRoutes";
import Loading from "../Loading/Loading";

const FilePicker = ({
  label,
  title,
  initValue,
  index = 1,
  type = "image",
  canDelete,
  isUploaded,
  isUploading = false,
  containerClass,
  withBase64,
  callback,
}) => {

  const inputRef = useRef();
  const [file, setfile] = useState(null);
  const [error, seterror] = useState(false);

  /*---------FINAL FUNCTION--------*/
  const onSelect = async (e) => {
    try {
      const file = e.target.files[0];
      if (!file) return;
      if (type == "image" && !file.type?.includes("image/")) {
        toast.error("لطفا از فایل تصویر استفاده نمایید");
        seterror(true);
        return;
      }
      if (type == "pdf" && !file.type?.includes("pdf")) {
        toast.error("لطفا از فایل PDF استفاده نمایید");
        seterror(true);
        return;
      }
      seterror(false);
      setfile(file);
      if (withBase64) {
        //if we need base64 date
        const base64 = await getBase64(file);
        callback(base64);
      } else callback(file);
    } catch (error) {
      console.log(error);
    }
  };
  function onDelete() {
    setfile(null);
    callback(null);
  }
  /*---------CONVERT FILE TO BASE64--------*/
  const getBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  };

  return (
    <div className={containerClass || "col-12 col-md-6 mb-3"}>
      {label && (
        <label for="formFile" className="form-label">
          {label}
        </label>
      )}
      <input className="form-control custom-file-input d-none" type="file" id={`formFile_${index}`} ref={inputRef} onChange={onSelect} />

      {/* CUSTOM INPUT */}
      <div className="shadow-sm rounded-2 bg-white pt-2 pb-1 px-3">
        <div className="d-flex felx-row justify-content-between align-items-center">
          <div className="d-flex felx-row justify-content-start align-items-center">
            <i className={`bi-check-circle-fill fs-3 ms-2 ${isUploaded ? "text-success" : "text-secondary"}`} />
            <p className="text-secondary ps-2 text-wrap  ">{title}</p>
          </div>
          <div
            className="d-flex justify-content-center align-items-center rounded border border-2 border-gray"
            style={{ width: 100, height: 100,minWidth: 100, minHeight: 100, backgroundColor: "rgba(1,153,52,0.2)", cursor: "pointer" }}
            onClick={() => {
              !isUploading && !file ? document.getElementById(`formFile_${index}`).click() : () => "";
            }}
          >
            {isUploading ? (
              <div className="mb-3">
                <Loading />
              </div>
            ) : !!file ? (
              <div className="position-relative w-100 h-100">
                <img src={URL.createObjectURL(file)} className="w-100 h-100" />
                <span className="position-absolute start-50 top-50 translate-middle " style={{ opacity: 0.9 }}>
                  {!canDelete && (
                    <button className="btn btn-danger btn-sm fs-9" onClick={onDelete}>
                      <i className="bi-trash"></i>
                    </button>
                  )}
                </span>
              </div>
            ) : !!initValue ? (
              <img src={`${imageUrl}/${initValue}`} className="w-100 h-100" />
            ) : (
              <i className="bi-image align-baseline fs-1 mt-3 text-secondary" />
            )}
          </div>
        </div>
        {isUploaded && (
          <>
            <hr className="bg-gray" />
            <p className="text-success text-end fs-7">- تصویر وجود دارد و نیازی به بارگذاری مجدد نیست</p>
          </>
        )}
      </div>
      {/* END CUSTOM INPUT */}

      {error && <strong className="text-danger">{`فایل انتخاب شده صحیح نمی باشد. لطفا از  ${type.toUpperCase()} استفاده نمایید`}</strong>}
    </div>
  );
};

export default FilePicker;

{
  /* ) : !!file ? (
   <strong className="text-success">{`فایل انتخاب شد`}</strong>
    ) : (
<></> */
}
