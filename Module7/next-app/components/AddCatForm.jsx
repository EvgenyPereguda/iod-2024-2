"use client";

import { useState } from "react";

function AddCatForm({ onAddCat }) {
  const [name, setName] = useState("");
  const [latinName, setLatinName] = useState("");
  const [image, setImage] = useState("");

  
  const handleSubmit = (e) => {
    e.preventDefault();
    onAddCat({ name, latinName, image });
  };
  
  return (
    <div className="AddMovieForm componentBox border-black border-1">
      <form onSubmit={handleSubmit}>
        <label>
            name:
          <input
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label>
            latinName:
          <input
            name="latinName"
            value={latinName}
            onChange={(e) => setLatinName(e.target.value)}
          />
        </label>
        <label>
        image:
          <input
            name="image"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
        </label>        
        <button className="bg-blue-500 text-white rounded-lg px-2 py-3 mx-2 my-2">Add cat</button>
      </form>
    </div>
  );
}

export default AddCatForm;