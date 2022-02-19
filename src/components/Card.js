function Card({
  card,
  userInfo,
  cardHandlers
}) {
  const isOwner = card.owner._id === userInfo._id;
  const canLike = card.likes.some((like) => like._id === userInfo._id);

  return (
    <article className="element">
      <img src={card.link} alt="изображение" className="element__photo" />
      <button
        type="button"
        aria-label="delete"
        className="element__delete-button"
        onClick={cardHandlers.handleDeleteClick}
        style={{ display: isOwner ? 'block' : 'none' }}
      ></button>
      <div className="element__group">
        <h2 className="element__title">{card.name}</h2>
        <div className="element__like-group">
          <button
            type="button"
            aria-label="like"
            className={"element__like-button " + (canLike ? 'element__like-button_active' : '')}
            onClick={cardHandlers.handleLikeClick}
          ></button>
          <span className="element__like-count">{card.likes.length}</span>
        </div>
      </div>
    </article>
  );
}

export default Card;
