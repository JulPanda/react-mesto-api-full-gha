import React, { useContext } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import PopupWithForm from "./PopupWithForm";

function EditProfilePopup(props) {
  const [name, setName] = React.useState("");
  const [description, setDescription] = React.useState("");
  const currentUser = useContext(CurrentUserContext);

  React.useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser, props.isOpen]);

  function handleChangeName(e) {
    setName(e.target.value);
  }

  function handleChangeDescription(e) {
    setDescription(e.target.value);
  }

  function handleSubmit(e) {
    // Запрещаем браузеру переходить по адресу формы
    e.preventDefault();

    // Передаём значения управляемых компонентов во внешний обработчик
    props.onUpdateUser({
      name,
      about: description,
    });
  }

  return (
    <PopupWithForm
      name="edit"
      title="Редактировать профиль"
      textButton={props.isLoading ? "Сохранение..." : "Сохранить"}
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
    >
      <input
        id="input-name"
        type="text"
        placeholder="Имя"
        name="inputName"
        className="popup__input popup__input_type_name"
        minLength="2"
        maxLength="40"
        value={name || ""}
        onChange={handleChangeName}
        required
      />
      <span id="input-name-error" className="popup__error"></span>

      <input
        id="input-about"
        type="text"
        placeholder="О себе"
        name="inputAbout"
        className="popup__input popup__input_type_about"
        minLength="2"
        maxLength="200"
        value={description || ""}
        onChange={handleChangeDescription}
        required
      />
      <span id="input-about-error" className="popup__error"></span>
    </PopupWithForm>
  );
}

export default EditProfilePopup;
