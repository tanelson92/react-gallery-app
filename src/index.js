import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import NotFound from './components/NotFoundPage';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementsByClassName('container')[0]);
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route exact path="/" element={ <App /> } />
        <Route path="cats" element={ <App query={'cats'}/> } />
        <Route path="dogs" element={ <App query={'dogs'}/> } />
        <Route path="monkeys" element={ <App query={'monkeys'}/> } />
        <Route path="search" element={ <App /> }>
          <Route path=":query" element={ <App /> } />
        </Route>
        <Route path="*" element={ <NotFound /> } />
      </Routes>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
