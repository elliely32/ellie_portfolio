import NavigationBar from './components/NavigationBar';
import {Routes, Route} from 'react-router-dom';
import Footer from './components/Footer';
import LandingPage from './components/LandingPage';

function App() {
  return (
    <div >
      <NavigationBar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/code" element={<LandingPage />} />
        <Route path="/story" element={<LandingPage />} />
        <Route path="/art" element={<LandingPage />} />
        <Route path="/about" element={<LandingPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
