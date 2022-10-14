import React from "react";
import "./css/modal.css";

function Modal(props) {
  const { isActive, closeModal } = props;
  if (isActive) {
    return (
      <article className="modalContainer">
        <div className="modal">
          <button className="modal__close_button" onClick={closeModal}>
            X
          </button>
          {props.children}
        </div>
      </article>
    );
  }
  return <></>;
}

export default Modal;
