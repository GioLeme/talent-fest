import React, { useState } from 'react'
import Input from '../input/input'
import { validate as validateCPF } from 'gerador-validador-cpf'

export default function Guarantor () {
  const [guarantorCpf, setGuarantorCpfNumber] = useState('')
  function cpfValidate(e){
      let cpfValue= (e.currentTarget.value)
      setGuarantorCpfNumber(cpfValue)
      console.log(cpfValue);
  
      const cpfValido = /^(([0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2}))$/;  
      if (cpfValido.test(cpfValue) === false) {
        console.log('oi');
        
        cpfValue = cpfValue.replace( /\D/g , "");
        cpfValue = cpfValue.replace( /(\d{3})(\d)/ , "$1.$2"); 
        cpfValue = cpfValue.replace( /(\d{3})(\d)/ , "$1.$2");
        cpfValue = cpfValue.replace( /(\d{3})(\d{1,2})$/ , "$1-$2");
        setGuarantorCpfNumber(cpfValue)    
      }
      console.log(validateCPF(cpfValue))
    }

  // function celValidate (e){
  //     let phoneValue= (e.currentTarget.value)
  //     const validPhone = /^((([0-9]{2})[0-9]{3}.[0-9]{3}-[0-9]{2}))$/; 
  //     if (validPhone.test(phoneValue) === false) {
  //       phoneValue = phoneValue.replace( /\D/g , "");
  //       phoneValue = phoneValue.replace( /(\d{0})(\d)/ , "$1($2"); 
  //       phoneValue = phoneValue.replace( /(\d{2})(\d)/ , "$1) $2"); 
  //       phoneValue = phoneValue.replace( /(\d{5})(\d)/ , "$1-$2");
  //       setGuarantorTel(phoneValue)    
  //     }
  //   }
  return (
      <div class="guarantor-container">
          <form>
              <label for="cpf">CPF</label>
              <Input
                  type={'text'}
                  value={guarantorCpf}
                  placeholder={'CPF'}
                  maxlength={14}
                  onChange={(e) => cpfValidate(e)}
              />
              <label for="name">Name</label>
              <Input
                  type={'text'}
                  value={''}
                  placeholder={'Nome'}
              />
              <label for="money">Renda Mensal</label>
              <Input
                  type={'number'}
                  value={''}
                  placeholder={'Renda Mensal'}
              />
          </form>
      </div>
  )
}