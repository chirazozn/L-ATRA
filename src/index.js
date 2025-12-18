import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Clear any existing content in root (safety measure)
const rootElement = document.getElementById('root');
if (rootElement) {
  rootElement.innerHTML = ''; // Clear any existing content
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} else {
  console.error('CRITICAL: No root element found!');
  // Create it dynamically as last resort
  const newRoot = document.createElement('div');
  newRoot.id = 'root';
  document.body.appendChild(newRoot);
  const root = ReactDOM.createRoot(newRoot);
  root.render(<App />);
}