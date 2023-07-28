import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header.js";
import MainPage from "./components/MainPage";

function App() {
  return (
    <div className="App font-sans">
      <Header />
      <MainPage />
      <Footer />
    </div>
  );
}

export default App;
