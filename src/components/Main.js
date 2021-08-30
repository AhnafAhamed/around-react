import loader from "../images/loading.gif";
import PopupWithForm from "./PopupWithForm";

function Main() {

  function handleEditAvatarClick() {
    document.querySelector(".popup_avatar").classList.add("popup_open");
  }

  function handleEditProfileClick() {
    document.querySelector(".popup_profile").classList.add("popup_open");
  }

  function handleAddPlaceClick() {
    document.querySelector(".popup_card").classList.add("popup_open");
  }

  return (
    <main className="main">
      <section className="profile">
        <div className="profile__picture" onClick={handleEditAvatarClick}>
          <img src={loader}  alt="Jacques Cousteau" className="profile__image" />
        </div>
        <div className="profile__info">
          <h1 className="profile__title">Ahnaf Ahamed </h1>
          <button
            type="button"
            className="profile__edit-button"
            aria-label="Edit Button"
            onClick={handleEditProfileClick}
          ></button>
          <p className="profile__tag">Coder </p>
        </div>
        <button
          type="button"
          className="profile__plus-button"
          aria-label="Plus Button"
          onClick={handleAddPlaceClick}
        ></button>
      </section>
      <section>
        <ul className="elements"></ul>
      </section>
      <PopupWithForm name="avatar" title="Change profile picture"/>
      <PopupWithForm name="profile" title="Edit Profile"/>
      <PopupWithForm name="card" title="New Place"/>
    </main>
  );
}

export default Main;
