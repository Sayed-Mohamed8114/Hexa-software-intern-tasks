import React from 'react'
import HeroBanner from '../Components/HeroBanner'
import SearchExercise from '../Components/SearchExercise'
import Exercises from '../Components/Exercises'

function Home() {
  return (
    <section className='items-center flex justify-center flex-col'>
      <HeroBanner/>
      <SearchExercise/>
      <Exercises/>
    </section>
  )
}

export default Home