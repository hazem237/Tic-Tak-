import { useState } from "react"


const Grids = () => {
     const [grid , setGrid]=useState(['','','','','','','','',''])
  const [turn ,setTurn]=useState('X')
  const printTurn = (index) => {

    if( !grid[index].length>0) 
    {
        grid[index]=turn;
        setGrid(grid);
        console.log(grid)
        setTurn(turn ==='X' ? 'O' : 'X');
    }
     
  }

  return (
    <>
      {grid.map((s ,index)=> (
        <div className= "grid" onClick={()=> printTurn(index)} key={index}>{s}</div>
      ))}
    </>
  )
}

export default Grids
