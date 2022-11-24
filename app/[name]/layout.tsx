
interface Person {
    [key: string]: {
        color: string;
        emoji: string;

    }
}

export const Person_Data : Person = {
    "David" : {
        color: "w-full min-h-screen flex items-center flex-col bg-blue-200 absolute",
        emoji: "👨🏻‍💻",
    } ,
    "Milena":{
        color: "w-full min-h-screen flex items-center flex-col bg-red-200 absolute",
        emoji:"👩‍⚕️"
    }
}



export default function GameLayout({ children, params }: {
    children: React.ReactNode,
    params: { name: string }

  }) 
  
  {
    const { color , emoji } = Person_Data[params.name]
    return (
      
        <div className={color}>

            <h1 className="text-2xl  p-4 font-semibold text-white  justify-self-center text-center " >Bien Vamos  Apoyar a {params.name} {emoji}</h1>


            
            {  children  }
        
        </div>
      
    );
  }