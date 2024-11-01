"use client";

import React, { useState } from "react";

// save in MoodChanger.jsx
function MoodChanger() {
  const [mood, setMood] = useState("happy");

  // Calls setMood with a fixed value of 'ecstatic'
  // begin with 'handle' prefix by convention
  const handleWinLotto = () => {
    setMood("ecstatic");
  };
  // Calls setMood with a conditional state value
  const handleRunningLate = () => {
    let newMood = "stressed";
    if (mood === "stressed") newMood = "really stressed";
    else if (mood === "really stressed") newMood = "giving up";
    setMood(newMood);
  };

  return (
    <div className="space-x-4">
      Current Mood: {mood}
      <br />
      <button
        className="bg-blue-500 rounded-xl text-white py-3 px-4"
        onClick={() => setMood("tired")}
      >
        Stay Up Late
      </button>
      <button
        className="bg-blue-500 rounded-xl text-white py-3 px-4"
        onClick={() => setMood("hungry")}
      >
        Missed lunch!
      </button>
      <button
        className="bg-blue-500 rounded-xl text-white py-3 px-4"
        onClick={() => setMood("happy")}
      >
        Had a coffee
      </button>
      <button
        className="bg-blue-500 rounded-xl text-white py-3 px-4"
        onClick={handleRunningLate}
      >
        Running Late
      </button>
      <button
        className="bg-blue-500 rounded-xl text-white py-3 px-4"
        onClick={handleWinLotto}
      >
        Win Lotto
      </button>
    </div>
  );
}

export default MoodChanger;
