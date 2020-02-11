import React from "react";
import Input from '../../components/input/input';
import { validate as validateCPF } from 'gerador-validador-cpf'


const StudentData = (props) => {
  function cpfValidate(e){
    let cpfValue= (e.currentTarget.value)
    props.setUserCpfNumber(cpfValue)
    console.log(cpfValue);

    const cpfValido = /^(([0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2}))$/;  
    if (cpfValido.test(cpfValue) === false) {
      console.log('oi');
      
      cpfValue = cpfValue.replace( /\D/g , "");
      cpfValue = cpfValue.replace( /(\d{3})(\d)/ , "$1.$2"); 
      cpfValue = cpfValue.replace( /(\d{3})(\d)/ , "$1.$2");
      cpfValue = cpfValue.replace( /(\d{3})(\d{1,2})$/ , "$1-$2");
      props.setUserCpfNumber(cpfValue)    
    }
    console.log(validateCPF(cpfValue))
  }

  function nameValidate (e){
    const nameValue= (e.currentTarget.value)
    props.setUserName(nameValue)
    console.log(props.userName);
  }

  function celValidate (e){
    let phoneValue= (e.currentTarget.value)
    const validPhone = /^((([0-9]{2})[0-9]{3}.[0-9]{3}-[0-9]{2}))$/; 
    if (validPhone.test(phoneValue) === false) {
      phoneValue = phoneValue.replace( /\D/g , "");
      phoneValue = phoneValue.replace( /(\d{0})(\d)/ , "$1($2"); 
      phoneValue = phoneValue.replace( /(\d{2})(\d)/ , "$1) $2"); 
      phoneValue = phoneValue.replace( /(\d{5})(\d)/ , "$1-$2");
      props.setUserTel(phoneValue)    
    }
  }

  function emailValidate (e){
    const emailValue= (e.currentTarget.value)
    props.setUserEmail(emailValue)
    console.log(emailValue)
  }

  function incomeValidate (e){
    const incomeValue= (e.currentTarget.value)
    props.setUserIncome(incomeValue)
    console.log(incomeValue)
  }

  return (
    <form>
      <Input 
        type={'text'} 
        placeholder={'CPF'}
        value={props.userCpfNumber}
        maxlength={14}
       onChange={(e) => cpfValidate(e)}
      />
      <p></p>
      <Input 
        type={'text'} 
        placeholder={'Nome Completo'}
        onChange={(e) => nameValidate(e)}
      />
       <Input 
        type={'text'} 
        placeholder={'Celular'}
        value={props.userTel}
        maxlength={15}
        onChange={(e) => celValidate(e)}
      />
       <Input 
        type={'email'} 
        placeholder={'Email'}
        onChange={(e) => emailValidate(e)}
      />
       <Input 
        type={'number'} 
        placeholder={'Renda mensal'}
        onChange={(e) => incomeValidate(e)}
      />
     
    </form>
  );

};


export default StudentData
    