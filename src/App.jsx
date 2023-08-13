import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MainPage from "./components/MainPage";

function App() {
  return (
    <div className="App fade-in font-sans">
      <Header />
      <MainPage />
      <Footer />
    </div>
  );
}

export default App;
