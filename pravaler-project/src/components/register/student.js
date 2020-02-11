import React from "react";
import Input from '../../components/input/input';


const StudentData = (props) => {
  // console.log(props)

 
  function cpfValidate(e){
    const cpfValue= (e.currentTarget.value)
    props.setUserCpfNumber(cpfValue)
    console.log(cpfValue)
  }

  function nameValidate (e){
    const nameValue= (e.currentTarget.value)
    props.setUserName(nameValue)
    console.log(props.userName);
  }

  function telValidate (e){
    const telValue= (e.currentTarget.value)
    props.setUserTel(telValue)
    console.log(telValue)
  }

  function celValidate (e){
    const celValue= (e.currentTarget.value)
    props.setUserCel(celValue)
    console.log(celValue)
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
        type={'number'} 
        placeholder={'cpf'}
       onChange={(e) => cpfValidate(e)}
      />
      <Input 
        type={'text'} 
        placeholder={'Nome Completo'}
        onChange={(e) => nameValidate(e)}
      />
      <Input 
        type={'number'} 
        placeholder={'Telefone'}
        onChange={(e) => telValidate(e)}
      />
       <Input 
        type={'number'} 
        placeholder={'Celular'}
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

// telefone celular
//^\([1-9]{2}\) (?:[2-8]|9[1-9])[0-9]{3}\-[0-9]{4}$

// renda mensal
// ^[1-9]\d{0,2}(\.\d{3})*,\d{2}$

    