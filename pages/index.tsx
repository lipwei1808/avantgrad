import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Posts from "./components/Posts";
import Banner from "./components/Banner";

import "swiper/css";
const items = {
  1: "Moon-shaped banner",
  2: "Temple Banner",
  3: "Ketupat Banner 1",
  4: "Ketupat Banner 2",
  5: "Ketupat Banner 3",
  6: "Flower Banner",
  7: "Selamat Hari Raya Banner",
  8: "Ketupat (Light Green)",
  9: "Ketupat (Blue)",
  10: "Ketupat (Red)",
  11: "Ketupat (Green)",
  12: "Ketupat (Pink)",
  13: "Basket (Red)",
  14: "Basket (Brown)",
  15: "Basket (White)",
};

function Index() {
  return (
    <div>
      <div className="my-8 max-w-screen-lg mx-auto">Avant grad</div>
      <Banner />
      <Posts items={items} />
      <hr className="max-w-screen-lg mx-auto my-6" />
      <Contact items={items} />
      <Footer />
    </div>
  );
}

export default Index;
