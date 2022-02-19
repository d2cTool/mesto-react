import React from "react";

function PopupWithForm({isOpen, name, title, btnName, popupHandlers, children}) {
  return (
    <section className={`popup popup_type_${name} ` + (isOpen ? 'popup_opened' : '')}>
      <div className={`popup__container popup__container_type_${name}`}>
        <button
          type="button"
          aria-label="close"
          className="popup__close-button"
          onClick={popupHandlers.handleCloseClick}
        ></button>
        <form
          action="/post"
          name={`${name}Form`}
          className="popup__form"
          novalidate
          onSubmit={popupHandlers.handleOnSubmit}
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
