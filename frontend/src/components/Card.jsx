import React, { useContext } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext.js";
//import Basket from "../images/Busket.svg";

function Card(props) {
  const currentUser = useContext(CurrentUserContext);

  const isOwn = props.card.owner === currentUser._id;
  const isLiked = props.card.likes.some((id) => id === currentUser._id);
  const cardLikeButtonClassName = `element__button-like ${
    isLiked && "element__button-like_active"
  }`;

  const handleClick = () => {
    props.onCardClick(props.card);
  };

  const handleLikeClick = () => {
    props.onCardLike(props.card);
  };

  const handleDeleteClick = () => {
    props.onCardDelete(props.card);
  };

  return (
    <div className="element-template">
      <li className="element" key={props.card._id}>
        <img
          className="element__image"
          src={props.card.link}
          alt={props.card.name}
          onClick={handleClick}
        />
        {isOwn && (
          <button
            className="element__button-delete"
            type="button"
            aria-label="Корзина"
            onClick={handleDeleteClick}
          ></button>
        )}
        <div className="element__text-block">
          <h2 className="element__title">{props.card.name}</h2>
          <div>
            <button
              className={cardLikeButtonClassName}
              type="button"
              aria-label="Лайк"
              onClick={handleLikeClick}
            ></button>
            <p className="element__like-counter">{props.card.likes.length}</p>
          </div>
        </div>
      </li>
    </div>
  );
}

export default Card;
