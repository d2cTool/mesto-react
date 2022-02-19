import PopupWithForm from "./PopupWithForm";

function ConfirmationPopup({ isOpen, handleOnClose, handleOnSubmit }) {
  return (
    <PopupWithForm
      btnName="Да"
      name="confirmation"
      title="Вы уверены?"
      handleOnClose={handleOnClose}
      handleOnSubmit={handleOnSubmit}
      isOpen={isOpen}
    ></PopupWithForm>
  );
}

export default ConfirmationPopup;
