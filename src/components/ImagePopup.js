function ImagePopup() {
  return (
    <section className="popup popup_type_preview">
      <div className="popup__container popup__container_type_preview">
        <button
          type="button"
          ariaLabel="close"
          className="popup__close-button popup__preview-close-button"
        ></button>
        <figure className="popup__figure">
          <img src="#" alt="изображение" className="popup__photo" />
          <figcaption className="popup__caption"></figcaption>
        </figure>
      </div>
    </section>
  );
}

export default ImagePopup;
