import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup({ isOpen, handleOnClose, handleOnSubmit }) {
  return (
    <PopupWithForm
      btnName="Сохранить"
      name="avatar"
      title="Обновить аватар"
      handleOnClose={handleOnClose}
      handleOnSubmit={handleOnSubmit}
      isOpen={isOpen}
    >
      <input
        id="avatarInput"
        type="url"
        name="link"
        className="popup__input"
        placeholder="Ссылка на картинку"
        value=""
        required
      />
      <span className="popup__form-text-error avatarInput-error"></span>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;
