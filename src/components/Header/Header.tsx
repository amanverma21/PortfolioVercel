import { Container } from './styles';
import { BrowserRouter as Router } from 'react-router-dom';
import { NavHashLink, HashLink } from 'react-router-hash-link';
import { useState } from 'react';


export function Header() {
  const [isActive, setActive] = useState(false);

  function toggleTheme() {
    let html = document.getElementsByTagName('html')[0];
    html.classList.toggle('light');
  }

  function closeMenu() {
    setActive(false);
  }

  return (
    <Container className="header-fixed">
      <Router>
        <HashLink smooth to="#home" className="logo">
          <span>Aman Verma</span>
        </HashLink>

        <input
          onChange={toggleTheme}
          className="container_toggle"
          type="checkbox"
          id="switch"
          name="mode"
        />
        <label htmlFor="switch">Toggle</label>

        <nav className={isActive ? 'active' : ''}>
          <NavHashLink smooth to="#home" onClick={closeMenu}>
            Home
          </NavHashLink>
          <NavHashLink smooth to="#about" onClick={closeMenu}>
            About Me
          </NavHashLink>
          <NavHashLink smooth to="#portfolio" onClick={closeMenu}>
            Projects
          </NavHashLink>
          <NavHashLink smooth to="#contact" onClick={closeMenu}>
            Contact
          </NavHashLink>
          <a
            href="https://drive.google.com/file/d/1scPVOKwDbu9lZYfh-SbG5YBcd8iCCwCI/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="button"
          >
            Resume
          </a>
        </nav>

        <div
          aria-expanded={isActive ? 'true' : 'false'}
          aria-haspopup="true"
          aria-label={isActive ? 'Close menu' : 'Open menu'}
          className={isActive ? 'menu active' : 'menu'}
          onClick={() => {
            setActive(!isActive);
          }}
        ></div>
      </Router>
    </Container>
  );
}
