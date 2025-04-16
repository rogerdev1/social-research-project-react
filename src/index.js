import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import About from './routes/About/About';
import Contact from './routes/Contact/Contact';
import Home from './routes/Home/Home';
import Finished from './routes/Finished/Finished';

// const router = createBrowserRouter([
//   {path: '/', element: <Home />},
//   {path: 'Contact', element: <Contact />},
//   {path: 'About', element: <About />}, 
//   {path: 'Finished', element: <Finished />}
// ]);

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {path: '/', element: <Home />},
      {path: 'Contact', element: <Contact />},
      {path: 'About', element: <About />}, 
      {path: 'Finished', element: <Finished />}
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);