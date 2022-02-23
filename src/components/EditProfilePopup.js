import PopupWithForm from "./PopupWithForm";
import { useState } from "react";

function EditProfilePopup({ isOpen, onClose, onUpdateUser }) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleDescriptionChange(e) {
    setDescription(e.target.value);
  }

  function handleOnSubmit(e) {
    e.preventDefault();
    onUpdateUser({
      name,
      about: description,
    });
  }

  return (
    <PopupWithForm
      btnName="Сохранить"
      name="profile"
      title="Редактировать профиль"
      handleOnClose={onClose}
      isOpen={isOpen}
      onSubmit={handleOnSubmit}
    >
      <input
        id="nameInput"
        type="text"
        name="name"
        className="popup__input"
        placeholder="Имя"
        value={name}
        required
        minLength="2"
        maxLength="40"
        onChange={handleNameChange}
      />
      <span className="popup__form-text-error nameInput-error"></span>
      <input
        id="jobInput"
        type="text"
        name="description"
        className="popup__input"
        placeholder="Профессиональная деятельность"
        value={description}
        required
        minLength="2"
        maxLength="200"
        onChange={handleDescriptionChange}
      />
      <span className="popup__form-text-error jobInput-error"></span>
    </PopupWithForm>
  );
}

export default EditProfilePopup;
