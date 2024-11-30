import React, { useState } from "react";
import Moodling1 from "./svg/Moodling1";
import Moodling2 from "./svg/Moodling2";
import Moodling3 from "./svg/Moodling3";
import Moodling4 from "./svg/Moodling4";
import Moodling5 from "./svg/Moodling5";
import { DarkGreenDot, LightGreenDot, YellowDot, OrangeDot, RedDot } from "./svg/Dot";

const synth = window.speechSynthesis;
const voice =synth.getVoices().find(v=>v.name==='Good news');

console.log({voice})
const MoodLogger = ({ child, register }) => {
  const [selectedMood, setSelectedMood] = useState(null);

  const moods = [
    {
      emoji: <Moodling5 />,
      indicator: <RedDot />,
      label: "Very bad",
      description: "I'm not feeling great",
      color: "bg-blue-100",
    }, {
      emoji: <Moodling4 />,
      indicator: <OrangeDot />,
      label: "Bad",
      description: "I'm not feeling great",
      color: "bg-blue-100",
    }, {
      emoji: <Moodling3 />,
      indicator: <YellowDot />,
      label: "Good",
      description: "I'm not feeling great",
      color: "bg-blue-100",
    }, {
      emoji: <Moodling2 />,
      indicator: <LightGreenDot />,
      label: "Okay",
      description: "I'm feeling just okay",
      color: "bg-gray-100",
    },
    {
      emoji: <Moodling1 />,
      indicator: <DarkGreenDot />,
      label: "Very Good!",
      description: "I'm having a good day!",
      color: "bg-yellow-100",
    },
  ];

  const handleMoodSelect = (mood) => {
    const utterThis = new SpeechSynthesisUtterance('thank you!' + child.name);
    utterThis.pitch =Math.floor(Math.random() * 2) + 0.5;
    utterThis.rate = Math.floor(Math.random() * 2) + 0.5;
    utterThis.voice=voice;
    synth.speak(utterThis);

    register(mood);
  };

  return (
    <>
      <div className="text-center py-6">
        <h2 className="text-2xl font-bold">Hi <span style={{ color: 'f6a21d' }}>{child.name}</span>,</h2>
        <s><h2 className="text-2xl font-bold">How are you <span style={{ color: 'f6a21d' }}>feeling</span> today?</h2></s>
        <h2 className="text-2xl font-bold">How are you <span style={{ color: 'f6a21d' }}>finding our demo</span> today?</h2>
      </div>

      <div className="p-6 space-y-6">
        <div className="grid grid-cols-5 gap-4">
          {moods.map((mood) => (
            <button
              key={mood.label}
              onClick={() => handleMoodSelect(mood)}
              className={`
                  flex flex-col items-center justify-center 
                  p-4 rounded-lg transition-all 
                  ${selectedMood?.label === mood.label
                  ? `${mood.color} ring-2 ring-blue-400 scale-105`
                  : "bg-gray-50 hover:bg-gray-100 hover:shadow-md"
                }
                `}
            >
              <span className="text-5xl mb-2">{mood.emoji}</span>
              <span className="text-sm font-bold text-gray-700 font-sans">
                {mood.label}
              </span>
            </button>
          ))}
        </div>

        {selectedMood ? (
          <div className="text-center text-gray-600 italic">
            {selectedMood.description}
          </div>) : (<div className="text-center text-white">.
          </div>)
        }
      </div>
    </>
  );
};

export default MoodLogger;
