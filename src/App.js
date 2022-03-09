
import InfoArea from './components/infoAfrea/InfoArea';
import Hero from './components/hero/Hero';
import './App.css';

function App() {
  return (
    <div>
      <div className="container">
          <InfoArea />
          <Hero />
      </div>
        <footer>
          <p class="attribution">
            Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
            Coded by <a href="#">Your Name Here</a>.
          </p>
        </footer>

    </div>

  );
}

export default App;
