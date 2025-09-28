import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap-icons/font/bootstrap-icons.css';

function Sidebar() {
    return (
        <div className="d-flex flex-column p-3 text-white bg-dark" style={{ width: '280px', height: '100vh' }}>
            <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                <span className="fs-4">TSTU</span>
            </a>
            <hr />
            <ul className="nav nav-pills flex-column mb-auto">
                <li className="nav-item">
                    <Link to="/" className="nav-link text-white" aria-current="page">
                        <i className="bi bi-house me-2"></i>
                        Bosh sahifa
                    </Link>
                </li>
                <li>
                    <Link to="/station" className="nav-link text-white">
                        <i className="bi bi-building me-2"></i>
                        Stansiya
                    </Link>
                </li>
                <li>
                    <Link to="/wagon" className="nav-link text-white">
                        <i className="bi bi-truck me-2"></i>
                        Vagon
                    </Link>
                </li>
                <li>
                    <Link to="/container" className="nav-link text-white">
                        <i className="bi bi-box me-2"></i>
                        Konteyner
                    </Link>
                </li>
                <li>
                    <Link to="/loadcode" className="nav-link text-white">
                        <i className="bi bi-book me-2"></i>
                        Yuk kodi
                    </Link>
                </li>
                <li>
                    <Link to="/stationclass" className="nav-link text-white">
                        <i className="bi bi-bar-chart me-2"></i>
                        Stansiya klassi
                    </Link>
                </li>
            </ul>
        </div>
    );
}

export default Sidebar;