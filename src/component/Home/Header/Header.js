import React from "react";
import HeaderMain from "../HeaderMain/HeaderMain";
import Navbar from "../Navbar/Navbar";
import "./Header.css";
import Services from "../Services/Services";
import WorksCarousel from "../WorksCarousel/WorksCarousel";
import ClientFeedback from "../ClientFeedback/ClientFeedback";
import ContactUs from "../ContactUs/ContactUs";
import Footer from "../Footer/Footer";
import GymTrainer from "../../GymTriner/GymTrainer";

const Header = () => {
  document.title = "Fitness Center";
  return (
    <main>
      <div className="header-container container">
        <Navbar></Navbar>
        <HeaderMain></HeaderMain>
        <Services />
        <WorksCarousel />
        <GymTrainer />
        <ClientFeedback />
        <ContactUs />
        <Footer />
      </div>
    </main>
  );
};

export default Header;
