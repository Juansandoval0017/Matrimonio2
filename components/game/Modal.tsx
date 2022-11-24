
import Router from "next/router"

interface Props {
   Reset : () => void,
   score: number,
   gameOver: boolean,
   name: string,
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

export const Modal = (props: Props) => {

  if(!props.gameOver){
    return null;
  }


  return(
    
    <div  className=" absolute w-screen h-screen flex items-center justify-center bg-black bg-opacity-20" >

        
        <div className="bg-white w-3/4 h-3/4 md:w-2/4 md_:h-2/4 rounded-md shadow-lg p-10 drop-shadow-md flex items-center justify-between flex-col">
            
            <h2 className={StylesData[props.name].title} >Apoyaste a {props.name} con {props.score} asi va la cosa 🤗</h2>

            <article className="flex w-full flex-col" >

                <section className="flex w-full justify-between text-right" >

                    <span> <span className="font-semibold text-blue-600" >David:</span>  125</span>
                    <span> <span className="font-semibold text-pink-400" >Milena:</span>  125</span>
                    

                </section>

                <section className="w-full rounded-full h-5 bg-pink-400 flex" >

                    <div className="bg-blue-600 h-5 rounded-full text-center flex items-center justify-center text-white" style={{"width": "55%"}}>45%</div>
                    <div className=" rounded-full text-center  flex items-center justify-center text-white" style={{"width": "55%"}} >55%</div>
                    
                </section>

            </article>
            
            

            <section  className="w-full flex justify-around items-center gap-2" >

            <button className= "w-1/2 md:w-1/4 bg-pink-400 h-8 border-2 border-pink-400 text-white rounded-md hover:bg-inherit hover:text-pink-400 transition-all ease-in-out duration-200" onClick={async ()=>{ await props.Reset()  }} >Jugar Otra vez</button>
            <a className="w-1/2" href="/"><button  className= " w-full md:w-1/4 bg-blue-600 h-8 border-2 border-blue-600 text-white rounded-md hover:bg-inherit hover:text-blue-400 transition-all ease-in-out duration-200">Ir al inicio</button></a>

            </section>
            
        
        </div>
     

      

    </div>



  
  )
  };