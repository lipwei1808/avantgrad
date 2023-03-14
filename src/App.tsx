import "./App.css";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Posts from "./components/Posts";
import Banner from "./components/Banner";

import "swiper/css";

function App() {
  return (
    <div>
      <div className="my-8 max-w-screen-lg mx-auto">Avant grad</div>
      <Banner />
      <Posts />
      <hr className="max-w-screen-lg mx-auto my-6" />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
