// import React from "react";
import {
  ArrowLeft,
  ArrowRight,
  Logo,
  PatternApps,
  PatternGraphicDesign,
  PatternIllustrations,
  PatternMotionGraphics,
  PatternPhotography,
  PatternUI,
  ImageAmy,
} from "./assets";
import Header from "./components/Header";
import { PrimaryButton, SecondaryButton } from "./components/Button";
import ImageSwiper from "./components/ImageSwiper";
import Title from "./components/Title";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import About from "./components/About";

const App = () => {
  return (
    <main className="flex flex-col justify-center items-center py-2 px-2 md:px-10 [&>*]:mb-4 md:[&>*]:mb-10">
      <Header />
      <Title />
      <Skills />
      <About />
      <ImageSwiper />
      <Contact />
      <Footer />
    </main>
  );
};

export default App;
