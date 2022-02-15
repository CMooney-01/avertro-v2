import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function SideNav() {
  return(

    <div className="navbar">
      <a className="nav-item active" href="#section"><FontAwesomeIcon icon="chart-column" size="2x"/>Reports</a>
      <a className="nav-item" href="#section"><FontAwesomeIcon icon="wrench" size="2x"/>Strategy</a>
      <a className="nav-item" href="#section"><FontAwesomeIcon icon="stethoscope" size="2x"/>Assessments</a>
      <a className="nav-item" href="#section"><FontAwesomeIcon icon="book" size="2x"/>Catalogue</a>
      <a className="nav-item" href="#section"><FontAwesomeIcon icon="gear" size="2x"/>Settings</a>
    </div>

  );
};

export default SideNav;
