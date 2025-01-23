import React, { useState } from "react";
import { QRCodeCanvas } from "qrcode.react";
import "./App.css";

function App() {
  const [link, setLink] = useState("");
  const [qrCodeData, setQrCodeData] = useState("");

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
    const canvas = document.getElementById("qr-canvas");
    const dataUrl = canvas.toDataURL("image/png");
    const a = document.createElement("a");
    a.href = dataUrl;
    a.download = "qr-code.png";
    a.click();
  };

  return (
    <div className="App">
      <h1 className="title">QR-Code Generator</h1>
      <input
        type="text"
        placeholder="Put your link here"
        value={link}
        onChange={handleLinkChange}
        className="input"
      />

      <button type="button" class="button" onClick={generateQRCode}>
        <span class="fold"></span>

        <div class="points_wrapper">
          <i class="point"></i>
          <i class="point"></i>
          <i class="point"></i>
          <i class="point"></i>
          <i class="point"></i>
          <i class="point"></i>
          <i class="point"></i>
          <i class="point"></i>
          <i class="point"></i>
          <i class="point"></i>
        </div>

        <span class="inner">
          <svg
            class="icon"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2.5"
          >
            <polyline points="13.18 1.37 13.18 9.64 21.45 9.64 10.82 22.63 10.82 14.36 2.55 14.36 13.18 1.37"></polyline>
          </svg>
          Generate QR
        </span>
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

          <button
            type="button"
            className="button"
            onClick={downloadQRCode}
            style={{ marginTop: "30px" }}
          >
            <span class="fold"></span>

            <div class="points_wrapper">
              <i class="point"></i>
              <i class="point"></i>
              <i class="point"></i>
              <i class="point"></i>
              <i class="point"></i>
              <i class="point"></i>
              <i class="point"></i>
              <i class="point"></i>
              <i class="point"></i>
              <i class="point"></i>
            </div>

            <span class="inner">
              <svg
                class="icon"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2.5"
              >
                <polyline points="13.18 1.37 13.18 9.64 21.45 9.64 10.82 22.63 10.82 14.36 2.55 14.36 13.18 1.37"></polyline>
              </svg>{" "}
              Download QR
            </span>
          </button>
        </div>
      )}
      <a
        className="link"
        target="blank"
        href="https://www.linkedin.com/in/anthony-guzman-840449135/"
      >
        Let´s connect!
      </a>
    </div>
  );
}

export default App;
