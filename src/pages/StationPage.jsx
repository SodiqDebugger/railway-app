import React, { useState } from 'react';
import { stationsData } from '../data/stations';

function StationPage() {
    const [searchTerm, setSearchTerm] = useState('');
    
    const filteredStation = stationsData.filter(item => 
        String(item.code).includes(searchTerm) || item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="p-4">
            <h2 className="mb-4">Stansiyalar</h2>
            <p>Stansiya nomini yoki kodini kiriting.</p>
            
            <div className="mb-4">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Stansiya nomini yoki kodini kiriting..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>
            
            {filteredStation.length > 0 ? (
                <div className="table-responsive">
                    <table className="table table-striped table-bordered">
                        <thead className="table-dark">
                            <tr>
                                <th>Kod</th>
                                <th>Nomi</th>
                                <th>Turi</th>
                                <th>Klassi</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredStation.map(station => (
                                <tr key={station.code}>
                                    <td>{station.code}</td>
                                    <td>{station.name}</td>
                                    <td>{station.type}</td>
                                    <td>{station.class}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            ) : (
                <div className="alert alert-warning">
                    Stansiya topilmadi.
                </div>
            )}
        </div>
    );
}

export default StationPage;