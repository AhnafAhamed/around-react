import Card from "./Card";

function Main({
  onEditAvatarClick,
  onEditProfileClick,
  onAddPlaceClick,
  onCardClick,
  cards,
  user,
}) {
  return (
    <>
      <main className="main">
        <section className="profile">
          <div className="profile__picture" onClick={onEditAvatarClick}>
            <img
              src={user.avatar}
              alt="Jacques Cousteau"
              className="profile__image"
            />
          </div>
          <div className="profile__info">
            <h1 className="profile__title">{user.name}</h1>
            <button
              type="button"
              className="profile__edit-button"
              aria-label="Edit Button"
              onClick={onEditProfileClick}
            ></button>
            <p className="profile__tag">{user.about}</p>
          </div>
          <button
            type="button"
            className="profile__plus-button"
            aria-label="Plus Button"
            onClick={onAddPlaceClick}
          ></button>
        </section>
        <section>
          <ul className="elements">
            <>
              {cards.map((card) => (
                <Card key={card._id} card={card} onCardClick={onCardClick} />
              ))}
            </>
          </ul>
        </section>
      </main>
    </>
  );
}

export default Main;
