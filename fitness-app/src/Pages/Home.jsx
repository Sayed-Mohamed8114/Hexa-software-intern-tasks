import {React , useState} from 'react'
import HeroBanner from '../Components/HeroBanner'
import SearchExercise from '../Components/SearchExercise'
import Exercises from '../Components/Exercises'

function Home() {
  {/*the reason why we declared this states here that we want it to be called in over all the project*/ }
  const [bodyPart,setBodyPart] = useState('all');
  const [exercises,setExercises] = useState([]);

  return (
    <section className='items-center  flex justify-center flex-col'>
      <HeroBanner/>
      <SearchExercise
      bodyPart={bodyPart}
      setBodyPart={setBodyPart}
      setExercises={setExercises}
      />
      <Exercises
      bodyPart={bodyPart}
      setBodyPart={setBodyPart}
      setExercises={setExercises}
      />
    </section>
  )
}

export default Home