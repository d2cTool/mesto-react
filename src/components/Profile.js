function Profile({
    userInfo,
    profileHandlers
}) {
    return (
        <section className="profile">
            <div className="profile__content">
                <div className="profile__avatar">
                    <img
                        src={userInfo.avatar}
                        alt="аватар"
                        className="profile__avatar-icon"
                        onClick={profileHandlers.handleEditAvatarClick}
                    />
                </div>
                <div className="profile__info">
                    <h1 className="profile__title">{userInfo.name}</h1>
                    <button
                        type="button"
                        aria-label="edit"
                        className="profile__edit-button"
                        onClick={profileHandlers.handleEditProfileClick}
                    ></button>
                    <p className="profile__subtitle">{userInfo.about}</p>
                </div>
            </div>
            <button
                type="button"
                aria-label="add"
                className="profile__add-button"
                onClick={profileHandlers.handleAddPlaceClick}
            ></button>
        </section>
    );
}

export default Profile;