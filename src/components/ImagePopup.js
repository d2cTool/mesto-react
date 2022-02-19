function ImagePopup({isOpen, card, handleOnClose}) {
  return (
    <section className={"popup popup_type_preview " + (isOpen && 'popup_opened')}>
      <div className="popup__container popup__container_type_preview" onClick={() => handleOnClose()}>
        <button
          type="button"
          aria-label="close"
          className="popup__close-button popup__preview-close-button"
          onClick={() => handleOnClose()}
        ></button>
        <figure className="popup__figure">
          <img src={card.link} alt={card.name} className="popup__photo" />
          <figcaption className="popup__caption">{card.name}</figcaption>
        </figure>
      </div>
    </section>
  );
}

export default ImagePopup;
