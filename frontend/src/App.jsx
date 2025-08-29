


import { createBrowserRouter, RouterProvider } from 'react-router';
import Home from './pages/Home';
import About from './pages/About';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import NavBar from './pages/NavBar';
import './App.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <><NavBar /><Home /></>,
  },
  {
    path: '/about',
    element: <><NavBar /><About /></>,
  },
  {
    path: '/blog',
    element: <><NavBar /><Blog /></>,
  },
  {
    path: '/contact',
    element: <><NavBar /><Contact /></>,
  },
]);



function App() {
  return <RouterProvider router={router} />;
}

export default App
