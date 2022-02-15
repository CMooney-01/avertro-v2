import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function SideNav() {

  const [click, setClick] = useState(false)

  const handleClick = () => setClick(!click)

  const closeMobileMenu = () => setClick(false);

  return(

  <nav className='navbar'>
    <a onClick={handleClick} className="menu-icon"><FontAwesomeIcon icon="bars" /></a>
    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
      <li className='nav-item'>
          <a href="#section" onClick={closeMobileMenu}>
              <FontAwesomeIcon icon="chart-column" size="2x"/>
              <p>Reports</p>
          </a>
      </li>
      <li className='nav-item'>
          <a href="#section" onClick={closeMobileMenu}>
              <FontAwesomeIcon icon="wrench" size="2x"/>
              <p>Strategy</p>
          </a>
      </li>
      <li className='nav-item'>
          <a href="#section" onClick={closeMobileMenu}>
              <FontAwesomeIcon icon="stethoscope" size="2x"/>
              <p>Assessments</p>
          </a>
      </li>
      <li className='nav-item'>
          <a href="#section" onClick={closeMobileMenu}>
              <FontAwesomeIcon icon="book" size="2x"/>
              <p>Catalogue</p>
          </a>
      </li>
      <li className='nav-item'>
          <a href="#section" onClick={closeMobileMenu}>
              <FontAwesomeIcon icon="gear" size="2x"/>
              <p>Settings</p>
          </a>
      </li>
    </ul>
  </nav>


  );
};

export default SideNav;
