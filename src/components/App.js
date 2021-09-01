import "../index.css";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import EditProfilePopup from "./EditProfilePopup";
import React from "react";
import EditAvatarPopup from "./EditAvatarPopup";
import AddCardPopup from "./AddCardPopup";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isAddCardPopupOpen, setIsAddCardPopupOpen] = React.useState(false);
  
  document.addEventListener('keyup', handleEscClose);

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddCardPopupOpen(true);
  }

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsAddCardPopupOpen(false);
  }

  function handleEscClose(evt) {
    if(evt.key === "Escape") {
      closeAllPopups();
    }
  }
  return (
    <>
    <div className="body">
      <Header />
      <div className="homepage">
        <Main onEditProfileClick={handleEditProfileClick} onEditAvatarClick={handleEditAvatarClick} onAddPlaceClick={handleAddPlaceClick}/>
        <Footer />
        <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups}/>
        <EditAvatarPopup isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups}/>
        <AddCardPopup isOpen={isAddCardPopupOpen} onClose={closeAllPopups}/>
      </div>
    </div>
    </>
  );
}

export default App;
