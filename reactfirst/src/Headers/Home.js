// import React from 'react'
// import HeroSection from './components/HeroSection';

// const Home = () => {
//   return (
//     <HeroSection/>
//   )
// };

// export default Home;
import FeatureProduct from "../components/FeatureProduct";
//import HeroSection from "./components/HeroSection";
import Services from "../components/Services";
import Truested from "../components/Truested";
import { Button } from "../styles/Button";
import { NavLink } from "react-router-dom";

const Home = () => {
  // const data = {
  //   name: "Jamia Stationery is your one-stop destination for all your stationery needs. Located conveniently near Jamia Masjid Akhyar Pur Jakyas, we offer a wide range of stationery products to cater to students, professionals, and anyone in need of high-quality stationery supplies. From notebooks and pens to art supplies and office essentials, we have it all. Our friendly staff is here to assist you in finding the perfect stationery items to meet your requirements. Visit us today for a delightful stationery shopping experience",
  // };

  return (
    <>
      <div className="home-container">
        <div className="welcome-section">
          <h1 className="animated-heart">Welcome to Our Creative Hub!</h1>
          <br />
          <br />
          <p>Unleash Your Imagination in the World of Web Design</p>
        </div>

        <div className="about-section">
          <h3 style={{ textAlign: "center" }}>About Our Platform</h3>
          <p>
            Jamia Stationery is your one-stop destination for all your
            stationery needs. Located conveniently near Jamia Masjid Akhyar Pur
            Jakyas, we offer a wide range of stationery products to cater to
            students, professionals, and anyone in need of high-quality
            stationery supplies. From notebooks and pens to art supplies and
            office essentials, we have it all. Our friendly staff is here to
            assist you in finding the perfect stationery items to meet your
            requirements. Visit us today for a delightful stationery shopping
            experience
          </p>
        </div>
        <div className="centered-container">
          <br />
          <NavLink to="/products">
            <Button> Started</Button>
          </NavLink>
        </div>
      </div>
      {/* <HeroSection myData={data} /> */}
      <FeatureProduct />
      <Services />
      <Truested />
    </>
  );
};

export default Home;
