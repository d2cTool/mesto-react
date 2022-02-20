function PopupWithForm({
  isOpen,
  name,
  title,
  btnName,
  handleOnClose,
  handleOnSubmit,
  children,
}) {
  return (
    <section
      className={'popup ' + (isOpen && "popup_opened")}
    >
      <div className={`popup__container popup__container_type_${name}`}>
        <button
          type="button"
          aria-label="close"
          className="popup__close-button"
          onClick={handleOnClose}
        ></button>
        <form
          action="/post"
          name={`${name}Form`}
          className="popup__form"
          noValidate
          onSubmit={handleOnSubmit}
        >
          <h2 className="popup__title">{title}</h2>
          {children}
          <button type="submit" className="popup__button">
            {btnName}
          </button>
        </form>
      </div>
    </section>
  );
}

export default PopupWithForm;
