import Card from "./Card";
import Profile from "./Profile";
import { api } from "../utils/Api";
import { useEffect, useState } from "react";

function Main(props) {
  const [cards, setCards] = useState([]);
  const [userInfo, setUserInfo] = useState({ name: "none", about: "none", avatar:"none" });

  useEffect(() => {
    api
      .getInitialCards()
      .then((data) => setCards(data))
      .catch((err) => console.log(err));

    console.log("getInitialCards");
  }, []);

  useEffect(() => {
    api
      .getUserInfo()
      .then((data) => setUserInfo(data))
      .catch((err) => console.log(err));

    console.log("getUserInfo");
  }, []);

  return (
    <main className="main">
      <Profile
        userInfo={userInfo}
        handleAvatarClick={props.onEditAvatar}
        handleProfileClick={props.onEditProfile}
        handleAddCardClick={props.onAddCard}
      />
      <section className="elements">
        {cards.map((card) => (
          <Card
            key={card._id}
            card={card}
            userInfo={userInfo}
            onPreview={props.onPreview}
          />
        ))}
      </section>
    </main>
  );
}

export default Main;
