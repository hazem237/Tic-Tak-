import { useState } from "react"


const Grids = () => {

    const propriety = {
        above : [
            [0,1,2] ,
            [3,4,5] ,
            [6,7,8]
        ] ,
        down : [ 
            [0 , 3,6] ,
            [1,4,7] ,
            [2,5,8]
        ] ,
        across : [ 
            [0,4,8] ,
            [2,4,6]
        ]
    }
     const [grid , setGrid]=useState(['','','','','','','','',''])
  const [turn ,setTurn]=useState('X')
  const printTurn = (index) => {
    console.log(propriety);
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
        <div className= {` ${s==='' ? `grid` : s==='X' ? `grid  y` : `grid x`} `} onClick={()=> printTurn(index)} key={index}>{s}</div>
      ))}
    </>
  )
}

export default Grids
