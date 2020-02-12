import React, { useState, useEffect } from 'react';
import fire from '../../config/config'
import Input from '../../components/input/input'
import Button from '../../components/button/button'
import './admin.css' 

const Admin = () => {
  const [userList, setUserList] = useState([])
  const [newUser, setNewUser] = useState('')
  
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
    .update({status: 'aproved'})
    console.log(user.cpf);
  }

  const decline = (user) => {
    fire.firestore().collection('userData')
    .doc(user.cpf)
    .update({status: 'declined'})
    console.log(user.cpf);
  }

  const login = (e) => {
    e.preventDefault()
    const userMail = document.querySelector('.mail-input').value
    const userPass = document.querySelector('.password-input').value

    fire.auth().signInWithEmailAndPassword(userMail, userPass).then((user) =>{
      console.log(user);
    })
  }

  return (
    <>
    {fire.auth().currentUser? 
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
    :
    <section className="login-layout">
    <div className='login-form'>
    <h3 className='message-Login'>FAÇA SEU LOGIN</h3>
    <div className='login-elements'>
      <Input
        type="email"
        className="mail-input"
        placeholder="Email"
        required
      />
      <Input
        type="password"
        className="password-input"
        placeholder="Senha"
        required
      />
    
      <Button
        className="btn-primary"
        title="Login"
        handleClick={(e)=>login(e)}
      />


    </div>
      </div>
  
  </section>}
    </>
  )
}

export default Admin