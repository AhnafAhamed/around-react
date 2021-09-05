import { useEffect, useState } from "react";
import "../index.css";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import EditProfilePopup from "./EditProfilePopup";
import EditAvatarPopup from "./EditAvatarPopup";
import AddCardPopup from "./AddCardPopup";
import initialProileInfo from "../utils/Api";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isAddCardPopupOpen, setIsAddCardPopupOpen] = useState(false);

  const [profileInfo, setProfileInfo] = useState([]);

  useEffect(() => {
    initialProileInfo.then((data) => {
      setProfileInfo({
        name: data.name,
        about: data.about,
        avatar: data.avatar,
      });
    });
  }, [profileInfo]);

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
    if (evt.key === "Escape") {
      closeAllPopups();
    }
  }

  document.addEventListener("keyup", handleEscClose);

  return (
    <>
      <div className="body">
        <Header />
        <div className="homepage">
          <Main
            userAvatar={profileInfo.avatar}
            userName={profileInfo.name}
            userDescription={profileInfo.about}
            onEditProfileClick={handleEditProfileClick}
            onEditAvatarClick={handleEditAvatarClick}
            onAddPlaceClick={handleAddPlaceClick}
          />

          <Footer />
          <EditProfilePopup
            isOpen={isEditProfilePopupOpen}
            onClose={closeAllPopups}
          />
          <EditAvatarPopup
            isOpen={isEditAvatarPopupOpen}
            onClose={closeAllPopups}
          />
          <AddCardPopup isOpen={isAddCardPopupOpen} onClose={closeAllPopups} />
        </div>
      </div>
    </>
  );
}

export default App;
// userAvatar={} userName={} userDescription={}
