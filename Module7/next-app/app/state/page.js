"use client"

import { useState } from 'react'

export default function State(){


    const [name, setName] = useState("Adam");

    const changeName = (aName)=>{
        setName(aName);
        console.log(aName);
    };

    return (
        <>
            <h1>State </h1>
            <button className='bg-blue-500 rounded-lg text-white px-2 py-3' onClick={() => changeName('Max')}>Chane name:</button>
            {name}
        </>

    )
}