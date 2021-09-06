import PopupWithForm from "./PopupWithForm";

function EditProfilePopup(props) {
  return (
    <>
      <PopupWithForm
        name="profile"
        title="Edit Profile"
        buttonText="Save"
        isOpen={props.isOpen}
        onClose={props.onClose}
      >
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
        <input
          id="profile-about-input"
          name="about"
          type="text"
          className="popup__input popup__input_value_about"
          placeholder="About Me"
          defaultValue=""
          minLength="2"
          maxLength="200"
          required
        />
        <span
          id="profile-about-input-error"
          className="popup__input-error"
        ></span>
      </PopupWithForm>
    </>
  );
}

export default EditProfilePopup;
