import React, { useState } from 'react'
import '../styles/Calculator.css'

const Calculator = () => {

    const [calculation, setCalculation] = useState('')
    const calculate = () => {
            const numberInputOne = document.getElementById("numberInputOne").value
            const numberInputTwo = document.getElementById("numberInputTwo").value
            const operations = document.getElementById("operations").value
            if (Number(numberInputOne) && Number(numberInputTwo)) {
        
                switch(operations){
                    case '+':
                        setCalculation(Number(numberInputOne) + Number(numberInputTwo))
                        break
                    case '-':
                        setCalculation(Number(numberInputOne) - Number(numberInputTwo))
                        break
                    case '*':
                        setCalculation(Number(numberInputOne) * Number(numberInputTwo))
                        break
                    case '/':
                        setCalculation(Number(numberInputOne) / Number(numberInputTwo))
                        break
                    default :
                    setCalculation(0)
                }
          } else {
            setCalculation('Please Enter Two Numbers to Continue')
          }
        }

        return (
            <div>
              <br />
              <input type="number" id="numberInputOne" />
              <select id="operations">
                <option value="+">+</option>
                <option value="-">-</option>
                <option value="*">*</option>
                <option value="/">/</option>
              </select>
              <input type="number" id="numberInputTwo" />
              <input type="submit" value="=" onClick={calculate} />
              <input type="answer" defaultValue={calculation} disabled />
            </div>
          )
        }

export default Calculator;