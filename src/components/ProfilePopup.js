import React from 'react';
import PopupWithForm from './PopupWithForm';

function ProfilePopup({isOpen, userInfo, profilePopupHandlers}) {
    return (
        <PopupWithForm
            btnName='Сохранить'
            name='profile'
            title='Редактировать профиль'
            popupHandlers={profilePopupHandlers}
            isOpen={isOpen}>
            <input
                id="nameInput"
                type="text"
                name="name"
                className="popup__input"
                placeholder="Имя"
                value={userInfo.name}
                required
                minLength="2"
                maxLength="40"
            />
            <span class="popup__form-text-error nameInput-error"></span>
            <input
                id="jobInput"
                type="text"
                name="description"
                className="popup__input"
                placeholder="Профессиональная деятельность"
                value={userInfo.about}
                required
                minLength="2"
                maxLength="200"
            />
            <span class="popup__form-text-error jobInput-error"></span>
        </PopupWithForm>
    );
}

export default ProfilePopup;