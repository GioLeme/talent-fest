import React, { useState } from 'react';
import './styles.css'

const Simulator = () => {
  const [studentIncome, setStudentIncome] = useState('')
  const [sureteeIncome, setSureteeIncome] = useState('')
  const [result, setResult] = useState('')
  const calculate = e => {
    e.preventDefault()
    const incomeSum = parseFloat(studentIncome + sureteeIncome)
    setResult((incomeSum / 2.2).toFixed(2))
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
          onChange={(e) => setStudentIncome(e.currentTarget.value)}
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
          onChange={(e) => setSureteeIncome(e.currentTarget.value)}
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
          onClick={(e) => calculate(e)}
          type='submit'
          value='SIMULE'
        />
      </form>
    </div>
  )
}

export default Simulator