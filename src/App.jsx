import Carousel from "./components/Carousel";
import "./App.css";
import Navbar from "./components/Navbar";
import Carouselsec from "./components/Carouselsec";
import Card from "./components/Card";
import Carouselthree from "./components/Carouselthree";
import Carouselfour from "./components/Carouselfour";
import Footer from "./components/Footer";
import Cardtwo from "./components/Cardtwo";

function App() {
  return (
    <div>
      <Navbar />
      <Carousel />
      <Carouselsec />
      <Card />
      <Carouselthree />
      <Carouselfour />
      <Cardtwo/>
      <Footer/>
    </div>
  );
}
export default App;
