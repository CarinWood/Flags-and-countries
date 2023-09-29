import './App.css';
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import GamePage from './pages/GamePage';

function App() {
  return (
    <div className="App">
        <Navbar/>

      <Routes>
  
        <Route path="game" element={<GamePage/>} />
      </Routes>
      

    </div>
  );
}

export default App;
