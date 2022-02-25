import PopupWithForm from "./PopupWithForm";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import { useState, useContext, useEffect } from "react";

function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar }) {
  const currentUser = useContext(CurrentUserContext);
  const [avatar, setAvatar] = useState("");

  useEffect(() => {
    setAvatar(currentUser.avatar);
  }, [currentUser, isOpen]);

  function handleAvatarChange(e) {
    setAvatar(e.target.value);
  }

  function handleOnSubmit(e) {
    e.preventDefault();
    onUpdateAvatar(avatar);
  }

  return (
    <PopupWithForm
      btnName="Сохранить"
      name="avatar"
      title="Обновить аватар"
      onClose={onClose}
      onSubmit={handleOnSubmit}
      isOpen={isOpen}
    >
      <input
        id="avatarInput"
        type="url"
        name="avatar"
        className="popup__input"
        placeholder="Ссылка на картинку"
        value={avatar}
        required
        onChange={handleAvatarChange}
      />
      <span className="popup__form-text-error avatarInput-error"></span>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;
