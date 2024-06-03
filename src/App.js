import Home from './components/Home/Home';
import Samples from './components/Samples/Samples';
import Delivery from './components/Delivery/Delivery';
import Contact from './components/Contact/Contact';
import './App.css';

function App() {
  return (
    <div className="App">
      <Home />
      <Samples />
      <Delivery />
      <Contact />
    </div>
  );
}

export default App;
