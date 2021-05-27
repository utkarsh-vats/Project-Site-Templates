import React from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Subscribe from './components/Subscribe';
import Footer from './components/Footer';
import './App.css';
import bgVideo from "./media/videos/bg.mp4";

function App() {
  return (
    <div className="App">
      <video autoPlay muted loop className="bg-image">
        <source src={bgVideo} type="video/mp4" />
      </video>
      <Navbar />
      <Header />
      <Subscribe />
      <Footer />
    </div>
  );
}

export default App;
