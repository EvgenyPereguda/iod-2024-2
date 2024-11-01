"use client";

import React from "react";
import { useState } from "react";
import SingleCat from "@/components/SingleCat";
import AddCatForm from "@/components/AddCatForm";

const cats = [
  {
    id: 0,
    name: "Cheetah",
    latinName: "Acinonyx jubatus",
    image:
      "https://www.shadowsofafrica.com/media/catalog/product/cache/1/image/900x/040ec09b1e35df139433887a97daa66f/c/h/cheetah_2_1.jpg",
  },
  {
    id: 1,
    name: "Cougar",
    latinName: "Puma concolor",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Mountain_Lion_in_Glacier_National_Park.jpg/800px-Mountain_Lion_in_Glacier_National_Park.jpg",
  },
  {
    id: 2,
    name: "Jaguar",
    latinName: "Panthera onca",
    image: "https://static.inaturalist.org/photos/158870136/large.jpeg",
  },
  {
    id: 3,
    name: "Leopard",
    latinName: "Panthera pardus",
    image:
      "https://indiabiodiversity.org/files-api/api/get/raw/observations//3bd260b0-d456-4e59-9538-2b11c456c814/2947.jpg",
  },
  {
    id: 4,
    name: "Lion",
    latinName: "Panthera leo",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Lion_waiting_in_Namibia.jpg/220px-Lion_waiting_in_Namibia.jpg",
  },
  {
    id: 5,
    name: "Snow leopard",
    latinName: "Panthera uncia",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Irbis4.JPG/1200px-Irbis4.JPG",
  },
  {
    id: 6,
    name: "Tiger",
    latinName: "Panthera tigris",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Tiger_in_Ranthambhore.jpg/800px-Tiger_in_Ranthambhore.jpg",
  },
];

export default function BigCats() {
  const [currentCats, setCurrentCats] = useState(cats);

  const handleReverseBigCats = () => {
    let newCats = [...currentCats];

    newCats.reverse();

    setCurrentCats(newCats);
  };

  const handleSortByTitleBigCats = () => {
    let newCats = [...currentCats];

    newCats.sort((a, b) => {
      if (a.name < b.name) {
        return -1;
      } else if (a.name > b.name) {
        return 1;
      }
      // a must be equal to b
      return 0;
    });

    setCurrentCats(newCats);
  };

  const handleSortByLatinNameBigCats = () => {
    let newCats = [...currentCats];

    newCats.sort((a, b) => {
      if (a.name < b.name) {
        return -1;
      } else if (a.name > b.name) {
        return 1;
      }
      // a must be equal to b
      return 0;
    });

    setCurrentCats(newCats);
  };

  const handleShowPanthera = () => {
    let newCats = currentCats.filter((cat) =>
      cat.latinName.includes("Panthera")
    );

    setCurrentCats(newCats);
  };

  const handleResetBigCats = () => {
    setCurrentCats(cats);
  };

  const handleAddCat = (newCat) => {
    newCat.id = currentCats.length + 1; // unreliable but succinct
    setCurrentCats([...currentCats, newCat]);
  };

  const handleRemoveCat = (key) => {  

    let newCats = currentCats.filter((cat) => cat.id != key);

    for (let key in newCats) {
      newCats[key].id = key;
    }

    setCurrentCats(newCats);
  };

  const catItems = currentCats.map((cat) => (
    <SingleCat
      key={cat.id}
      id={cat.id}
      name={cat.name}
      latinName={cat.latinName}
      image={cat.image}
      onDeleteCat={handleRemoveCat}
    />
  ));

  return (
    <div>
      <div className="flex justify-between">{catItems}</div>
      <button
        className="bg-blue-500 text-white rounded-lg px-2 py-3 my-2"
        onClick={handleReverseBigCats}
      >
        Reverse List
      </button>
      <button
        className="bg-blue-500 text-white rounded-lg px-2 py-3 mx-2 my-2"
        onClick={handleSortByTitleBigCats}
      >
        Sort by name
      </button>
      <button
        className="bg-blue-500 text-white rounded-lg px-2 py-3 mx-2 my-2"
        onClick={handleSortByLatinNameBigCats}
      >
        Sort by latin name
      </button>

      <button
        className="bg-blue-500 text-white rounded-lg px-2 py-3 mx-2 my-2"
        onClick={handleShowPanthera}
      >
        ‘Panthera’ family
      </button>
      <button
        className="bg-blue-500 text-white rounded-lg px-2 py-3 mx-2 my-2"
        onClick={handleResetBigCats}
      >
        Reset
      </button>
      <AddCatForm onAddCat={handleAddCat} />
    </div>
  );
}
