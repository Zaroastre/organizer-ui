import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import French from './lang/fr.json';
import English from './lang/en.json';
import { IntlProvider } from 'react-intl';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const LOCALE = navigator.language;
let lang = English;
if (LOCALE==="fr") {
  lang = French;
}


root.render(
  <React.StrictMode>
    <IntlProvider locale={LOCALE} messages={lang}>
      <App />

    </IntlProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
