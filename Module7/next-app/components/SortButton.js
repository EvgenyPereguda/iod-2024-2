"use client"

import { useState } from 'react'

export default function SortButton({onClick, text, style}){

    let defaultStyle = "";


    return (
        <>
            <button className={style} onClick={onClick}>{text}</button>
        </>


    )

}