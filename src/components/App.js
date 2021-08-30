import "../index.css";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

function App() {
  return (
    <div className="body">
      <Header />
      <div className="homepage">
        <Main />
        <Footer />
      </div>
    </div>
  );
}

export default App;
