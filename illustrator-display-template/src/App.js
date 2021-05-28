import Header from './components/Header';
import Images from './components/Images';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="pages" id="pages">
        <div className="home">
          <Images />
        </div>
        <div className="about">
          <About />
        </div>
        <div className="contact">
          <Contact />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
