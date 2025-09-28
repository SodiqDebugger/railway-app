import React, { useState } from 'react';
import { loadCodesData } from '../data/loadCodes';

function LoadCodePage() {
    const [searchTerm, setSearchTerm] = useState('');

    // Qidiruv so'ziga mos keladigan ma'lumotlarni filtrlash
    const filteredData = loadCodesData.filter(item => 
        String(item.code).includes(searchTerm)
    );

    return (
        <div className="p-4">
            <h2 className="mb-4">Yuk Kodlari</h2>
            <p>Yuk kodini kiriting va ma'lumotlarini toping.</p>

            <div className="mb-4">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Yuk kodini kiriting..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>

            <div className="table-responsive">
                <table className="table table-striped table-bordered">
                    <thead className="table-dark">
                        <tr>
                            <th>Kod</th>
                            <th>Nomi</th>
                            <th>Xavfsizlik</th>
                            <th>Xavfli</th>
                            <th>Sinfi</th>
                            <th>MVN</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredData.length > 0 ? (
                            filteredData.map(item => (
                                <tr key={item.code}>
                                    <td>{item.code}</td>
                                    <td>{item.name}</td>
                                    <td>{item.security}</td>
                                    <td>{item.dangerous}</td>
                                    <td>{item.class}</td>
                                    <td>{item.MVN}</td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="6" className="text-center">Ma'lumot topilmadi.</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default LoadCodePage;