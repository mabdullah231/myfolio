import { useState } from 'react';
import { BrowserRouter } from 'react-router-dom'; // Import BrowserRouter
import './App.css';
import { Header,HeroSection,AboutSection } from './Components'; // Assuming you have a Header component

function App() {

  return (
    <BrowserRouter> {/* Wrap the App with BrowserRouter */}
      <Header /> {/* Now the Header can use Link from react-router-dom */}
      <HeroSection /> {/* Now the Header can use Link from react-router-dom */}
      <AboutSection /> {/* Now the Header can use Link from react-router-dom */}
    </BrowserRouter>
  );
}

export default App;
