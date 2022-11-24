
interface Person {
    
        color: string;
        emoji: string;
    
}


const getColor = (name: string) => {
    if (name === "David") {
        return "w-full min-h-screen flex items-center flex-col bg-blue-200 absolute"
    }
    else if(name === "Milena"){
        return "w-full min-h-screen flex items-center flex-col bg-red-200 absolute"
    }
    return ""
}

const getEmoji = (name: string) => {
    if (name === "David") {
        return "👨🏻‍💻"
    }
    else if(name === "Milena"){
        return "👩‍⚕️"
    }
    return ""
}



export default function GameLayout({ children, params }: {
    children: React.ReactNode,
    params: { name: string }

  })
  
  
  
  { 

    const color = getColor(params.name!)

    const emoji = getEmoji(params.name!)


    
    return (
      
        <div className={color}>

            <h1 className="text-2xl  p-4 font-semibold text-white  justify-self-center text-center " >Bien Vamos  Apoyar a {params.name} {emoji}</h1>


            
            {  children  }
        
        </div>
      
    );
  }