import { useEffect, useState } from "react";

function Card({
  title,
  imgUrl,
  likeCount,
  handleDeleteClick,
  handleLikeClick,
}) {
  const [likes, setLikes] = useState(likeCount);
  useEffect();

  return (
    <article className="element">
      <img src={imgUrl} alt="изображение" className="element__photo" />
      <button
        type="button"
        ariaLabel="delete"
        className="element__delete-button"
        onClick={handleDeleteClick}
      ></button>
      <div className="element__group">
        <h2 className="element__title">{title}</h2>
        <div className="element__like-group">
          <button
            type="button"
            ariaLabel="like"
            className="element__like-button"
            onClick={handleLikeClick}
          ></button>
          <span className="element__like-count">{likeCount}</span>
        </div>
      </div>
    </article>
  );
}

export default Card;
