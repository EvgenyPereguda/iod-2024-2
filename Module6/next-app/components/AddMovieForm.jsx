"use client";

import { useState } from "react";

function AddMovieForm({ onAddMovie }) {
  const [title, setTitle] = useState("");
  const [year, setYear] = useState("");
  // ++ add support for the synopsis field as well, here and below
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   onAddMovie({ title, year });
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const formData = new FormData(e.target);

    const movieData = {
      title: formData.get("title"),
      year: formData.get("year"),
    }

    onAddMovie(movieData);
  };

  return (
    <div className="AddMovieForm componentBox">
      <form onSubmit={handleSubmit}>
        <label>
          Movie Title:
          <input
            name="title"
            // value={title}
            // onChange={(e) => setTitle(e.target.value)}
            defaultValue=""
          />
        </label>
        <label>
          Year Released:
          <input
            name="year"
            type="number"
            // value={year}
            // onChange={(e) => setYear(e.target.value)}
            defaultValue=""
          />
        </label>
        <button className="bg-blue-500 text-white rounded-lg px-2 py-3 mx-2 my-2">Add Movie</button>
      </form>
    </div>
  );
}

export default AddMovieForm;
