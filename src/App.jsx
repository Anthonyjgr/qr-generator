import React, { useState } from 'react';
import { QRCodeCanvas } from 'qrcode.react';
import './App.css';

function App() {
  const [link, setLink] = useState('');
  const [qrCodeData, setQrCodeData] = useState('');

  // Función para manejar el cambio en el input
  const handleLinkChange = (e) => {
    setLink(e.target.value);
  };

  // Función para manejar la generación del código QR
  const generateQRCode = () => {
    if (link) {
      setQrCodeData(link);
    }
  };

  // Función para descargar el código QR en formato PNG
  const downloadQRCode = () => {
    const canvas = document.getElementById('qr-canvas');
    const dataUrl = canvas.toDataURL('image/png');
    const a = document.createElement('a');
    a.href = dataUrl;
    a.download = 'qr-code.png';
    a.click();
  };

  return (
    <div className="App">
      <h1>Generador de QR Code</h1>
      <input
        type="text"
        placeholder="Ingresa un enlace"
        value={link}
        onChange={handleLinkChange}
        className="input"
      />
      <button onClick={generateQRCode} className="generate-btn">
        Generar QR
      </button>

      {qrCodeData && (
        <div className="qr-container">
          <QRCodeCanvas
            id="qr-canvas"
            value={qrCodeData}
            size={512}
            level="H"
            includeMargin={true}
          />
          <button onClick={downloadQRCode} className="download-btn">
            Descargar QR
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
