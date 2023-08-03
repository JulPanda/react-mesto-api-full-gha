import { useRef } from "react";
import React from "react";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup(props) {
  const refCardName = useRef("");
  const refCardLink = useRef("");

  function handleSubmit(e) {
    e.preventDefault();

    props.onAddPlace({
      name: refCardName.current.value,
      link: refCardLink.current.value,
    });
  }

  React.useEffect(() => {
    refCardName.current.value = "";
    refCardLink.current.value = "";
  }, [props.isOpen]);

  return (
    <PopupWithForm
      name="card"
      title="Новое место"
      textButton={props.isLoading ? "Создание..." : "Создать"}
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
    >
      <input
        id="input-place"
        type="text"
        placeholder="Название"
        name="inputPlace"
        className="popup__input popup__input_type_place"
        minLength="2"
        maxLength="30"
        ref={refCardName}
        required
      />
      <span id="input-place-error" className="popup__error"></span>

      <input
        id="input-link"
        type="url"
        placeholder="Ссылка на картинку"
        name="inputLink"
        className="popup__input popup__input_type_link"
        ref={refCardLink}
        required
      />
      <span id="input-link-error" className="popup__error"></span>
    </PopupWithForm>
  );
}

export default AddPlacePopup;
