import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { saveExpense } from "../../services/expenseService";
import "./css/style.css";
import UseHelperModal from "./helpers";

function ModalForm(props) {
  const user = useSelector((state) => state.userData);
  const [values, setValues] = useState({
    name: "",
    userId: user.id,
    register: { record0: "0" },
  });
  const { verification } = UseHelperModal();
  const [fields, setFields] = useState(Object.keys(values.register));
  const [isValidated, setIsValidated] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  function handleChange(e) {
    setValues({
      ...values,
      register: { ...values.register, [e.target.name]: e.target.value },
    });
    setIsValidated(verification(values));
  }

  const handleName = (e) => {
    setValues({ ...values, name: e.target.value });
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
    setIsValidated(values);
  };

  const handleDelete = (e) => {
    const newRegister = values.register;
    const newArrFields = fields.filter((x) => x !== e.target.name);
    delete newRegister[e.target.name];
    setValues({ ...values, register: newRegister });
    setFields(newArrFields);
    setIsValidated(values);
  };

  return (
    <div>
      <h1>{props.title}</h1>
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

export default ModalForm;
