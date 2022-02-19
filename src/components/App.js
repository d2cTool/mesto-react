import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";
import "../index.css";
import { api } from "../utils/Api";
import { useEffect, useState } from "react";
import ProfilePopup from "./ProfilePopup";
import CardPopup from "./CardPopup";
import AvatarPopup from "./AvatartPopup";
import ImagePopup from "./ImagePopup";
import ConfirmationPopup from "./ConfirmationPopup";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isPreviewPopupOpen, setIsPreviewPopupOpen] = React.useState(false);
  const [isConfirmPopupOpen, setIsConfirmPopupOpen] = React.useState(false);

  const [selectedCard, setSelectedCard] = React.useState({name: "none", link: ""});

  const [cards, setCards] = useState([]);
  const [userInfo, setUserInfo] = useState({ name: "none", about: "none" });

  useEffect(() => {
    api
      .getInitialCards()
      .then((data) => setCards(data))
      .catch((err) => console.log(err));

    console.log("getInitialCards");
  }, []);

  useEffect(() => {
    api
      .getUserInfo()
      .then((data) => setUserInfo(data))
      .catch((err) => console.log(err));

    console.log("getUserInfo");
  }, []);

  const updateCard = (card) => {
    const cardIndex = cards.findIndex((c) => c._id === card._id);
    const newCards = [...cards];
    newCards[cardIndex] = card;
    setCards(newCards);
  }

  const onLikeCard = (card) => {
    const isLiked = card.likes.some((like) => like._id === userInfo._id);
    if (!isLiked)
      api
        .addLike(card._id)
        .then((data) => updateCard(data))
        .catch((err) => console.log(err));
    else
      api
        .removeLike(card._id)
        .then((data) => updateCard(data))
        .catch((err) => console.log(err));
  };

  const onDeleteCard = (card) => {
    api
      .deleteCard(card._id)
      .then(() => {
        setCards(cards.filter((c) => c.Id !== card._id));
        setIsConfirmPopupOpen(false);
      })
      .catch((err) => console.log(err));
  };

  const onAddCard = ({name, link}) => {
    api
    .postCard(name, link)
    .then((data) => {
      cards.prepend(data);
      setCards(cards);
    })
    .catch((err) => console.log(err))
  };

  return (
    <div className="page">
      <div className="page__container">
        <Header />
        <Main
          cards={cards}
          userInfo={userInfo}
          handleOnEditAvatar={() => setIsEditAvatarPopupOpen(true)}
          handleOnEditProfile={() => setIsEditProfilePopupOpen(true)}
          handleOnAddCard={() => setIsAddPlacePopupOpen(true)}
          handleOnDelete={(card) => {
            setSelectedCard(card);
            setIsConfirmPopupOpen(true);
          }}
          handleOnLike={(card) => onLikeCard(card)}
          handleOnPreview={(card) => {
            setSelectedCard(card);
            setIsPreviewPopupOpen(true);
          }}
        />
        <Footer />
        <ProfilePopup
          isOpen={isEditProfilePopupOpen}
          userInfo={userInfo}
          handleOnClose={() => setIsEditProfilePopupOpen(false)}
          handleOnSubmit={() => {
            console.log("handleOnSubmit");
          }}
        />
        <CardPopup
          isOpen={isAddPlacePopupOpen}
          handleOnClose={() => setIsAddPlacePopupOpen(false)}
          handleOnSubmit={(data) => onAddCard(data)}
        />
        <AvatarPopup
          isOpen={isEditAvatarPopupOpen}
          userInfo={userInfo}
          handleOnClose={() => setIsEditAvatarPopupOpen(false)}
          handleOnSubmit={() => {
            console.log("handleOnSubmit");
          }}
        />
        <ImagePopup
          isOpen={isPreviewPopupOpen}
          card={selectedCard}
          handleOnClose={() => {
            setSelectedCard({});
            setIsPreviewPopupOpen(false);
          }}
        />
        <ConfirmationPopup
          isOpen={isConfirmPopupOpen}
          handleOnClose={() => setSelectedCard({})}
          handleOnSubmit={() => onDeleteCard(selectedCard)}
        />
      </div>
    </div>
  );
}

export default App;
