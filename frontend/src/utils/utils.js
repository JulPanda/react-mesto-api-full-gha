//Кнопки редактирования профиля и добавление новых карточек
export const aboutOpenButtonEdit = document.querySelector(
  ".profile__button-edit"
);
export const aboutOpenButtonCard = document.querySelector(
  ".profile__button-add"
);
export const aboutOpenButtonAvatar = document.querySelector(
  ".profile__image-edit"
);

// Секция карточек
export const cardsListSelector = ".cards";
// Находим форму в DOM
export const formProfileElement = document.forms["form-name"];
export const formCardElement = document.forms["form-card"];

// Находим поля формы в DOM
export const nameInput = formProfileElement.querySelector(
  ".popup__input_type_name"
);
export const jobInput = formProfileElement.querySelector(
  ".popup__input_type_about"
);
export const imagelinkInput = formCardElement.querySelector(
  ".popup__input_type_link"
);
export const placeInput = formCardElement.querySelector(
  ".popup__input_type_place"
);
export const avatarInput = document.querySelector("#input-avatar");

export const formValidation = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button-save",
  inactiveButtonClass: "popup__button-save_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
};

//export default initialCards;
