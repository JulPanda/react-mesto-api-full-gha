import React from "react";
import { usePopupClose } from "../hooks/usePopupClose";

function ImagePopup({card, onClose}) {
  usePopupClose(card?.link, onClose);
  return (
    <div
      className={`popup popup_type_image ${
        card.link ? `popup_opened` : ""
      }`}
    >
      <div className="popup__content-image">
        <button
          className="popup__button-close popup__button-close_image"
          type="button"
          onClick={onClose}
        ></button>
        <img
          className="popup__image"
          src={card?.link}
          alt={card ? card.name : ``}
        />
        <h3 className="popup__title-image">
          {card ? card.name : ``}
        </h3>
      </div>
    </div>
  );
}

export default ImagePopup;
