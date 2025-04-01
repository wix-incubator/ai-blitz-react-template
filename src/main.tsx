import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
// import Page from './page/Page.tsx';
import App from './Sandpack.tsx';
import './index.css';

/*
 * This in the main entry point to our project
 * The best practice is to define global context here
 */
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
