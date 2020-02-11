import React, {useState} from "react";
import Input from '../../components/input/input';
import Button from '../../components/button/button'
import fire from '../../config/config'

const StudentData = () => {
  const [cpfNumber, setCpfNumber]=useState('')
  const [name, setName]=useState('')
  const [tel, setTel]=useState('')
  const [cel, setCel]=useState('')
  const [email, setEmail]=useState('')
  const [income, setIncome]=useState('')

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
        <Button
        handleClick={sendForm}
        title={'cadastrar'}
        />
      </form>
    );

  function cpfValidate(e){
    const cpfValue= (e.currentTarget.value)
    setCpfNumber(cpfValue)
    console.log(cpfValue)
  }

  function nameValidate (e){
    const nameValue= (e.currentTarget.value)
    setName(nameValue)
    console.log(nameValue)
  }

  function telValidate (e){
    const telValue= (e.currentTarget.value)
    setTel(telValue)
    console.log(telValue)
  }

  function celValidate (e){
    const celValue= (e.currentTarget.value)
    setCel(celValue)
    console.log(celValue)
  }

  function emailValidate (e){
    const emailValue= (e.currentTarget.value)
    setEmail(emailValue)
    console.log(emailValue)
  }

  function incomeValidate (e){
    const incomeValue= (e.currentTarget.value)
    setIncome(incomeValue)
    console.log(incomeValue)
  }

  function sendForm(e){
    e.preventDefault()
    const saveUserData = {
      cpf: cpfNumber,
      Username: name,
      userTel: tel,
      UserCel: cel,
      UserEmail: email,
      UserIncome: income
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

};

export default StudentData

// telefone celular
//^\([1-9]{2}\) (?:[2-8]|9[1-9])[0-9]{3}\-[0-9]{4}$

// renda mensal
// ^[1-9]\d{0,2}(\.\d{3})*,\d{2}$

    