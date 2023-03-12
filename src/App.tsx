import "./App.css";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Posts from "./components/Posts";

function App() {
  return (
    <div>
      <div className="my-8 max-w-screen-lg mx-auto">Avant grad</div>
      <div className="bg-brand w-screen h-96 flex justify-center items-center">
        Some story
      </div>
      <Posts />
      <hr className="max-w-screen-lg mx-auto my-6" />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
