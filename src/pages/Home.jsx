import React from 'react'
import AnimationButton from '../components/common/AnimationButton'

const Home = () => {
  return (
    <section className="relative flex flex-col items-center justify-center h-screen bg-landing bg-cover bg-center">

      <div className="absolute inset-0 bg-black/50 pointer-events-none"></div>
      
      <div className="z-50 text-center flex flex-col items-center justify-center gap-4">
        <h1 className='text-3xl font-bold text-light '>Wujudkan Pesta Impian Anda Menjadi Kenyataan</h1>
        <p className='text-light opacity-80'>Laatansa Pesta: Solusi Lengkap untuk Acara Impian Anda.</p>
        <AnimationButton  title="Jelajahi Sekarang!" />
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-dark to-transparent pointer-events-none"></div>
    </section>
  )
}

export default Home