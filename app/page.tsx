import Image from 'next/image'
import {Side} from '../components/index/Side';


interface StylesProps {
  [key: string]: {
      section: string;
      button: string;
      img: string;
  }
}

const styles : StylesProps= {
  David: {
      section: " w-full md:w-1/2 min-h-screen flex bg-blue-200 items-center justify-center p-4 gap-2",
      img: "w-2/5 h-2/5 lg:w-2/5 lg:h-4/6",
      button: "w-full md:w-2/5 place-self-center border-2 hover:bg-inherit hover:text-white transition duration-500 ease-in-out border-white bg-white text-blue-200 rounded-md"
  },
  Milena: {
      img: "w-2/5 h-2/5 lg:w-1/5 lg:h-4/12",
      section: "w-full md:w-1/2 min-h-screen flex bg-red-200 items-center justify-center p-4 gap-4",
      button: "w-full md:w-2/5 place-self-center border-2 hover:bg-inherit hover:text-white transition duration-500 ease-in-out border-white bg-white text-red-200 rounded-md"
  }
}

export default function Home() {
  const msm = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto accusantium saepe, animi, perferendis nemo blanditiis omnis mollitia quis molestiae fugit rerum sequi tempora accusamus distinctio libero, quam eligendi ullam illum?'
  return (
    <div className='min-w-full bg-slate-50  absolute flex:col md:flex' >
        <h1 className=' text-white absolute text-center min-w-full mt-6 text-2xl font-semibold p-2'>¡Ayudemos a los novios a escoger la luna de miel! 😁</h1>
        
        <Side section={styles.David.section} imgClass={styles.David.img} button={styles.David.button} img="/man.png" name="David Fajardo" alias="Jefito" description={msm} href="David"/>
        <Side section={styles.Milena.section} imgClass={styles.Milena.img} button={styles.Milena.button} img="/woman.png" name="Milena Nose" alias="Jefita" description={msm} href="Milena"/>
        
        

    </div>
  )
}
