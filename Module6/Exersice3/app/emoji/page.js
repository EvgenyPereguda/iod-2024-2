"use client";

import React, { useState } from "react";

function EmojiChanger() {
  const [emoji, setMood] = useState("😀");

  const handleWinLotto = () => {

    let newEmoji = "😀";
    if (emoji == "😀") newEmoji = "😂";    

    setMood(newEmoji);
  };

  
  return (
    <div className="space-x-4">
      Current Emoji: {emoji}
     <br />
      <button
        className="bg-blue-500 rounded-xl text-white py-3 px-4"
        onClick={handleWinLotto}
      >
        Change Mood
      </button> 
      
    </div>
  );
}

export default function EmojiFunction(){

    return (<><EmojiChanger/></>);
}