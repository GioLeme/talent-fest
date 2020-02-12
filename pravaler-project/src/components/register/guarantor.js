import React, { useState , useEffect} from "react";
import Input from "../input/input";
import { validate as validateCPF } from "gerador-validador-cpf";
import {saveInLocalStorage, getInLocalStorage} from '../../utils/handleRegister'
import Button from "../button/button"
import './register.css'


export default function Guarantor(props) {
  const [guarantorCpf, setGuarantorCpfNumber] = useState("");
  const [guarantorName, setGuarantorName] = useState("");
  const [monthlyIncome, setMonthlyIncome] = useState("");

  useEffect(() => {
    fillFields()
  },[])

  if(guarantorCpf && guarantorName && monthlyIncome){
    props.setGuarantorReady(true)
  }

  function cpfValidate(e) {
    let cpfValue = e.currentTarget.value;
    setGuarantorCpfNumber(cpfValue);
    console.log(cpfValue);

    const cpfValido = /^(([0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2}))$/;
    if (cpfValido.test(cpfValue) === false) {
      console.log("oi");

      cpfValue = cpfValue.replace(/\D/g, "");
      cpfValue = cpfValue.replace(/(\d{3})(\d)/, "$1.$2");
      cpfValue = cpfValue.replace(/(\d{3})(\d)/, "$1.$2");
      cpfValue = cpfValue.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
      setGuarantorCpfNumber(cpfValue);
    }
    console.log(validateCPF(cpfValue));
  }

  function saveGuarantorName(e){
    const name=(e.currentTarget.value)
    setGuarantorName(name)
   }

   function saveGuarantorIncome(e){
    const income=(e.currentTarget.value)
    setMonthlyIncome(income)
   }

   function saveGuarantorData(e){
    e.preventDefault()
    const guarantorData = {
      GuarantorCpf: guarantorCpf,
      GuarantorName: guarantorName,
      MonthlyIncome: monthlyIncome,
    }
    saveInLocalStorage(guarantorData)
    console.log('hello')
    // props.history.push("/register/course");
  }
  
  function fillFields(){
    const getSavedData = getInLocalStorage()
    if(!getSavedData) return
    
    setGuarantorCpfNumber(getSavedData.GuarantorCpf)
    setGuarantorName(getSavedData.GuarantorName)
    setMonthlyIncome(getSavedData.MonthlyIncome)
    console.log(getSavedData)
  }

  if (props.step !== 3) return null
  return (
    <div className="container">
      <form class="form">
      <p class="title">Sobre garantidor</p>

        <label htmlFor="cpf">CPF</label>
        <Input
          type={"text"}
          value={guarantorCpf}
          placeholder={"CPF"}
          maxlength={14}
          onChange={e => cpfValidate(e)}
          focusOut={saveGuarantorData}
        />
        <label htmlFor="name">Nome</label>
        <Input
          type={"text"}
          value={guarantorName}
          placeholder={"Nome"}
          onChange={e => saveGuarantorName(e)}
          focusOut={saveGuarantorData}
        />
        <label htmlFor="money">Renda Mensal</label>
        <Input
          type={"number"}
          value={monthlyIncome}
          placeholder={"Renda Mensal"}
          onChange={e => saveGuarantorIncome(e)}
          focusOut={saveGuarantorData}
        />
      </form>
    </div>
  );
}
