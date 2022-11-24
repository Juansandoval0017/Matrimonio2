import React from 'react'
import Image from 'next/image';
import  Grafica  from '../../components/stats/Grafica';


export default function Page() {
  return (

    <div className='bg-capilla h-screen w-full ' >
        <h1  className='text-center text-3xl pt-10'>Veamos quien va ganando 🤔</h1>

        <main className='w-screen   flex items-center pt-10' >
            
            <section className='w-1/3 flex flex-col justify-center items-center'>
                
                <h2 className='text-blue-600 text-3xl' >David</h2>
                <Image src='/man.png' alt='foto' width={200} height={200}  />

            </section>

            <section className='w-1/3 flex justify-center h-96 items-center text-black'>
                <Grafica />

            </section>

            <section className='w-1/3 flex flex-col justify-center items-center'>
                
                <h2 className='text-pink-600 text-3xl' >Milena</h2>
                <Image src='/woman.png' alt='foto' width={200} height={150}  />

            </section>


        </main>

    </div>
  )
}
