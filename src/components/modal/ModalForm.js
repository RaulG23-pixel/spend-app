import React, { useState } from "react";
import { useSelector } from "react-redux";
import "./css/style.css";

function ModalForm() {
  const user = useSelector((state) => state.userData);

  const handleRecord = (e) => {
    e.preventDefault();
    const recordContainer = document.querySelector(".record_container");
    let template =
      '<div class="form_group"><label class="record" htmlFor="record">record</label><input class="field" type="number" name="record" /></div>';
    recordContainer.innerHTML += template;
  };
  const [values, setValues] = useState({
    name: "",
    userId: user.id,
    register: {
      data: [],
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <form action="#" onSubmit={handleSubmit}>
        <div className="form_group">
          <label className="name" htmlFor="name">
            Name
          </label>
          <input
            className="field"
            type="text"
            name="name"
            value={values.register.data}
          />
        </div>
        <div className="record_container">
          <div className="form_group">
            <label className="record" htmlFor="record">
              record
            </label>
            <input className="field" type="number" name="record" />
          </div>
        </div>
        <button className="btn_record" onClick={handleRecord}>
          + Add record
        </button>
        <div className="form_group"></div>
        <button type="submit" className="btn_submit">
          Save
        </button>
      </form>
    </div>
  );
}

export default ModalForm;
