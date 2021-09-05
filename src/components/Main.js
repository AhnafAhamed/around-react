function Main(props) {

  return (
    <main className="main">
      <section className="profile">
        <div className="profile__picture" onClick={props.onEditAvatarClick}>
          <img src={props.userAvatar}  alt="Jacques Cousteau" className="profile__image" />
        </div>
        <div className="profile__info">
          <h1 className="profile__title">{props.userName}</h1>
          <button
            type="button"
            className="profile__edit-button"
            aria-label="Edit Button"
            onClick={props.onEditProfileClick}
          ></button>
          <p className="profile__tag">{props.userDescription}</p>
        </div>
        <button
          type="button"
          className="profile__plus-button"
          aria-label="Plus Button"
          onClick={props.onAddPlaceClick}
        ></button>
      </section>
      <section>
        <ul className="elements"></ul>
      </section>
    </main>
  );
}

export default Main;
