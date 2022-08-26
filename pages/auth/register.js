import React, { useState } from "react";
import { AuthHeader } from "../../components/Headers/CustomHeader";
import FormCreator from "../../components/form/FormCreator";
import FilePicker from "../../components/filePicker/FilePicker";
const FormItems = [
  {
    id: 133,
    title: "شغل",
    key: "job",
    type: "Checkbox",
    hint: "تست",
    data: [
      { id: 1, title: "دیپلم" },
      { id: 2, title: "فوق لیسانس" },
    ],
  },
  {
    id: 134,
    title: "جنسیت",
    key: "gen",
    type: "Radio",
    data: [
      { id: 1, title: "رادیو دیپلم" },
      { id: 2, title: "لیسانس" },
      { id: 3, title: "کارشناس" },
    ],
  },
  {
    id: 1,
    title: "کد ملی",
    key: "code_meli",
    type: "Input",
    keyboardType: "numeric",
    maxLength: 10,
    hint: "نام باید فارسی باشد",
  },
  {
    id: 2,
    title: "نام",
    key: "name",
    type: "Input",
    containerClass: "col-6 col-md-6 col-lg-4"


  },
  {
    id: 3,
    title: "نام خانوادگی",
    key: "family",
    type: "Input",
    containerClass: "col-6 col-md-6 col-lg-4"
  },
  {
    id: 4,
    title: "تاریخ تولد",
    key: "birthday_date",
    type: "Date",
    placeHolder: "انتخاب تاریخ",
    // fromYear: 1330,
    // toYear: 1390,
  },
  {
    id: 5,
    title: "شماره همراه",
    key: "mobile",
    maxLength: 11,
    keyboardType: "numeric",
    type: "Input",
  },
  {
    id: 17,
    title: `جنسیت`,
    placeHolder: "جنسیت",
    key: "sex",
    type: "Select",
    data: [
      { id: 0, title: "مرد" },
      { id: 1, title: "زن" },
    ],
  },
  {
    id: 6,
    title: "رمز عبور",
    key: "password",
    keyboardType: "numeric",
    type: "Input",
  },
  {
    id: 7,
    title: "تکرار رمز عبور",
    key: "re_password",
    keyboardType: "numeric",
    type: "Input",
  },
  {
    id: 78,
    type: "Break",
    containerClass: "col-12"
  },
  {
    id: 79,
    type: "Divider",
    containerClass: "col-12",
    class:'bg-gray'
  },
  {
    id: 77,
    title: "توضیحات",
    key: "description",
    type: "Input",
    multiline:true,
    containerClass: "col-8"
  },
];

const imagesItems = [
  { id: 0, title: "صفحه اول شناسنامه و توضیحات متقاضی", key: "person_image" },
  { id: 1, title: "صفحه ازدواج شناسنامه متقاضی", key: "person_wife_image" },
  { id: 2, title: "صفحه فرزندان شناسنامه متقاضی", key: "person_child_image" },
  { id: 3, title: "کارت ملی متقاضی", key: "person_code_meli_image" },
];

const Register = ({ isMobile }) => {
  const [state, setState] = useState({});
  console.log(state);
  return (
    <div className="container wrapper px-0 mx-0 justify-content-center">
      <div
        class={`d-flex flex-column justify-content-between col-12 col-md-8 col-lg-6  bg-white rounded-3
      ${isMobile ? "vh-100" : "vh-50 shadow rounded-5"}`}
      >
        <AuthHeader />
        <div className="row px-4">
          {imagesItems.map((el,i) => (
            <FilePicker
              key={el.id}
              index={i}
              label=""
              title={el.title}
              isUploaded={false}
              isUploading={false}
              type="image"
              callback={(file) =>
                setState((e) => {
                  return { ...e, [el.key]: file };
                })
              }
            />
          ))}
        </div>
        <FormCreator data={FormItems} state={state} setState={setState} />
        <div className="d-flex justify-content-center">
          <button className="btn btn-primary w-50 mb-3 align-self-center">دریافت کد تایید و ثبت نام</button>
        </div>
      </div>
    </div>
  );
};

export default Register;
