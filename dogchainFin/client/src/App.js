import React from 'react';
import Navbar from './Components/Navbar';
import Home from './pages/Home';

function App() {
  return (
    <div className="bg-[#0f0f0f] min-h-screen text-white font-sans">
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
