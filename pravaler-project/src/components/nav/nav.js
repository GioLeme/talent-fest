import React from 'react';
import logo from '../../images/logo-negativo.png'
import '../nav/nav.css'
import { Link } from "react-router-dom";

function Nav() {
  return (
    <section className='nav-bg'>
      <img className='nav-logo' src={logo} alt='Logo Pravaler' />
      <Link to="/register">
        <button className='register-nav-btn'>Cadastre-se</button>
      </Link>
      <Link to="/admin">
        <button className='company-nav-btn'>Empresas</button>
      </Link>
    </section>
  )
}

export default Nav;