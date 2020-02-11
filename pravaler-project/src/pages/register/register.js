import React, {useState} from "react";
import Student from '../../components/register/student'
import Course from '../../components/register/course'
import Guarantor from "../../components/register/guarantor";
import Button from '../../components/button/button'
import fire from '../../config/config'

function RegisterPage() {
    const [userCpfNumber, setUserCpfNumber]=useState('')
    const [userName, setUserName]=useState('')
    const [userTel, setUserTel]=useState('')
    const [userCel, setUserCel]=useState('')
    const [userEmail, setUserEmail]=useState('')
    const [userIncome, setUserIncome]=useState('')

    function sendForm(e){
        e.preventDefault()
        const saveUserData = {
          cpf: userCpfNumber,
          Username: userName,
          userTel: userTel,
          UserCel: userCel,
          UserEmail: userEmail,
          UserIncome: userIncome
        }
        fire
          .firestore()
          .collection("userData")
          .add(saveUserData)
          .then(() => {
          console.log('foi, deusa!')
          })
          .catch(err => console.log('falhou miserávi'));
      }

  return (
    <div>
      <Student 
        userCpfNumber={userCpfNumber}
        setUserCpfNumber={setUserCpfNumber}
        userName={userName}
        setUserName={setUserName}
        userTel={userTel}
        setUserTel={setUserTel}
        userCel={userCel}
        setUserCel={setUserCel}
        userEmail={userEmail}
        setUserEmail={setUserEmail}
        userIncome={userIncome}
        setUserIncome={setUserIncome}
      />
      <Course />
      <Guarantor/>
       <Button
        handleClick={sendForm}
        title={'cadastrar'}
        />
    </div>
  )
}

export default RegisterPage