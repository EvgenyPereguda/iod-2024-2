"use client";

import React from "react";

import { useState } from 'react'
import SortButton from "@/components/SortButton";
import AddMovieForm from "@/components/AddMovieForm";

// collection of objects representing movies
const movies = [
  {
    id: 1, // items in data collections need unique IDs
    title: "The Shawshank Redemption",
    year: 1994,
    synopsis: "Two imprisoned men find redemption.",
  },
  {
    id: 2, // unique ID
    title: "The Dark Knight",
    year: 2008,
    synopsis: "Batman fights the menace known as the Joker.",
  },
  {
    id: 3, // unique ID
    title: "Interstellar",
    year: 2014,
    synopsis: "Explorers travel through a wormhole in space.",
  },
];

export default function MoviesList() {
  const [currentMovies, setCurrentMovies] = useState(movies);

  const movieItems = currentMovies.map((movie) => (
    <Movie
      key={movie.id}
      title={movie.title}
      year={movie.year}
      synopsis={movie.synopsis}
    />
  ));
  const handleReverseMovies = () => {
    // first clone the original, so we don’t mutate it
    let newMovies = [...currentMovies];
    newMovies.reverse(); // 2. modify the clone
    setCurrentMovies(newMovies); // 3. set updated clone in state
  };
  const handleSortByYearMovies = () => {
    // first clone the original, so we don’t mutate it
    let newMovies = [...currentMovies];

    newMovies.sort((a, b)=>{
      if (a.year < b.year) {
        return -1;
      } else if (a.year > b.year) {
        return 1;
      }
      // a must be equal to b
      return 0;
    });

    setCurrentMovies(newMovies); // 3. set updated clone in state
  };
  const handleSortByTitleMovies = () => {
    // first clone the original, so we don’t mutate it
    let newMovies = [...currentMovies];

    newMovies.sort((a, b)=>{
      if (a.title < b.title) {
        return -1;
      } else if (a.title > b.title) {
        return 1;
      }
      // a must be equal to b
      return 0;
    });

    setCurrentMovies(newMovies); // 3. set updated clone in state
  };

// add this in MoviesList component
const handleAddMovie = (newMovie) => {
  newMovie.id = currentMovies.length + 1; // unreliable but succinct
  setCurrentMovies([...currentMovies, newMovie])
 }

  return (
    <div className="MoviesList">
      <ul className="flex justify-between">{movieItems}</ul>
      <button className="bg-blue-500 text-white rounded-lg px-2 py-3 my-2" onClick={handleReverseMovies}>Reverse List</button>
      <SortButton style="bg-blue-500 text-white rounded-lg px-2 py-3 mx-2 my-2" onClick={handleSortByYearMovies} text="Sort by year"></SortButton>
      <SortButton style="bg-blue-500 text-white rounded-lg px-2 py-3 mx-2 my-2" onClick={handleSortByTitleMovies} text="Sort by title"></SortButton>
      <AddMovieForm onAddMovie={handleAddMovie}/>
    </div>
  );
}

// separate component for displaying each movie
function Movie({ title, year, synopsis }) {
  return (
    <li>
      <h3>{title}</h3>
      <span>({year})</span>
      <div>{synopsis}</div>
    </li>
  );
}
