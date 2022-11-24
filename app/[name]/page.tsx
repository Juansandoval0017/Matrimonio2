
'use client'
import { time } from 'console'
import React,{useEffect,useState} from 'react'
import { Modal } from '../../components/game/Modal'
import axios from 'axios'


export default function prueba({ params }: {params: {name:string}})   {

  const numCols = 15
  const numRows = 15

  const [data, setData] = useState({
    David: 0,
    Milena: 0,
    total: 0,
  })

  const  [game, setGame] = useState({
    direction: '',
    snake: [ {x: 5, y: 5}, {x: 6, y: 5} , {x: 7, y: 5} , {x: 8, y: 5}],
    food: {x: 7, y: 7},
    speed: 170,
    gameOver: false ,
    score: 0,
    highScore: 0,
  })

  const [time, setTime] = useState(0)

  const [fetching, setFetching] = useState(false)

  const board = Array(numRows).fill(Array(numCols).fill(0))

  useEffect(() => {
    if(!game.gameOver){

      const interval = setInterval(() => {
    
        setTime( (time) => time + 1)
      }, game.speed)
      return () => clearInterval(interval)

    }

    else{
      setFetching(true)
      axios.post('/api/data', {
        name: params.name,
        puntaje: game.score,
      }).then((res) => {
        setData(res.data)
        setFetching(false)
      })
      .catch((err) => alert(err))

    }



  }, [game.gameOver])

  useEffect(() => {

    if(game.gameOver === false){
      
    
      moveSnake()
    }

    else{
      console.log('game over')
    }

  }, [time])

  const changeDirection = (dir : string) => {

    setGame({...game,direction: dir})
    
    
  }

  const moveSnake = () => {

    const food = game.food

    if(game.direction !== '' && game.gameOver === false){

      const newSnake = [...game.snake]
      const head = newSnake[newSnake.length - 1]
      let newFood = food
      let newScore = game.score

      if(!(food.x === head.x && food.y === head.y)){
        const tail = newSnake.shift()
        
      }

      else{
        newFood = { x: Math.floor(Math.random() * numCols), y: Math.floor(Math.random() * numRows) }
        newScore += 1
      }
      

      switch (game.direction) {
        case 'Up':
          newSnake.push({x: head.x - 1, y: head.y })
          break;
        case 'Down':
          newSnake.push({x: head.x + 1, y: head.y})
          break;
        case 'Left':
          newSnake.push({x: head.x , y: head.y - 1})
          break;
        case 'Right':
          newSnake.push({x: head.x , y: head.y + 1})
          break;
        default:
          break;
      }

      const _gameOver = checkColision(newSnake)

      

      setGame({...game,snake: newSnake,gameOver: _gameOver,food: newFood,score: newScore})

    }

  }

  const checkColision = (snake: any) => {
      
      const head = snake[snake.length - 1]

      const colision = snake.filter((part: any) => part.x === head.x && part.y === head.y)
  
      if(head.x < 0 || head.x > numRows -1 || head.y < 0 || head.y > numCols -1 || colision.length > 1){
      
        return true
  }
  
  return false

}

const restart = () => {
  
    setGame({
      direction: '',
      snake: [ {x: 5, y: 5}, {x: 6, y: 5} , {x: 7, y: 5} , {x: 8, y: 5}],
      food: {x: 7, y: 7},
      speed: 200,
      gameOver: false,
      score: 0,
      highScore: game.highScore < game.score ? game.score : game.highScore,
    })
  
}





  
  return (
    
    <div  className='w-screen flex justify-center items-center flex-col'>

      <section key={time} className='w-3/4 h-72  grid grid-cols-20 grid-rows-20 bg-board bg-cover' >

          {board.map((row : [], i : number) => row.map((col : [], j : number) => {

            const isSnake = game.snake.some((snakePart : {x:number,y:number}) => snakePart.x === i && snakePart.y === j)
            const isFood = game.food.x === i && game.food.y === j
            

            if(isSnake) return <div className='bg-inherit border-slate-50 border' key={`${i}-${j}`}></div>
            
            if(isFood) return <div className='bg-red-500 border-slate-500' key={`${i}-${j}`}></div>
            
            return  <div className='bg-slate-300 border ' key={`${i}-${j}`}></div>
        
        }
          
          
          ))}
      </section>

      <div className='flex justify-between w-3/4'>
          <span>Score: {game.score}</span>
          <span>Max Score: {game.highScore}</span>

      </div>

      <section className='w-3/4 grid grid-cols-3  h-72  text-center '>

        <div></div>
        <div onClick={ () => { changeDirection("Up") }  } className='flex w-full   h-full justify-center items-center border rounded-t-full  border-b-0  border-gray-300 drop-shadow-2xl bg-gray-300  text-4xl'>  △  </div>
        <div></div>

        <div onClick={ () => { changeDirection("Left") }  } className='flex w-full h-full justify-center items-center border rounded-l-full border-r-0 border-gray-300 drop-shadow-2xl bg-gray-300  text-4xl'>  ◁ </div>
        <div className='bg-gray-200 '></div>
        <div onClick={ () => { changeDirection("Right") }  } className='flex w-full h-full justify-center items-center border rounded-r-full border-l-0 border-gray-300 drop-shadow-2xl bg-gray-300  text-4xl'> ▷ </div>

        <div></div>
        <div onClick={ () => { changeDirection("Down") }  } className='flex w-full h-full justify-center items-center border rounded-b-full border-t-0 border-gray-300 drop-shadow-2xl bg-gray-300  text-4xl'> ▽ </div>
        <div></div>

      </section>

      <Modal fetching={fetching} Reset={restart} score={game.score} data={data} gameOver={game.gameOver} name = {params.name}  />
      
    </div>

    
    
  )
}
