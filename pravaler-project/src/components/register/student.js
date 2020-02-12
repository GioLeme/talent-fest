import React, {useState, useEffect} from "react";
import Input from '../../components/input/input';
import { validate as validateCPF } from 'gerador-validador-cpf'
import {saveInLocalStorage, getInLocalStorage} from '../../utils/handleRegister'
// import { withRouter } from "react-router-dom";
// import fire from '../../config/config'


const StudentData = (props) => {
  const [userCpfNumber, setUserCpfNumber]=useState('')
  const [userName, setUserName]=useState('')
  const [userCel, setUserCel]=useState('')
  const [userEmail, setUserEmail]=useState('')
  const [userIncome, setUserIncome]=useState('')


  useEffect(() => {
    fillFields()
  },[])

  if(userCpfNumber && userName && userCel && userEmail && userIncome){
    props.setStudentReady(true)
  }
  function cpfValidate(e){
    let cpfValue= (e.currentTarget.value)
    setUserCpfNumber(cpfValue)
    console.log(cpfValue);

    const cpfValido = /^(([0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2}))$/;  
    if (cpfValido.test(cpfValue) === false) {
      console.log('oi');
      
      cpfValue = cpfValue.replace( /\D/g , "");
      cpfValue = cpfValue.replace( /(\d{3})(\d)/ , "$1.$2"); 
      cpfValue = cpfValue.replace( /(\d{3})(\d)/ , "$1.$2");
      cpfValue = cpfValue.replace( /(\d{3})(\d{1,2})$/ , "$1-$2");
      setUserCpfNumber(cpfValue)    
    }
    console.log(validateCPF(cpfValue))
  }

  function nameValidate (e){
    const nameValue= (e.currentTarget.value)
    setUserName(nameValue)
  }

  function celValidate (e){
    let phoneValue= (e.currentTarget.value)
    const validPhone = /^((([0-9]{2})[0-9]{3}.[0-9]{3}-[0-9]{2}))$/; 
    if (validPhone.test(phoneValue) === false) {
      phoneValue = phoneValue.replace( /\D/g , "");
      phoneValue = phoneValue.replace( /(\d{0})(\d)/ , "$1($2"); 
      phoneValue = phoneValue.replace( /(\d{2})(\d)/ , "$1) $2"); 
      phoneValue = phoneValue.replace( /(\d{5})(\d)/ , "$1-$2");
      setUserCel(phoneValue)    
    }
  }

  function emailValidate (e){
    const emailValue= (e.currentTarget.value)
    setUserEmail(emailValue)
  }

  function incomeValidate (e){
    const incomeValue= (e.currentTarget.value)
    setUserIncome(incomeValue)
  }


  function saveUserData(){
    const userData = {
      UserCpf: userCpfNumber,
      UserName: userName,
      UserCel: userCel,
      UserEmail: userEmail,
      UserIncome: userIncome,
      status:'pending',
      score: (Math.random()*5).toFixed(1)
    }
    saveInLocalStorage(userData)

    
  }

  function fillFields(){
    const getSavedData = getInLocalStorage()
    if(!getSavedData) return
    
    setUserCpfNumber(getSavedData.UserCpf)
    setUserName(getSavedData.UserName)
    setUserCel(getSavedData.UserCel)
    setUserEmail(getSavedData.UserEmail)
    setUserIncome(getSavedData.UserIncome)
    console.log(getSavedData)
  }
  if (props.step !== 1) return null
  return (
    <form>
      <p>Dados do estudante:</p>
      <Input 
        type={'text'} 
        placeholder={'CPF'}
        value={userCpfNumber}
        maxlength={14}
        onChange={(e) => cpfValidate(e)}
        focusOut={saveUserData}
      />
      <p></p>
      <Input 
        type={'text'} 
        value={userName}
        placeholder={'Nome Completo'}
        onChange={(e) => nameValidate(e)}
        focusOut={saveUserData}
      />
       <Input 
        type={'text'} 
        placeholder={'Celular'}
        value={userCel}
        maxlength={15}
        onChange={(e) => celValidate(e)}
        focusOut={saveUserData}
      />
       <Input 
        type={'email'} 
        value={userEmail}
        placeholder={'Email'}
        onChange={(e) => emailValidate(e)}
        focusOut={saveUserData}
      />
       <Input 
        type={'number'} 
        value={userIncome}
        placeholder={'Renda mensal'}
        onChange={(e) => incomeValidate(e)}
        focusOut={saveUserData}
      />
     
    </form>
  );

};


export default StudentData
    