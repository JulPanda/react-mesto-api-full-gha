import React from "react";
import Card from "./Card.jsx";
import { CurrentUserContext } from "../contexts/CurrentUserContext.js";
import { useContext } from "react";

function Main(props) {
  const currentUser = useContext(CurrentUserContext);

  return (
    <main className="page__content">
      <section className="profile">
        <img
          src={currentUser.avatar}
          className="profile__image"
          alt="Аватар"         
          //src="<%=require('./images/image-profile.jpg')%>"
        />
        <div className="profile__image-edit" onClick={props.onEditAvatar}></div>

        <div className="profile__info">
          <h1 className="profile__title">{currentUser.name}</h1>
          <button
            className="profile__button-edit"
            type="button"
            aria-label="Кнопка Редактировать"
            onClick={props.onEditProfile}
          ></button>
          <p className="profile__subtitle">{currentUser.about}</p>
        </div>
        <button
          className="profile__button-add"
          type="button"
          aria-label="Кнопка Добавить"
          onClick={props.onAddPlace}
        ></button>
      </section>
      <section>
        <ul className="cards">
          {props.cards.map((card) => (
            <Card
              card={card}
              key={card._id}
              name={card.name}
              link={card.link}
              likes={card.likes}
              onCardClick={props.onCardClick}
              onCardLike={props.onCardLike}
              onCardDelete={props.onCardDelete}
            />
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Main;
