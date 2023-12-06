import NavigationBar from './components/NavigationBar';
import {Routes, Route} from 'react-router-dom';
import Footer from './components/Footer';
import LandingPage from './components/LandingPage';
import Code from './components/Code';
import About from './components/About';
import Story from './components/Story';
import Art from './components/Art';

function App() {
  return (
    <div>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/code" element={<Code />} />
        <Route path="/story" element={<Story />} />
        <Route path="/art" element={<Art />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
