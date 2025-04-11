import React from 'react';
import ReactDOM from 'react-dom/client'; // Import the correct module
import App from './App';
import './index.css'; // Optional for global styles

// Create a root and render the App component
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);