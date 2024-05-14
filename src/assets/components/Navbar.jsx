import { Link } from 'react-router-dom';
import { MoonIcon } from '/src/assets/components/MoonIcon';
import { SunIcon } from '/src/assets/components/SunIcon';
import useDarkMode from "use-dark-mode";
import GithubButton from './GithubButton';


const Navbar = () => {
  const darkMode = useDarkMode(false, {
    classNameDark: 'dark-mode',
    classNameLight: 'light-mode',
    element: document.body
  });

  return (
    <nav className="container cyan brackets">
      <div className="brand">
        <Link className="name" to="/">ROBENA RASOLONDRAMANITRA</Link>
      </div>
      <div className='links'>
        <Link to="/projets">Projets</Link>
        <GithubButton />
        {darkMode.value ? 
          <SunIcon onClick={darkMode.toggle} className="icon_mode" /> : 
          <MoonIcon onClick={darkMode.toggle} className="icon_mode" />
        }
      </div>
    </nav>
  );
}

export default Navbar
