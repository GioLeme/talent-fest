import React, {useState} from "react";
import Input from '../../components/input/input';
import { validate as validateCPF } from 'gerador-validador-cpf'

const StudentData = () => {
  const [cpfNumber, setCpfNumber]=useState('')
  const [phoneNumber, setPhoneNumber]=useState('')

  const cpfValidate = (e) => {
    let cpfValue= (e.currentTarget.value)
    setCpfNumber(cpfValue)
    console.log(cpfValue);

    const cpfValido = /^(([0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2}))$/;  if (cpfValido.test(cpfValue) === false) {
      cpfValue = cpfValue.replace( /\D/g , "");
      cpfValue = cpfValue.replace( /(\d{3})(\d)/ , "$1.$2"); 
      cpfValue = cpfValue.replace( /(\d{3})(\d)/ , "$1.$2");
      cpfValue = cpfValue.replace( /(\d{3})(\d{1,2})$/ , "$1-$2");
      setCpfNumber(cpfValue)    
    }
    console.log(validateCPF(cpfValue))
  }

  const phoneValidate = (e) => {
    let phoneValue= (e.currentTarget.value)
      const validPhone = /^((([0-9]{2})[0-9]{3}.[0-9]{3}-[0-9]{2}))$/; 
      // const number = phoneValue.match(/\d/g, "");
      // console.log(number);
      if (validPhone.test(phoneValue) === false) {
        phoneValue = phoneValue.replace( /\D/g , "");
        phoneValue = phoneValue.replace( /(\d{0})(\d)/ , "$1($2"); 
        phoneValue = phoneValue.replace( /(\d{2})(\d)/ , "$1) $2"); 
        phoneValue = phoneValue.replace( /(\d{5})(\d)/ , "$1-$2");
        setPhoneNumber(phoneValue)    
      }
  }

  return (
    <form>
      <Input 
        type={'text'} 
        placeholder={'cpf'}
        value={cpfNumber}
        maxlength={14}
        onChange={cpfValidate}
      />
         <Input 
        type={'text'} 
        placeholder={'telefone'}
        value={phoneNumber}
        maxlength={15}
        onChange={phoneValidate}
      />
    </form>
  );
};


export default StudentData
    