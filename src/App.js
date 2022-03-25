import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Shop from "./components/Shop/Shop";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div>
      <h1 className="title-name">Time Access</h1>
      <Shop />
      <Footer />
    </div>
  );
}

export default App;
