function Card({ onCardClick, card }) {
  function handleClick() {
    onCardClick(card);
  }
  return (
    <>
      <li className="elements__card">
        <img
          onClick={handleClick}
          src={card.link}
          alt={card.name}
          className="elements__image"
        />
        <div className="elements__info">
          <h2 className="elements__title">{card.name}</h2>
          <div className="elements__likes">
            <button
              type="button"
              className="elements__heart-icon"
              aria-label="Heart Button"
            ></button>
            <span className="elements__like-counter">{card.likes.length}</span>
          </div>
        </div>
        <button
          className="elements__delete-icon"
          type="button"
          aria-label="Delete Button"
        ></button>
      </li>
    </>
  );
}

export default Card;
