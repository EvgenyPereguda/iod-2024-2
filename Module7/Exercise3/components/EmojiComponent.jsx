"use client";

import React, { useState } from "react";
import { useEmojiContext } from "../context/EmojiProvider";

function EmojiChanger() {

  const { currentEmoji, handleUpdateEmoji } = useEmojiContext();

  const handleWinLotto = () => {

    let newEmoji = "😀";
    if (currentEmoji == "😀") newEmoji = "😂";    

    handleUpdateEmoji(newEmoji);
  };

  
  return (
    <div className="space-x-4">
      Current Emoji: {currentEmoji}
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

export default EmojiChanger;