import Card from "./Card";
import Profile from "./Profile";

function Main({ cards, userInfo, handlers }) {
  return (
    <main className="main">
      <Profile userInfo={userInfo} profileHandlers={handlers.profileHandlers} />
      <section className="elements">
        {
          cards.map((card) => <Card key={card._id} card={card} userInfo={userInfo} cardHandlers={handlers.cardHandlers} />)
        }
      </section>
    </main>
  );
}

export default Main;
