// Import library React untuk dapat menggunakan fitur React
import React from "react";

// Import ReactDOM yang bertanggung jawab untuk merender aplikasi ke dalam DOM
import ReactDOM from "react-dom/client";

// Import fungsi untuk melaporkan performa aplikasi (opsional)
import reportWebVitals from "./reportWebVitals";

// Import komponen utama aplikasi, yaitu App
import App from "./App";

// Cari elemen dengan id 'root' dari file index.html
const rootElement = document.getElementById("root");

// Buat root React untuk aplikasi menggunakan React 18's createRoot API
const root = ReactDOM.createRoot(rootElement);

// Render aplikasi ke dalam root yang sudah dibuat
root.render(
  // React.StrictMode membantu dalam mendeteksi potensi masalah dalam kode
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Menjalankan reportWebVitals untuk memonitor performa aplikasi
reportWebVitals();
