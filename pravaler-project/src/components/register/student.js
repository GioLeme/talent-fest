import React, {useState} from "react";
import Input from '../../components/input/input';

const StudentData = () => {
  const [cpfNumber, setCpfNumber]=useState('')

    return (
      <form>
        <Input 
          type={'number'} 
          placeholder={'cpf'}
          onChange={(e) => cpfValidate(e)}
        />
      </form>
    );

  function cpfValidate(e){
  const regex = /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/gm
  const cpfValue= (e.currentTarget.value)
  setCpfNumber(cpfValue)
  console.log(typeof(cpfValue));
  
  console.log(cpfValue.match(regex));
  console.log(regex.exec(cpfValue))

  

    }

};

export default StudentData

// telefone celular
//^\([1-9]{2}\) (?:[2-8]|9[1-9])[0-9]{3}\-[0-9]{4}$

// renda mensal
// ^[1-9]\d{0,2}(\.\d{3})*,\d{2}$

    