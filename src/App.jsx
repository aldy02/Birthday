import './index.css';
import Home from './pages/Home';
import Letter from './pages/Letter';
import Login from './pages/Login';
import Video from './pages/Video';
import { Routes, Route } from 'react-router-dom'


function App() {
  return (
    <div className='App'>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/letter" element={<Letter />} />
          <Route path="/video" element={<Video />} />
        </Routes>
    </div>
  );
}

export default App;
