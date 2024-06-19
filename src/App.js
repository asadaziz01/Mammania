import Home from './components/Home/Home';
import Samples from './components/Samples/Samples';
import Delivery from './components/Delivery/Delivery';
import Contact from './components/Contact/Contact';
import Menu from './components/Menu/Menu';
import NotFoundErrorPage from './components/NotFoundErrorPage/NotFoundErrorPage';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
    <Router>
      <Routes>
        <Route path="/" element={<><Home /><Samples /><Delivery /><Contact /></>} />
        <Route path="/menu" element={<><Menu /></>} />
        <Route path="*" element={<NotFoundErrorPage />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
