import Card from "./Card";
import Profile from "./Profile";

function Main({ cards, userInfo, ...props }) {
  //console.log('Main');
  return (
    <main className="main">
      <Profile userInfo={userInfo} {...props} />
      <section className="elements">
        {cards.map((card) => (
          <Card key={card._id} card={card} userInfo={userInfo} {...props} />
        ))}
      </section>
    </main>
  );
}

export default Main;
