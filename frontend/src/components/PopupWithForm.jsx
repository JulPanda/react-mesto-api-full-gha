import React from "react";
import { usePopupClose } from "../hooks/usePopupClose";

function PopupWithForm({isOpen, onClose, name, title, textButton, onSubmit, children}) {
  usePopupClose(isOpen, onClose);
  return (
    <div
      className={`popup popup_type_${name} ${
        isOpen ? `popup_opened` : ``
      }`}
    >
      <div className="popup__content">
        <h2 className="popup__title">{title}</h2>
        <button
          className={`popup__button-close popup__button-close_${name}`}
          type="button"
          onClick={onClose}
        />

        <form
          className="popup__form"
          name={`${name}`}
          id={`form-${name}`}
          onSubmit={onSubmit}
          //noValidate
        >
          {children}

          <button className="popup__button-save" type="submit">
            {textButton}
          </button>
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;
