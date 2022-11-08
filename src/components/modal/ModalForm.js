import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "./css/style.css";
import validate from "./validator";
import successImage from "./assets/success.svg";

function ModalForm(props) {
  const user = useSelector((state) => state.userData);
  const [values, setValues] = useState({
    name: "",
    color: "#000000",
    user_id: user.id,
    register: { record0: "0" },
  });

  const [fields, setFields] = useState(Object.keys(values.register));
  const [isValidated, setIsValidated] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isStored, setIsStored] = useState(false);
  const { service, closeModal } = props;

  useEffect(() => {
    setIsValidated(validate(values));
  }, [values]);

  useEffect(() => {
    if (isSubmitted) {
      service(values)
        .then((res) => {
          console.log(res);
          setIsLoading(false);
          setIsStored(true);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [isSubmitted, service, values]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setIsSubmitted(true);
  };

  function handleChange(e) {
    setValues({
      ...values,
      register: { ...values.register, [e.target.name]: e.target.value },
    });
  }

  const handleName = (e) => {
    setValues({ ...values, name: e.target.value });
  };
  const handleColor = (e) => {
    setValues({ ...values, color: e.target.value });
  };

  const handleRecord = (e) => {
    const number =
      fields.length > 0 ? Number(fields[fields.length - 1].split("d")[1]) : 0;
    const title = `record${number + 1}`;
    setFields([...fields, title]);
    setValues({
      ...values,
      register: { ...values.register, [title]: "0" },
    });
  };

  const handleDelete = (e) => {
    const newRegister = values.register;
    const newArrFields = fields.filter((x) => x !== e.target.name);
    delete newRegister[e.target.name];
    setValues({ ...values, register: newRegister });
    setFields(newArrFields);
  };

  if (isLoading) {
    return (
      <div className="loaderContainer modalLoader">
        <div className="loader">
          <div></div>
          <div></div>
        </div>
      </div>
    );
  }

  if (!isStored) {
    return (
      <div>
        <h1>Create {props.type}</h1>
        <form action="#" onSubmit={handleSubmit}>
          <div className="form_group">
            <label className="name" htmlFor="name">
              Name
            </label>
            <input
              className="field"
              type="text"
              name="name"
              value={values.name}
              onChange={handleName}
            />
          </div>
          <div className="form_group">
            <label className="color" htmlFor="color">
              Color identifier
            </label>
            <input
              className="field color"
              type="color"
              name="color"
              value={values.color}
              onChange={handleColor}
            />
            <span className="colorSpan">
              Click the button to select a color
            </span>
          </div>
          <div className="record_container" id="r_container">
            {fields.map((x, index) => {
              return (
                <div className="form_group" key={index}>
                  <label className="record" htmlFor="record">
                    Quantity
                  </label>
                  <input
                    className="field"
                    type="number"
                    name={x}
                    onChange={(e) => {
                      handleChange(e);
                    }}
                    value={values.register[x]}
                  />
                  <button
                    className="btn_eraseField"
                    onClick={handleDelete}
                    type="button"
                    name={x}
                  >
                    x
                  </button>
                </div>
              );
            })}
          </div>
          <button className="btn_record" type="button" onClick={handleRecord}>
            + Add record
          </button>
          <button
            type="submit"
            className="btn_submit"
            disabled={isValidated ? false : true}
          >
            Save
          </button>
        </form>
      </div>
    );
  }
  return (
    <div className="success_container">
      <div className="illustration_container">
        <img src={successImage} alt="success ilustration" />
      </div>
      <h1>Well done</h1>
      <span>Your {props.type} has been saved successfully</span>
      <button className="btn_continue" onClick={closeModal}>
        Continue
      </button>
    </div>
  );
}

export default ModalForm;
