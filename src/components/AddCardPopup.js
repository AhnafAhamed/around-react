import PopupWithForm from "./PopupWithForm";

function AddCardPopup(props) {
  return (
    <PopupWithForm
      name="card"
      title="New Place"
      buttonText="Save"
      isOpen={props.isOpen}
      onClose={props.onClose}
    >
      <input
        id="card-title-input"
        name="name"
        type="text"
        className="popup__input popup__input_place_name"
        placeholder="Name"
        defaultValue=""
        minLength="2"
        maxLength="250"
        required
      />
      <span id="card-title-input-error" className="popup__input-error"></span>
      <input
        id="card-link-input"
        name="link"
        type="url"
        className="popup__input popup__input_place_image-url"
        placeholder="Image URL"
        defaultValue=""
        minLength="2"
        maxLength="250"
        required
      />
      <span id="card-link-input-error" className="popup__input-error"></span>
    </PopupWithForm>
  );
}

export default AddCardPopup;
