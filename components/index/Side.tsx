'use client'


import { useRouter } from 'next/navigation';
interface SideProps {
    name: string;
    section: string;
    alias: string;
    description: string;
    href: string;
    img: string;
    button: string;
    imgClass: string;
}



export const Side = ({section,name,alias,description,img,href,button,imgClass} : SideProps ) => {

    const router = useRouter();


    return (
        <section className={section}>
          
            
            <img src={img} alt="foto" className={imgClass} />
            <article className="w-3/5 border-2 border-orange-100 p-4 h-2/5 flex flex-col rounded-sm gap-4">
                <h3 className="text-xl text-orange-100" >{name} alias: {alias}</h3>
                <p className=" font-thin text-justify text-white" >{description}</p>
                  
                
                <button onClick={ ()=> router.push(`/game/${name.split(' ')[0]}`) } className={button}>Team {name.split(" ",1)}</button>
                
            </article>
            
        </section>
    )
}