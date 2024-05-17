import React from 'react';
import '../styles/Header.css'

function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li><a href="#features">Recursos</a></li>
          <li><a href="#testimonials">Depoimentos</a></li>
          <li><a href="#contact">Contato</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
