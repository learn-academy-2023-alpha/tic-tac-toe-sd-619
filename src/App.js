import React, { useState } from 'react'
import Square from './components/Square'
import './App.css'

const App = () => {
  const [squares, setSquares] = useState(Array(9).fill(null))

  const gamePlay = (index) => {
      let updatedSquares = [...squares]
      updatedSquares[index] = "❌"
      setSquares(updatedSquares)

  }

  return (
    <>
      <h1>Tic Tac Toe</h1>
      <div className='gameBoard'>
      {squares.map((value,index) => {
      return <Square 
      value = {value}
      key = {index} 
      index ={index}
      gamePlay={gamePlay}
      /> 
      })} 

      </div>

     
    </>
  )
}

export default App