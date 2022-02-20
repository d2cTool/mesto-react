import PopupWithForm from "./PopupWithForm";

function CardPopup({ isOpen, handleOnClose, handleOnSubmit }) {
  return (
    <PopupWithForm
      btnName="Создать"
      name="card"
      title="Новое место"
      handleOnClose={handleOnClose}
      handleOnSubmit={handleOnSubmit}
      isOpen={isOpen}
    >
      <input
        id="placeNameInput"
        type="text"
        name="name"
        className="popup__input"
        placeholder="Название"
        value=""
        required
        minLength="2"
        maxLength="30"
      />
      <span className="popup__form-text-error placeNameInput-error"></span>
      <input
        id="linkInput"
        type="url"
        name="link"
        className="popup__input"
        placeholder="Ссылка на картинку"
        value=""
        required
      />
      <span className="popup__form-text-error linkInput-error"></span>
    </PopupWithForm>
  );
}

export default CardPopup;
