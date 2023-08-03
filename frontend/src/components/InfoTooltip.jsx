import React from "react";
import successImg from "../images/Success_status.svg";
import failImg from "../images/Fail_status.svg";
import { usePopupClose } from "../hooks/usePopupClose";

function InfoTooltip({isOpen, onClose, statusImage, message}) {
  usePopupClose(isOpen, onClose);
  return (
    <div
      className={`popup popup_type_status ${
        isOpen ? `popup_opened` : ``
      }`}
    >
      <div className="popup__content">
        <button
          className={`popup__button-close `}
          type="button"
          onClick={onClose}
        ></button>
        <img
          className="popup__status-image"
          src={statusImage ? successImg : failImg}
          alt="Статус"
        />
        <h3 className="popup__status-title">{message}</h3>
      </div>
    </div>
  );
}

export default InfoTooltip;
