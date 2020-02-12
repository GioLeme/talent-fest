import React, { useState, useEffect } from 'react';
import fire from '../../config/config'
import './admin.css'

const Admin = () => {
  const [userList, setUserList] = useState([])
  console.log(userList);

  useEffect(() => {
    fire.firestore().collection('userData')
      .where("status", "==", "pending")
      .onSnapshot((snap) => {
        const newList = snap.docs.map((doc) => ({
          cpf: doc.id,
          ...doc.data()
        }))
        setUserList(newList)
      })
  }, [])

  const accept = (user) => {
    fire.firestore().collection('userData')
      .doc(user.cpf)
      .update({ status: 'aproved' })
    console.log(user.cpf);

  }

  const decline = (user) => {
    fire.firestore().collection('userData')
      .doc(user.cpf)
      .update({ status: 'declined' })
    console.log(user.cpf);
}

  return (
    <main className="admin-layout">
    {/* <section> */}
      <h2 className='admin-title'>Alunos Cadastrados</h2>
      <ul className="data-board">
        {userList.map((user) => (
            <div className="user-data">
              <p>Nome: {user.nome}</p>
              <p>CPF: {user.cpf}</p>
              <p>Score: {user.score}</p>
              <p>Renda: </p>
              <p>Renda do Fiador</p>
              <div className="control-btn">
                <input type="submit" value="Reprovar" className="decline-btn" onClick={() => decline(user)} />
                <input type="submit" value="Aprovar" className="accept-btn" onClick={() => accept(user)} />
              </div>
            </div>
        ))}
      </ul>
      <div className="return-btn-div">
      <button className='return-admin-button' onClick={()=> window.location='/'}>Voltar</button>
      </div>
      
    {/* </section> */}
    </main>
  )
}

export default Admin


// 3. Painel de Administração
// 3.1. Tela de Login
//     3.1.1.  O login deverá ser validado por email e senha
// 3.2. O painel de administração deverá permitir consulta aos alunos cadastrados, bem como permitir a aprovação ou reprovação da IES. 
// 3.3. Após aprovação ou reprovação do crédito, o aluno deverá receber um email, sms e whatsapp informando. 