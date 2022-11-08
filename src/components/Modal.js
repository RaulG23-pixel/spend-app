import React from "react";
import { storeExpense } from "../services/expenseService";
import { storeSaving } from "../services/savingService";
import "./css/modal.css";
import ModalForm from "./modal/ModalForm";

function Modal(props) {
  const { isActive, closeModal, type } = props;
  let content;
  switch (type) {
    case "createExpense":
      content = (
        <ModalForm
          type={"expense"}
          closeModal={closeModal}
          service={storeExpense}
        />
      );
      break;
    case "createSaving":
      content = (
        <ModalForm
          type={"saving"}
          closeModal={closeModal}
          service={storeSaving}
        />
      );
      break;

    default:
      content = "Hola mundo";
      break;
  }
  if (isActive) {
    return (
      <article className="modalContainer">
        <div className="modal">
          <button className="modal__close_button" onClick={closeModal}>
            X
          </button>
          {content}
        </div>
      </article>
    );
  }
  return <></>;
}

export default Modal;
