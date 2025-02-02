
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import About from "./About";
import Banner from "./Banner";
import Brands from "./Brands";
import Philosopy from "./Philosopy";
import Slider from "./Slider";

const Home = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <About />
      <Philosopy />
      <Slider />
      <Brands />
      <Footer />
    </>
  );
};

export default Home;

//   <img
//           className="absolute top-43 left-103 z-10 rotate-90"
//           src={line1}
//           alt=""
//         />
//         <img
//           className="absolute bottom-24 right-75  rotate-270"
//           src={line2}
//           alt=""
//         />
//         <img
//           className="absolute top-24 right-75 rotate-270"
//           src={line3}
//           alt=""
//         />
//         <img
//           className="absolute top-54 right-36 rotate-270"
//           src={line4}
//           alt=""
//         />
//         <img
//           className="absolute top-45 left-66 rotate-270"
//           src={bridge}
//           alt=""
//         />
