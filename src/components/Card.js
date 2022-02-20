function Card({ card, handleDeleteClick, handleLikeClick, handleImageClick }) {
  const isOwner = false; //card.owner._id === userInfo._id;
  const canLike = false; //card.likes.some((like) => like._id === userInfo._id);

  return (
    <article className="element">
      <img
        src={card.link}
        alt="изображение"
        className="element__photo"
        onClick={handleImageClick}
      />
      <button
        type="button"
        aria-label="delete"
        className="element__delete-button"
        onClick={handleDeleteClick}
        style={{ display: isOwner ? "block" : "none" }}
      ></button>
      <div className="element__group">
        <h2 className="element__title">{card.name}</h2>
        <div className="element__like-group">
          <button
            type="button"
            aria-label="like"
            className={
              "element__like-button " +
              (canLike && "element__like-button_active")
            }
            onClick={handleLikeClick}
          ></button>
          <span className="element__like-count">{card.likes.length}</span>
        </div>
      </div>
    </article>
  );
}

export default Card;
