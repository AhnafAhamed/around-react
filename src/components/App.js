import { useEffect, useState } from "react";
import "../index.css";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import EditProfilePopup from "./EditProfilePopup";
import EditAvatarPopup from "./EditAvatarPopup";
import AddCardPopup from "./AddCardPopup";
import ImagePopup from "./ImagePopup";
import api from "../utils/Api";
import CurrentUserContext from "../contexts/CurrentUserContext";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isAddCardPopupOpen, setIsAddCardPopupOpen] = useState(false);
  const [isImagePopupOpen, setIsImagePopuOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const [cards, setCards] = useState([]);
  const [currentUser, setCurrentUser] = useState([]);

  useEffect(() => {
    api.renderUserInfo().then((data) => {
      setCurrentUser(data);
    });
  }, []);

  useEffect(() => {
    api.renderCards().then((data) => {
      setCards(data);
    });
  }, []);

  function handleCardLike(card) {
    const isLiked = card.likes.some((i) => i._id === currentUser._id);

    let likeStatus = (isLiked === false) ?  api.addLike(card._id) : api.removeLike(card._id);

    likeStatus.then((newCard) => {
      const newCards = cards.map((c) => ((c._id === card._id) ? newCard : c));
      setCards(newCards);
    })
    
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddCardPopupOpen(true);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
    setIsImagePopuOpen(true);
  }

  function closePopups() {
    setIsEditProfilePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsAddCardPopupOpen(false);
    setIsImagePopuOpen(false);
    setSelectedCard(null);
  }

  function closeAllPopups(e) {
    if (
      e.target.classList.contains("popup_open") ||
      e.target.classList.contains("popup__close-btn")
    ) {
      closePopups();
    }
  }

  function handleEscClose(evt) {
    if (evt.key === "Escape") {
      closePopups();
    }
  }

  document.addEventListener("keyup", handleEscClose);

  return (
    <>
      <CurrentUserContext.Provider value={currentUser}>
        <div className="body">
          <Header />
          <div className="homepage">
            <Main
              cards={cards}
              onCardLike={handleCardLike}
              onCardClick={handleCardClick}
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

            <AddCardPopup
              isOpen={isAddCardPopupOpen}
              onClose={closeAllPopups}
            />

            <ImagePopup
              card={selectedCard}
              isOpen={isImagePopupOpen}
              onClose={closeAllPopups}
            />
          </div>
        </div>
      </CurrentUserContext.Provider>
    </>
  );
}

export default App;
