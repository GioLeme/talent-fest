import React from 'react';
import logo from '../../images/logo-negativo.png'
import '../nav/nav.css'
import fire from '../../config/config'

function Nav() {
  const logout = () => {
    fire.auth().signOut().then(() => { 
      console.log('saiu')
      window.location = '/';
      
    });

  }
  console.log(window.location);
  
  return (
    <section className='nav-bg'>
      <img className='nav-logo' src={logo} alt='Logo Pravaler' />
      <button className='register-nav-btn' onClick={()=> window.location='register'}>Cadastrar</button>
      <button className='company-nav-btn' onClick={()=> window.location='admin'}>Empresas</button>
      {window.location.pathname==='/admin' && <button className='company-nav-btn' onClick={()=>logout()}>Sair</button>}
    </section>
  )
}

export default Nav;