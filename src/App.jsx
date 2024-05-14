import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '/src/pages/home/Home.jsx';
import Github from '/src/pages/github/Github.jsx';
import Projets from '/src/pages/projets/Projets.jsx';
import Navbar from './assets/components/Navbar';
import { NextUIProvider } from '@nextui-org/react';
import useDarkMode from "use-dark-mode";
import './index.css'
import './input.css';
import './Navbar.scss';
import ErrorBoundary from '/src/assets/components/ErrorBoundary'; // Assurez-vous d'importer ErrorBoundary

export default function App() {
  const darkMode = useDarkMode(false, {
    classNameDark: 'dark-mode',
    classNameLight: 'light-mode',
    element: document.body
  });

  return (
    <BrowserRouter>
      <NextUIProvider>
        <ErrorBoundary>
          <div className={darkMode.value ? 'dark' : 'light'}> 
            <header>
              <Navbar />
            </header>
            <main>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/github" element={<Github />} />
                <Route path="/projets/*" element={<Projets />} />
              </Routes>
            </main>
            <footer>  
              <p>© 2024. All rights reserved.</p>
            </footer>
          </div>
        </ErrorBoundary>
      </NextUIProvider>
    </BrowserRouter>
  );
}

