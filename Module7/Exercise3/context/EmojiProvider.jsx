"use client"

import React, {  useState, useContext } from "react";

const EmojiContext = React.createContext();

export const EmojiProvider = (props) => {

  const [currentEmoji, setCurrentEmoji] = useState("😀");

  const handleUpdateEmoji = (emoji) => {
    setCurrentEmoji(emoji);
  };

  return (
    <EmojiContext.Provider value={{ currentEmoji, handleUpdateEmoji }}>
      {props.children}
    </EmojiContext.Provider>
  );
};

export const useEmojiContext = () => {
  return useContext(EmojiContext);
};