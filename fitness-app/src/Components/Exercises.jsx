import { React, useState, useContext } from "react";
import { exercisesoptions, fetchData } from "../utils/fetchData";


function Exercises({ bodyPart, exercises, setExercises }) {
 
  return (
    <div className="">
      <h2>Showing results</h2>
      <div>
        {exercises.map((exercise, index) => {
          return <p key={index}>{exercise.name}</p>;
        })}
      </div>
    </div>
  );
}
export default Exercises;
