import avatarImg from "../images/avatar.jpg";
import ImagePopup from "./ImagePopup";

function Main() {
  return (
    <main class="main">
      <section className="popup popup_type_profile">
        <div className="popup__container popup__container_type_profile">
          <button
            type="button"
            ariaLabel="close"
            className="popup__close-button"
          ></button>
          <form
            action="/post"
            name="popupProfileForm"
            className="popup__form"
            novalidate
          >
            <h2 className="popup__title">Редактировать профиль</h2>
            <input
              id="nameInput"
              type="text"
              name="name"
              className="popup__input"
              placeholder="Имя"
              value="Жак-Ив Кусто"
              required
              minlength="2"
              maxlength="40"
            />
            <span className="popup__form-text-error nameInput-error"></span>
            <input
              id="jobInput"
              type="text"
              name="description"
              className="popup__input"
              placeholder="Профессиональная деятельность"
              value="Исследователь океана"
              required
              minlength="2"
              maxlength="200"
            />
            <span className="popup__form-text-error jobInput-error"></span>
            <button type="submit" className="popup__button">
              Сохранить
            </button>
          </form>
        </div>
      </section>
      <section className="popup popup_type_avatar">
        <div className="popup__container popup__container_type_avatar">
          <button
            type="button"
            ariaLabel="close"
            className="popup__close-button"
          ></button>
          <form
            action="/post"
            name="popupAvatarForm"
            className="popup__form"
            novalidate
          >
            <h2 className="popup__title">Обновить аватар</h2>
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
            <button type="submit" className="popup__button">
              Сохранить
            </button>
          </form>
        </div>
      </section>
      <section className="popup popup_type_confirmation">
        <div className="popup__container popup__container_type_confirmation">
          <button
            type="button"
            ariaLabel="close"
            className="popup__close-button"
          ></button>
          <form
            action="/post"
            name="popupConfirmationForm"
            className="popup__form"
            novalidate
          >
            <h2 className="popup__title">Вы уверены?</h2>
            <button type="submit" className="popup__button">
              Да
            </button>
          </form>
        </div>
      </section>
      <section className="popup popup_type_card">
        <div className="popup__container popup__container_type_card">
          <button
            type="button"
            ariaLabel="close"
            className="popup__close-button"
          ></button>
          <form
            action="/post"
            name="popupCardForm"
            className="popup__form"
            novalidate
          >
            <h2 className="popup__title">Новое место</h2>
            <input
              id="placeNameInput"
              type="text"
              name="name"
              className="popup__input"
              placeholder="Название"
              value=""
              required
              minlength="2"
              maxlength="30"
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
            <button type="submit" class="popup__button">
              Создать
            </button>
          </form>
        </div>
      </section>
      <ImagePopup />
      <section className="profile">
        <div className="profile__content">
          <div className="profile__avatar">
            <img
              src={avatarImg}
              alt="аватар"
              className="profile__avatar-icon"
              onClick={handleEditAvatarClick}
            />
          </div>
          <div className="profile__info">
            <h1 className="profile__title">Жак-Ив Кусто</h1>
            <button
              type="button"
              ariaLabel="edit"
              className="profile__edit-button"
              onClick={handleEditProfileClick}
            ></button>
            <p className="profile__subtitle">Исследователь океана</p>
          </div>
        </div>
        <button
          type="button"
          ariaLabel="add"
          className="profile__add-button"
          onClick={handleAddPlaceClick}
        ></button>
      </section>
      <section className="elements"></section>
    </main>
  );
}

function handleEditAvatarClick(evt) {
  const avatarPopupSelector = ".popup_type_avatar";
  avatarPopupSelector.classList.add("popup_opened");
}

function handleEditProfileClick(evt) {
  this._popup.classList.add("popup_opened");
}

function handleAddPlaceClick(evt) {
  this._popup.classList.add("popup_opened");
}

export default Main;
