import React from "react";
import PopupWithForm from "./PopupWithForm";

function ConfirmDeletePopup(props) {
 // function handleSubmit(e) {
 //   e.preventDefault();
 //   console.log(props.card)
 //   props.onConfirm();
 // }

  return (
    <PopupWithForm
      name="confirm"
      title="Вы уверены?"
      textButton="Да"
      isOpen={props.isOpen}
      onClose={props.onClose}
     // onSubmit={handleSubmit}
    />
  );
}

export default ConfirmDeletePopup;
