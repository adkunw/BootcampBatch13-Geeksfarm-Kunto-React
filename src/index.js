// Import library React
import React from "react";
import ReactDOM from "react-dom/client";

// Import Redux
import { createStore } from "redux";
import { Provider } from "react-redux";

// Import reducer utama
import reducer from "./reducer";

// Import komponen utama aplikasi
import App from "./App";

// Import fungsi untuk melaporkan performa aplikasi (opsional)
import reportWebVitals from "./reportWebVitals";

// Buat store Redux
const store = createStore(reducer);

// Cari elemen dengan id 'root' dari file index.html
const rootElement = document.getElementById("root");

// Buat root React untuk aplikasi menggunakan React 18's createRoot API
const root = ReactDOM.createRoot(rootElement);

// Render aplikasi ke dalam root yang sudah dibuat
root.render(
  <React.StrictMode>
    {/* Hubungkan Redux dengan aplikasi menggunakan Provider */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// Menjalankan reportWebVitals untuk memonitor performa aplikasi
reportWebVitals();
