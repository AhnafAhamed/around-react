function PopupWithForm(props) {
  return (
    <div className={`popup popup_${props.name}`}>
      <div className="popup__container">
        <form
          action="POST"
          className={`popup__form popup__form_${props.name}`}
          name={`${props.name}`}
        >
          <h3 className={`popup__title popup__title_${props.name}`}>
            {props.title}
          </h3>
          <input
            id="profile-title-input"
            name="name"
            type="text"
            className="popup__input popup__input_value_name"
            placeholder="Name"
            defaultValue=""
            minLength="2"
            maxLength="40"
            required
          />
          <span
            id="profile-title-input-error"
            className="popup__input-error"
          ></span>
          <button type="submit" className="popup__btn" aria-label="Save Button">
            Save
          </button>
        </form>
        <button
          type="button"
          className="popup__close-btn"
          aria-label="Close Button"
        ></button>
      </div>
    </div>
  );
}

export default PopupWithForm;
