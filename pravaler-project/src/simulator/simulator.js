import React, { useState } from 'react';
import './simulator.css'

const Simulator = () => {
  const [studentIncome, setStudentIncome] = useState('')
  const [sureteeIncome, setSureteeIncome] = useState('')
  const [result, setResult] = useState('')
  const calculate = e => {
    e.preventDefault()
    const incomeSum = parseFloat(studentIncome + sureteeIncome)
    console.log(parseFloat(studentIncome))
    setResult((incomeSum/2.2).toFixed(2))
  }
  // console.log(studentIncome);
  // console.log(sureteeIncome);

  

  return (
  <div>
    <h1>SIMULADOR</h1>
    <form className='simulationForm'>
      <h3>Qual sua renda?</h3>
      <input value={studentIncome} type='number' onChange={(e) => setStudentIncome(Number(e.currentTarget.value)) }/>
      <input value={studentIncome} type='range' min='998' max='20000' onChange={(e) => setStudentIncome(Number(e.currentTarget.value)) }/>

      <h3>Qual a renda de seu garantidor?</h3>
      <input value={sureteeIncome} type='number' onChange={(e) => setSureteeIncome(Number(e.currentTarget.value))}/>
      <input value={sureteeIncome} type='range' min='998' max='20000' onChange={(e) => setSureteeIncome(Number(e.currentTarget.value))} />

      <input onClick={(e)=> calculate(e)} type='submit' value='Simular'/>
    </form>
      <p>Você pode financiar uma mensalidade de até:</p>
      <p>{result}</p>

    

  </div>
  )
}

export default Simulator