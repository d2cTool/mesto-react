import PopupWithForm from "./PopupWithForm";

function ProfilePopup({ isOpen, handleOnClose }) {
  return (
    <PopupWithForm
      btnName="Сохранить"
      name="profile"
      title="Редактировать профиль"
      handleOnClose={handleOnClose}
      isOpen={isOpen}
    >
      <input
        id="nameInput"
        type="text"
        name="name"
        className="popup__input"
        placeholder="Имя"
        value="me"
        required
        minLength="2"
        maxLength="40"
      />
      <span className="popup__form-text-error nameInput-error"></span>
      <input
        id="jobInput"
        type="text"
        name="description"
        className="popup__input"
        placeholder="Профессиональная деятельность"
        value="me me"
        required
        minLength="2"
        maxLength="200"
      />
      <span className="popup__form-text-error jobInput-error"></span>
    </PopupWithForm>
  );
}

export default ProfilePopup;
