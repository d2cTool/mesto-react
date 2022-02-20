function ImagePopup({ card, handleCloseClick }) {
  return (
    <section
      className={"popup popup_type_preview " + (card.name && "popup_opened")}
    >
      <div
        className="popup__container popup__container_type_preview"
        onClick={handleCloseClick}
      >
        <button
          type="button"
          aria-label="close"
          className="popup__close-button popup__preview-close-button"
          onClick={handleCloseClick}
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
