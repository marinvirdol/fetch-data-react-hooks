import React from 'react';
import { Routes } from './routes';
import { Link, BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <ul>
        <li>
          <Link to="/">Simple Data Fetching</Link>
        </li>
        <li>
          <Link to="/trigger-hooks-programmatically">Trigger Hooks Programmatically</Link>
        </li>
        <li>
          <Link to="/custom-data-fetching-hook">Custom Data Fetching Hook</Link>
        </li>
        <li>
          <Link to="/reducer-hook-data-fetching">Reducer Hook Data Fetching</Link>
        </li>
      </ul>
      <Routes />
    </BrowserRouter>
  )
}

export default App;
