import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";
import { api } from "../utils/Api";
import "../index.css";
import { useState, useEffect } from "react";
import EditProfilePopup from "./EditProfilePopup";
import CardPopup from "./CardPopup";
import EditAvatarPopup from "./EditAvatarPopup";
import ImagePopup from "./ImagePopup";
import CurrentUserContext from "../contexts/CurrentUserContext";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);

  const [currentUser, setCurrentUser] = useState({});
  const [selectedCard, setSelectedCard] = useState({});

  useEffect(() => {
    api
      .getUserInfo()
      .then((data) => setCurrentUser(data))
      .catch((err) => console.log(err));

    console.log("getUserInfo");
  }, []);

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function closePopups() {
    setSelectedCard({});
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
  }

  function handlePreviewClick(card) {
    setSelectedCard(card);
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <div className="page__container">
          <Header />
          <Main
            onEditAvatar={handleEditAvatarClick}
            onEditProfile={handleEditProfileClick}
            onAddCard={handleAddPlaceClick}
            onPreview={handlePreviewClick}
            onClose={closePopups}
          />
          <Footer />
          <EditProfilePopup
            isOpen={isEditProfilePopupOpen}
            onClose={closePopups}
          />
          <CardPopup isOpen={isAddPlacePopupOpen} handleOnClose={closePopups} />
          <EditAvatarPopup
            isOpen={isEditAvatarPopupOpen}
            handleOnClose={closePopups}
          />
          <ImagePopup card={selectedCard} handleOnClose={closePopups} />
        </div>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
