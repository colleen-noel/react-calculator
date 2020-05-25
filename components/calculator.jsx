import React, { useState } from 'react'

export default () => {
  const [firstOperand, setFirstOperand] = useState('')
  const [secondOperand, setSecondOperand] = useState('')
  const [answer, setAnswer] = useState('')
  const [operation, setOperation] = useState('')
  const [equalClicked, setEqualClicked] = useState(false)

  const updateFirstOperand = (event) => {
    setFirstOperand(event.target.value)
  }

  const updateSecondOperand = (event) => {
    setSecondOperand(event.target.value)
  }

  const updateOperation = (event) => {
    setOperation(event.target.value)
  }

  const calculateAnswer = () => {
    setEqualClicked(true)
    const firstNumber = parseInt(firstOperand, 10)
    const secondNumber = parseInt(secondOperand, 10)

    switch (operation) {
      case 'addition':
        setAnswer(firstNumber + secondNumber)
        break

      case 'subtraction':
        setAnswer(firstNumber - secondNumber)
        break

      case 'multiplication':
        setAnswer(firstNumber * secondNumber)
        break

      case 'division':
        setAnswer(firstNumber / secondNumber)
        break

      default:
        setAnswer('')
    }
  }
  const isNumber = (a) => {
    if (isNaN(a)) { // eslint-disable-line no-restricted-globals
      return false
    }
    return true
  }

  return (
    <div className="page">
      <div className="heading">React Calculator</div>
      <input type="text" name="firstOperand" onChange={updateFirstOperand} />
      <select className="operation" onChange={updateOperation}>
        <option value=""> </option>
        <option value="addition">+</option>
        <option value="subtraction">-</option>
        <option value="multiplication">*</option>
        <option value="division">/</option>
      </select>

      <input type="text" name="secondOperand" onChange={updateSecondOperand} />
      <button type="button" name="calculate" onClick={calculateAnswer}> = </button>
      <input type="text" disabled name="answer" value={isNumber(answer) ? answer : ' '} />
      <div className="error">
        {isNumber(answer) || !equalClicked ? ' ' : 'Please provide a valid number for both operands'}
      </div>

    </div>
  )
}
