import React, { useState, useEffect } from 'react';
import fire from '../../config/config'
import './admin.css' 

const Admin = () => {
  const [userList, setUserList] = useState([])  

  useEffect(() => {
    fire.firestore().collection('Alunos')
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
    console.log(user.cpf);
    
  }

  const decline = (user) => {
    console.log(user.cpf);
    
  }

  return (
    <section className="admin-layout">
    <h2>Lista de Alunos Cadastrados</h2>
    <ul className="data-board">
      {userList.map((user) => (
        <li className="data-item" key={user.cpf}>
          <div className="user-data">
            <p>Nome: {user.nome}</p>
            <p>CPF: {user.cpf}</p>
            <p>Score: {user.score}</p>
            <p>Renda: </p>
            <p>Renda do Fiador</p>
          </div>
          <div className="control-btn">
            <input type="submit" value="Aprovar" className="accept-btn" onClick={() => accept(user)}/>
            <input type="submit" value="Reprovar" className="decline-btn" onClick={() => decline(user)}/>

          </div>


        </li>
      ))}

    </ul>

    </section>
  )
}

export default Admin


// 3. Painel de Administração
// 3.1. Tela de Login
//     3.1.1.  O login deverá ser validado por email e senha
// 3.2. O painel de administração deverá permitir consulta aos alunos cadastrados, bem como permitir a aprovação ou reprovação da IES. 
// 3.3. Após aprovação ou reprovação do crédito, o aluno deverá receber um email, sms e whatsapp informando. 