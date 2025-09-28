import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';

// Sahifa komponentlarini import qilamiz
import HomePage from './pages/HomePage';
import StationPage from './pages/StationPage';
import WagonPage from './pages/WagonPage';
import ContainerPage from './pages/ContainerPage';
import LoadCodePage from './pages/LoadCodePage';
import StationClassPage from './pages/StationClassPage';

function App() {
  return (
    <Router>
      <div className="d-flex">
        <Sidebar />
        
        <div className="container-fluid p-4">
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/station" element={<StationPage />} />
                <Route path="/wagon" element={<WagonPage />} />
                <Route path="/container" element={<ContainerPage />} />
                <Route path="/loadcode" element={<LoadCodePage />} />
                <Route path="/stationclass" element={<StationClassPage />} />
            </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;