import { useContext } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Profile({
  handleAvatarClick,
  handleProfileClick,
  handleAddCardClick,
}) {
  const currentUser = useContext(CurrentUserContext);

  return (
    <section className="profile">
      <div className="profile__content">
        <div className="profile__avatar">
          <img
            src={currentUser.avatar}
            alt="аватар"
            className="profile__avatar-icon"
            onClick={handleAvatarClick}
          />
        </div>
        <div className="profile__info">
          <h1 className="profile__title">{currentUser.name}</h1>
          <button
            type="button"
            aria-label="edit"
            className="profile__edit-button"
            onClick={handleProfileClick}
          ></button>
          <p className="profile__subtitle">{currentUser.about}</p>
        </div>
      </div>
      <button
        type="button"
        aria-label="add"
        className="profile__add-button"
        onClick={handleAddCardClick}
      ></button>
    </section>
  );
}

export default Profile;
