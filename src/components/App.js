import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";
import "../index.css";
import { useState } from "react";
import ProfilePopup from "./ProfilePopup";
import CardPopup from "./CardPopup";
import AvatarPopup from "./AvatartPopup";
import ImagePopup from "./ImagePopup";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);

  const [selectedCard, setSelectedCard] = useState({});

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
        <ProfilePopup
          isOpen={isEditProfilePopupOpen}
          handleOnClose={closePopups}
        />
        <CardPopup isOpen={isAddPlacePopupOpen} handleOnClose={closePopups} />
        <AvatarPopup
          isOpen={isEditAvatarPopupOpen}
          handleOnClose={closePopups}
        />
        <ImagePopup card={selectedCard} handleOnClose={closePopups} />
      </div>
    </div>
  );
}

export default App;
