import React from "react";
import SingleCat from "@/components/SingleCat";

const cats = [
    {id:0, name: 'Cheetah', latinName: 'Acinonyx jubatus', image: 'https://www.shadowsofafrica.com/media/catalog/product/cache/1/image/900x/040ec09b1e35df139433887a97daa66f/c/h/cheetah_2_1.jpg' },
    {id:1, name: 'Cougar', latinName: 'Puma concolor', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Mountain_Lion_in_Glacier_National_Park.jpg/800px-Mountain_Lion_in_Glacier_National_Park.jpg' },
    {id:2, name: 'Jaguar', latinName: 'Panthera onca', image: 'https://static.inaturalist.org/photos/158870136/large.jpeg' },
    {id:3, name: 'Leopard', latinName: 'Panthera pardus', image: 'https://indiabiodiversity.org/files-api/api/get/raw/observations//3bd260b0-d456-4e59-9538-2b11c456c814/2947.jpg' },
    {id:4, name: 'Lion', latinName: 'Panthera leo', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Lion_waiting_in_Namibia.jpg/220px-Lion_waiting_in_Namibia.jpg' },
    {id:5, name: 'Snow leopard', latinName: 'Panthera uncia', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Irbis4.JPG/1200px-Irbis4.JPG' },
    {id:6, name: 'Tiger', latinName: 'Panthera tigris', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Tiger_in_Ranthambhore.jpg/800px-Tiger_in_Ranthambhore.jpg' },
]

export default function BigCats(){

    const catItems = cats.map((cat) => (
        <SingleCat
          key={cat.id}
          name={cat.name}
          latinName={cat.latinName}
          image={cat.image}
        />
      ));

      return (
        <div className="flex justify-between">
          {catItems}
        </div>
      );
}