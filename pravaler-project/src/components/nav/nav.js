import React from 'react';
import logo from '../../images/logo-negativo.png'

function Nav() {
  return (
    <section>
      <img src={logo} alt="Logo Pravaler" />
      <button>CADASTRE-SE</button>
      <button>EMPRESAS</button>
    </section>
  )
}

export default Nav;