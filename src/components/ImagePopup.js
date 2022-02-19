function ImagePopup({card}) {
  return (
    <section className="popup popup_type_preview">
      <div className="popup__container popup__container_type_preview">
        <button
          type="button"
          aria-label="close"
          className="popup__close-button popup__preview-close-button"
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
