import { useState } from 'react';
import { BrowserRouter } from 'react-router-dom'; // Import BrowserRouter
import './App.css';
import { Header,HeroSection,AboutSection,WorkSection,ContactSection,Footer } from './Components'; // Assuming you have a Header component

function App() {

  return (
    <BrowserRouter>
      <Header />
      <HeroSection />
      <AboutSection />
      <WorkSection />
      <ContactSection/>
      <Footer/>
      
    </BrowserRouter>
  );
}

export default App;
