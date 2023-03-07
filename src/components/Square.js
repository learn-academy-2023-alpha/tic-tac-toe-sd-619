import React from 'react'

const Square = ({value,gamePlay,index}) => {
  const handleGamePlay = () => {
    gamePlay(index)
  }
  return (
    <>
    <div className="square" onClick={handleGamePlay}  >
        {value}

    </div>
    </>
  )
}
export default Square
