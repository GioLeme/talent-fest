import React from 'react';
import logo from '../../images/logo-negativo.png'
import '../nav/nav.css'
import { Link } from "react-router-dom";

function Nav() {
  return (
    <section className='nav-bg'>
      <img className='nav-logo' src={logo} alt='Logo Pravaler' />

      <button className='register-nav-btn' onClick={()=> window.location='register'}>Cadastrar</button>
      <button className='company-nav-btn' onClick={()=> window.location='admin'}>Empresas</button>
    </section>
  )
}

export default Nav;