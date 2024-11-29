import React, { useState } from "react";

const MoodLogger = ({ child, register }) => {
  const [selectedMood, setSelectedMood] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const moods = [
    {
      emoji: "😊",
      label: "Happy",
      description: "I'm having a good day!",
      color: "bg-yellow-100",
    },
    {
      emoji: "😐",
      label: "Okay",
      description: "I'm feeling just okay",
      color: "bg-gray-100",
    },
    {
      emoji: "😔",
      label: "Sad",
      description: "I'm not feeling great",
      color: "bg-blue-100",
    },
  ];

  const handleMoodSelect = (mood) => {
    setSelectedMood(mood);
  };

  const handleSubmit = () => {
    if (selectedMood) {
      setSubmitted(true);
      register(selectedMood);

      // In a real app, this would send the data to a backend
      setTimeout(() => {
        setSubmitted(false);
        setSelectedMood(null);
      }, 2000);
    }
  };

  return (
      <>
        <div className="bg-blue-600 text-white text-center py-6">
          <h2 className="text-2xl font-bold">How are you feeling today?</h2>
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
                  ${
                    selectedMood?.label === mood.label
                      ? `${mood.color} ring-2 ring-blue-400 scale-105`
                      : "bg-gray-50 hover:bg-gray-100 hover:shadow-md"
                  }
                `}
              >
                <span className="text-5xl mb-2">{mood.emoji}</span>
                <span className="text-sm font-medium text-gray-700">
                  {mood.label} 
                </span>
              </button>
            ))}
          </div>
            <div className="text-center text-gray-600 italic">
             {selectedMood?.description ?? "     "}
            </div> 
          <button
            onClick={handleSubmit}
            disabled={!selectedMood || submitted}
            className={`
              w-full py-3 px-4 rounded-lg font-semibold 
              transition-all duration-300 ease-in-out 
              ${
                submitted
                  ? "bg-green-500 text-white"
                  : selectedMood
                  ? "bg-blue-500 hover:bg-blue-600 text-white transform hover:scale-[1.02]"
                  : "bg-gray-200 text-gray-400 cursor-not-allowed"
              }
            `}
          >
            {submitted ? "Thanks for sharing! 👍" : "Register"}
          </button>
        </div>
      </>
  );
};

export default MoodLogger;
