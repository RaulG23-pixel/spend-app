import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "./css/style.css";

function ModalForm(props) {
  useEffect(() => {}, []);

  const user = useSelector((state) => state.userData);
  const [values, setValues] = useState({
    name: "",
    userId: user.id,
    register: { record0: "0" },
  });

  const [fields, setFields] = useState(Object.keys(values.register));

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
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

  const handleRecord = (e) => {
    e.preventDefault();
    const recordsQuantity = fields.length;
    const title = `record${recordsQuantity + 1}`;
    setFields([...fields, { [title]: 0 }]);
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
          {fields.map((x, index) => (
            <div className="form_group" key={index}>
              <label className="record" htmlFor="record">
                Quantity
              </label>
              <input
                className="field"
                type="number"
                name={`record${index}`}
                onChange={(e) => {
                  handleChange(e);
                }}
              />
            </div>
          ))}
        </div>
        <button className="btn_record" onClick={handleRecord}>
          + Add record
        </button>
        <button type="submit" className="btn_submit">
          Save
        </button>
      </form>
    </div>
  );
}

export default ModalForm;
