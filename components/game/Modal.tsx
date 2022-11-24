'use client'
import { useRouter } from 'next/navigation';
import Spinner from "./Spinner"

interface Props {
   Reset : () => void,
   data: any,
   gameOver: boolean,
   name: string,
   score: number,
   fetching: boolean,
}

interface Styles {
    [key: string]: {
        title: string,
        button: string,
    }
}

export const  StylesData : Styles = {
    David: {
        title: "text-3xl text-center text-blue-200",
        button: "",

    },
    Milena:{
        title: "text-3xl text-center text-red-200",
        button: "",
    }
}

export const Modal = ({Reset,gameOver,name,data,score,fetching}: Props) => {

    const p1 = data.total === 0 ? 50 : Math.round(data.David/data.total *100) 
    const p2 = data.total === 0 ? 50 : 100 - p1

  if(!gameOver){
    return null;
  }

  const router = useRouter();

  console.log(name)

  return(
    
    <div  className=" absolute w-screen h-screen flex items-center justify-center bg-black bg-opacity-20" >

        
        <div className="bg-white w-3/4 h-3/4 md:w-2/4 md_:h-2/4 rounded-md shadow-lg p-10 drop-shadow-md flex items-center justify-between flex-col">
            
            <h2 className={StylesData[name]?.title || ''} >Apoyaste a {name} con {score} asi va la cosa 🤗</h2>

            { fetching && <Spinner />}

            { ! fetching && <article className="flex w-full flex-col" >

                <section className="flex w-full justify-between text-right" >

                    <span> <span className="font-semibold text-blue-600 rounded-full" >David:</span>{data.David}</span>
                    <span> <span className="font-semibold text-pink-400" >Milena:</span>{data.Milena}</span>
                    

                </section>

                <section className="w-full rounded-full h-5 bg-pink-400 flex" >

                    <div className="bg-blue-600 h-5 rounded-full text-center flex items-center justify-center text-white" style={{"width": `${p1}%`}}>{p1}</div>
                    <div className=" rounded-full text-center  flex items-center justify-center text-white" style={{"width": `${p2}%`}} >{p2}</div>
                    
                </section>

            </article>}
            
            

            <section  className="w-full flex justify-around items-center gap-2" >

            <button className= "w-1/2 md:w-1/4 bg-pink-400 h-8 border-2 border-pink-400 text-white rounded-md hover:bg-inherit hover:text-pink-400 transition-all ease-in-out duration-200" onClick={async ()=>{ await Reset()  }} >Jugar Otra vez</button>
            <button  onClick={()=> router.push('/')} className= "w-1/2 md:w-1/4 bg-blue-600 h-8 border-2 border-blue-600 text-white rounded-md hover:bg-inherit hover:text-blue-400 transition-all ease-in-out duration-200">Ir al inicio</button>

            </section>
            
        
        </div>
     

      

    </div>



  
  )
  };