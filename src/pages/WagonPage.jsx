import React, { useState } from 'react';
import { calculateWagonCheckDigit } from '../utils/calculators';

function WagonPage() {
  const [wagonNumber, setWagonNumber] = useState('');
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');

  const handleCalculate = () => {
    if (wagonNumber.length !== 7 || !/^\d+$/.test(wagonNumber)) {
      setError('Vagon raqami 7 ta raqamdan iborat bo‘lishi kerak.');
      setResult(null);
      return;
    }
    setError('');
    
    // Nazorat sonini hisoblash funksiyasini chaqiramiz
    const checkDigit = calculateWagonCheckDigit(wagonNumber);
    
    setResult({
      input: wagonNumber,
      calculated: checkDigit
    });
  };

  return (
    <div className="p-4">
      <h2 className="mb-4">Vagon Nazorat Raqamini Hisoblash</h2>
      <p>Vagon raqamining birinchi 7 ta raqamini kiriting, dastur nazorat raqamini hisoblab beradi.</p>
      
      <div className="mb-3">
        <label htmlFor="wagonInput" className="form-label">Vagon raqami (7 ta raqam):</label>
        <div className="input-group">
          <input
            type="text"
            className="form-control"
            id="wagonInput"
            value={wagonNumber}
            onChange={(e) => setWagonNumber(e.target.value)}
            maxLength="7"
          />
          <button className="btn btn-primary" onClick={handleCalculate}>Hisoblash</button>
        </div>
        {error && <div className="text-danger mt-2">{error}</div>}
      </div>
      
      {result && (
        <div className="mt-4 p-3 bg-light border rounded">
          <h4>Natija:</h4>
          <p><strong>Kiritilgan raqam:</strong> {result.input}{result.calculated}</p>
          <p><strong>Nazorat raqami:</strong> {result.calculated}</p>
        </div>
      )}
    </div>
  );
}

export default WagonPage;