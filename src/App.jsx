import { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import OurService from "./components/OurService";
import Hero from "./components/Hero";


const App = () => {
  return (
    <>
      <div>
        <Header />
        <Hero />
        <OurService />
       
        <Footer />{" "}
      </div>
    </>
  );
};
export default App;
