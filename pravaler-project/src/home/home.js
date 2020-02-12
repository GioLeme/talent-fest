import React from 'react';
import Imagestudy from  '../images/study.png';
import '../home/home.css';
import Simulador from '../components/Simulator';
 
function Home() {
  return (
    <>
     <div className="container-home">
      <main className="main-home">
      <div className="question-home">
        <p className="p1">Quer</p>
        <p className="p2">Fazer</p>
        <p className="p3">Faculdade?</p>
        <p className="p4"> A gente te ajuda a alcançar esse sonho</p>
      </div>
      <img src={Imagestudy} alt='i' className="img-home"></img>
      </main>

      <section className="information-home">
        <h1>QUEM SOMOS</h1>
        <p className="p5">O PRAVALER é uma empresa de crédito estudantil que tem como objetivo facilitar a forma de pagamento pra você estudar.</p>
        <p className="p6">A gente acredita que a educação é pra todo mundo e pra mudar o mundo.</p>
        <h1>VANTAGENS:</h1>
        <ul>
          <li>Não precisa de conta em banco.</li>
          <li>Tudo on-line.</li>  
          <li>Você paga 1 semestre em pelo menos 1 ano.</li>
          <li>Pra quem fez e pra quem não fez o ENEM.</li>
          <li>Não tem limite de vagas.</li>
          <li>As parcelas não se acumulam.</li>
          <li>Pode pedir seu ﬁnanciamento o ano todo.</li>
          <li>Sonha em fazer intercâmbio? Aqui no PRAVALER você também pode financiar seus estudos no exterior.</li>
        </ul>
      </section>

      <section>  <Simulador /> </section>


    </div> 
  </>
  )
}

export default Home;
