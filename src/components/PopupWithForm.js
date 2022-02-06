import React from "react";

function PopupWithForm(props) {
  const [isOpen, setIsOpen] = React.useState({ ...props.isOpen });

  React.useEffect(() => {
    setIsOpen(props.isOpen);
  }, [props.isOpen]);

  return (
    <section className={`popup popup_type_${props.name} ` + (props.isOpen ? 'popup_opened' : '')}>
      <div className={`popup__container popup__container_type_${props.name}`}>
        <button
          type="button"
          ariaLabel="close"
          className="popup__close-button"
          onClick={props.handleCloseClick}
        ></button>
        <form
          action="/post"
          name={`${props.name}Form`}
          className="popup__form"
          novalidate
          onSubmit={props.handleOnSubmit}
        >
          <h2 className="popup__title">{props.title}</h2>
          {props.children}
          <button type="submit" class="popup__button">
            {props.btnName}
          </button>
        </form>
      </div>
    </section>
  );
}

export default PopupWithForm;
