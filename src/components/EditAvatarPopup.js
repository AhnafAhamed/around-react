import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup(props) {
  return (
    <PopupWithForm
      name="avatar"
      title="Change Profile Picture"
      buttonText="Save"
      isOpen={props.isOpen}
      onClose={props.onClose}
    >
      <input
        id="image-link-input"
        name="avatar"
        type="url"
        className="popup__input popup__input_profile_link"
        placeholder="url"
        defaultValue=""
        minLength="2"
        maxLength="250"
        required
      />
      <span
        id="image-link-input-error"
        className="popup__input-error popup__input-error_profile-image"
      ></span>
      <span id="profile-about-input-error" className="popup__input-error"></span>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;
