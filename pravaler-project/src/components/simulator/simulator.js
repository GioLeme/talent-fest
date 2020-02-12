import React, { useState } from 'react';
import './simulator.css'

const Simulator = () => {
  const [studentIncome, setStudentIncome] = useState('')
  const [sureteeIncome, setSureteeIncome] = useState('')
  const [result, setResult] = useState('')

  const calculate = (e, income1, income2) => {
    e.preventDefault()
    if (income1 === '' || income2 === '') {
      alert('Preencha os dois campos para calcular.');
      return 0;
    } else {
      const incomeSum = parseInt(income1) + parseInt(income2);
      setResult((incomeSum / 2.2).toFixed(2));
      return incomeSum;
    }
  }

  return (
    <div className="simulator-container">
      <h1 className="simulator-title">SIMULADOR</h1>
      <form className="simulator-form">
        <h3 className="simulator-text">
          Qual é a sua renda?
        </h3>
        <input
          className="simulator-input"
          value={studentIncome}
          type='text'
          onChange={(e) => {
              if ((/^[0-9]*$/).test(e.currentTarget.value)) {
                setStudentIncome(e.currentTarget.value)
              }
            }
          }
        />
        <input
          className="simulator-range-input"
          value={studentIncome}
          type='range'
          min='998'
          max='20000'
          onChange={(e) => setStudentIncome(e.currentTarget.value)}
        />

        <h3 className="simulator-text">
          Qual a renda de seu garantidor?
        </h3>

        <input
          className="simulator-input"
          value={sureteeIncome}
          type='text'
          onChange={(e) => 
            {
              if ((/^[0-9]*$/).test(e.currentTarget.value)) {
                setSureteeIncome(e.currentTarget.value)
              }
            }
          }
        />
        <input
          className="simulator-range-input"
          value={sureteeIncome}
          type='range'
          min='998'
          max='20000'
          onChange={(e) => setSureteeIncome(e.currentTarget.value)}
        />
        <div className="simulator-result-container">
          <p className="simulator-text">
            Você pode financiar uma mensalidade de até:
          </p>
          <p className="simulator-result">
            R$ {Number(result).toFixed(2)}
          </p>
        </div>

        <input
          className="simulator-submit"
          onClick={(e) => calculate(e, studentIncome, sureteeIncome)}
          type='submit'
          value='SIMULE'
        />
      </form>
    </div>
  )
}

export default Simulator