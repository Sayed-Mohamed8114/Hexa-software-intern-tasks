import React, { useEffect, useState } from "react";
import { exercisesoptions, fetchData } from "../utils/fetchData";
import HorizontalScrollBar from "./HorizontalScrollBar";

function SearchExercise() {
  const [search, setSearch] = useState("");
  const [exercises, setExercises] = useState([]);
  const [bodyParts, setBodyParts] = useState([]);

  useEffect(() => {
    const fetchExercisesData = async () => {
      const bodyPartsData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
        exercisesoptions,
      );
      setBodyParts(["all", ...bodyPartsData]);
    };
    fetchExercisesData();
  }, []);

  // async mean that the function will take some time to make what we want to do with it this is the meaning of async
  const handleSearch = async () => {
    if (search) {
      const exercisesData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises",
        exercisesoptions,
      );

      const searchedExercises = exercisesData.filter(
        (exercise) =>
          exercise.name.toLowerCase().includes(search) ||
          exercise.target.toLowerCase().includes(search) ||
          exercise.equipment.toLowerCase().includes(search) ||
          exercise.bodyPart.toLowerCase().includes(search),
      );
      setSearch("");
      setExercises(searchedExercises);
    }
  };

  return (
    <div className="items-center justify-center w-full">
      <p className="bg-linear-to-l from-red-700 via-red-600 to-black bg-clip-text text-center  text-transparent font-bold font-serif text-[70px]">
        Awesome exercises <br />
        you should Know
      </p>
      <div className="flex gap-2 flex-col md:flex-row w-[95%] items-center justify-center p-3 text-center">
        <input
          type="text"
          value={search}
          className="p-4 w-[85%] placeholder:text-red-800 placeholder:font-semibold placeholder:text-2xl text-xl 
          rounded-md outline-0 focus:outline-2 focus:outline-red-800"
          placeholder="Search exercises here ..."
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
        />
        <button
          className="bg-linear-to-r from-red-50 via-red-200 w-[10%] text-center
          to-red-400 p-4 transition-all ease-linear duration-700 hover:opacity-60 hover:font-extrabold 
          rounded-md text-red-950 font-bold font-serif mt-2 cursor-pointer text-2xl"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>
      <div className="w-full items-center justify-center">
        <div className="flex gap-2 items-center justify-center">
          <HorizontalScrollBar data={bodyParts} />
        </div>
      </div>
    </div>
  );
}

export default SearchExercise;
