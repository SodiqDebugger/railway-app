import React, { useState } from 'react';

function StationClassPage() {
    const [formData, setFormData] = useState({
        tracks: '',
        cargo: '',
        wagons: '',
        locomotiveBrigades: '',
        trainTraffic: '',
        cargoTurnover: '',
        locomotiveService: '',
        maintenanceWork: '',
        passengerTraffic: '',
        sortingWork: ''
    });

    const [result, setResult] = useState('');

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleCalculate = () => {
        // Bu yerda sizning hisoblash mantiqingiz joylashadi.
        // Hozircha, misol sifatida shart qo'yamiz
        const totalValue = Object.values(formData).reduce((sum, val) => sum + (Number(val) || 0), 0);
        
        if (totalValue > 100) {
            setResult("Hisoblangan sinf: Birinchi klass");
        } else {
            setResult("Hisoblangan sinf: Ikkinchi klass");
        }
    };

    return (
        <div className="p-4">
            <h2 className="mb-4">Stansiya Klassini Aniqalash</h2>
            <p>10 ta ko'rsatkich bo'yicha ma'lumotlarni kiriting.</p>

            <div className="row g-3">
                <div className="col-md-6">
                    <label className="form-label">Umumiy foydalaniladigan yo'llar, km</label>
                    <input type="number" className="form-control" name="tracks" value={formData.tracks} onChange={handleInputChange} />
                </div>
                <div className="col-md-6">
                    <label className="form-label">Yuk operatsiyalari hajmi</label>
                    <input type="number" className="form-control" name="cargo" value={formData.cargo} onChange={handleInputChange} />
                </div>
                <div className="col-md-6">
                    <label className="form-label">Mahalliy vagonlarning o'rtacha sutkalik soni</label>
                    <input type="number" className="form-control" name="wagons" value={formData.wagons} onChange={handleInputChange} />
                </div>
                <div className="col-md-6">
                    <label className="form-label">Lokomotiv brigadalari soni</label>
                    <input type="number" className="form-control" name="locomotiveBrigades" value={formData.locomotiveBrigades} onChange={handleInputChange} />
                </div>
                <div className="col-md-6">
                    <label className="form-label">Poyezd harakati</label>
                    <input type="number" className="form-control" name="trainTraffic" value={formData.trainTraffic} onChange={handleInputChange} />
                </div>
                <div className="col-md-6">
                    <label className="form-label">Yuk aylanmasi</label>
                    <input type="number" className="form-control" name="cargoTurnover" value={formData.cargoTurnover} onChange={handleInputChange} />
                </div>
                <div className="col-md-6">
                    <label className="form-label">Lokomotivlarga texnik xizmat ko'rsatish</label>
                    <input type="number" className="form-control" name="locomotiveService" value={formData.locomotiveService} onChange={handleInputChange} />
                </div>
                <div className="col-md-6">
                    <label className="form-label">Texnik xizmat ko'rsatish ishlari</label>
                    <input type="number" className="form-control" name="maintenanceWork" value={formData.maintenanceWork} onChange={handleInputChange} />
                </div>
                <div className="col-md-6">
                    <label className="form-label">Yo'lovchi harakati</label>
                    <input type="number" className="form-control" name="passengerTraffic" value={formData.passengerTraffic} onChange={handleInputChange} />
                </div>
                <div className="col-md-6">
                    <label className="form-label">Saralash ishlari</label>
                    <input type="number" className="form-control" name="sortingWork" value={formData.sortingWork} onChange={handleInputChange} />
                </div>
            </div>
            
            <button className="btn btn-primary mt-4" onClick={handleCalculate}>Aniqalash</button>
            
            {result && (
                <div className="mt-4 p-3 bg-light border rounded">
                    <h4>Natija:</h4>
                    <p>{result}</p>
                </div>
            )}
        </div>
    );
}

export default StationClassPage;