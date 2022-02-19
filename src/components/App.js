import React from 'react';
import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";
import "../index.css";
import { api } from "../utils/Api";
import { useEffect, useState } from "react";
import ProfilePopup from "./ProfilePopup";

function App() {

  const [showProfilePopup, setShowProfilePopup] = React.useState(false);

  const [cards, setCards] = useState([]);
  const [userInfo, setUserInfo] = useState({});

  useEffect(() => {
    api.getInitialCards()
      .then((data) => setCards(data))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    api.getUserInfo()
      .then((data) => setUserInfo(data))
      .catch((err) => console.log(err));
  }, []);

  function handleEditProfileClick() {
    setShowProfilePopup(true);
  }

  function handleEditAvatarClick() {
  }

  function handleAddPlaceClick() {
  }

  function handleDeleteClick() {
  }

  function handleLikeClick() {
  }

  function handleCloseClick() {
  }

  function handleOnSubmit() {
  }

  function closeAllPopups() {
    setShowProfilePopup(false);
  }

  const handlers = {profileHandlers, cardHandlers};
  const profileHandlers = {handleEditAvatarClick, handleEditProfileClick, handleAddPlaceClick};
  const cardHandlers = {handleDeleteClick, handleLikeClick};
  const profilePopupHandlers = {handleCloseClick, handleOnSubmit};

  return (
    <div className="page">
      <div className="page__container">
        <Header />
        <Main cards={cards} userInfo={userInfo} handlers={handlers} />
        <Footer />
        <ProfilePopup isOpen={showProfilePopup} userInfo={userInfo} profilePopupHandlers={profilePopupHandlers} />
      </div>
    </div>
  );
}

export default App;
