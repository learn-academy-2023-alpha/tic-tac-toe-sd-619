import React, { useState } from 'react'
import Square from './components/Square'
import './App.css'

const App = () => {
  const [squares, setSquares] = useState(Array(9).fill(null))

  const [currentPlayer,setCurrentPlayer] = useState("❌")
  const [winner,setWinner] = useState(null)

  const gamePlay = (index) => {
      let updatedSquares = [...squares]

      if (squares[index] || winner) {
        return null
      }
      // for (let i = 0; i < squares.length; i++){
        // let currentPlayer = ""
     
        // currentPlayer = currentPlayer === "⭕️" ? "❌" : "❌" 
      updatedSquares[index] = currentPlayer
      const horizontalWins = [[0, 1, 2], [3, 4, 5], [6, 7, 8]];
      const verticalWins = [[0, 3, 6], [1, 4, 7], [2, 5, 8]];
      const diagonalWins = [[0, 4, 8], [2, 4, 6]]
      const tictactoeWin = ([...horizontalWins,...verticalWins,...diagonalWins])
      
      setSquares(updatedSquares)
      for(let i = 0; i < tictactoeWin.length; i++){
          const [a,b,c] = tictactoeWin[i] 
        if (updatedSquares[a] && updatedSquares[a] === updatedSquares[b] && updatedSquares[a] === updatedSquares[c]) {
          setWinner(currentPlayer); return alert(`${currentPlayer} Player has won the game!`) 
          
        }
        
      setCurrentPlayer(currentPlayer === "❌" ? "⭕️" : "❌" )
      
      // [0, 1, 2], [3, 4,5 ], [6, 7,8 ], // horizontal
      // [0, 3, 6], [1, 4, 7], [2, 5, 8], // vertical
      // [0, 4, 8], [6, 4, 2]             // diagonal

     
        
        }
      
      

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