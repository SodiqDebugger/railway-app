import React, { useState } from 'react';
import { calculateContainerCheckDigit } from '../utils/calculators';

function ContainerPage() {
  const [containerNumber, setContainerNumber] = useState('');
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');

  const handleCalculate = () => {
    if (containerNumber.length !== 10) {
      setError('Konteyner raqami 10 ta belgi (4 harf va 6 raqam)dan iborat bo‘lishi kerak.');
      setResult(null);
      return;
    }
    setError('');

    const checkDigit = calculateContainerCheckDigit(containerNumber);

    setResult({
      input: containerNumber,
      calculated: checkDigit
    });
  };

  return (
    <div className="p-4">
      <h2 className="mb-4">Konteyner Nazorat Raqamini Hisoblash</h2>
      <p>Konteyner raqamining 10 ta belgisini kiriting, dastur nazorat raqamini hisoblab beradi.</p>

      <div className="mb-3">
        <label htmlFor="containerInput" className="form-label">Konteyner raqami (10 ta belgi):</label>
        <div className="input-group">
          <input
            type="text"
            className="form-control"
            id="containerInput"
            value={containerNumber}
            onChange={(e) => setContainerNumber(e.target.value.toUpperCase())}
            maxLength="10"
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

export default ContainerPage;