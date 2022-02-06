import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";
import "../index.css";

function App() {
  return (
    <div class="page">
      <div class="page__container">
        <Header />
        <Main />
        <Footer />
      </div>
      <template id="element">
        <article class="element">
          <img src="#" alt="изображение" class="element__photo" />
          <button
            type="button"
            aria-label="delete"
            class="element__delete-button"
          ></button>
          <div class="element__group">
            <h2 class="element__title"> </h2>
            <div class="element__like-group">
              <button
                type="button"
                aria-label="like"
                class="element__like-button"
              ></button>
              <span class="element__like-count">0</span>
            </div>
          </div>
        </article>
      </template>
    </div>
  );
}

export default App;
