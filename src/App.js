import Homepage from './pages/Homepage';
import Register from './pages/Register';
import Contact from './pages/Contact'
import Nav from './components/Nav';

import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <div>
        <Nav />
      </div>

      <Routes>

        <Route path="/" element={<Homepage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/register" element={<Register />} />

      </Routes>
    </div>
  );
}

export default App;
