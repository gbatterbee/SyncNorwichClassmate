import React, { useState } from "react";

const MoodLogger = () => {
  // State to track selected mood, submission status, and additional details
  const [selectedMood, setSelectedMood] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [moodIntensity, setMoodIntensity] = useState(5);
  const [moodNotes, setMoodNotes] = useState("");

  // Mood options with emojis and descriptions
  const moods = [
    {
      id: "happy",
      emoji: "😊",
      label: "Happy",
    },
    {
      id: "neutral",
      emoji: "😐",
      label: "Neutral",
    },
    {
      id: "sad",
      emoji: "😔",
      label: "Sad",
    },
  ];

  // Handle mood selection
  const handleMoodSelect = (mood) => {
    setSelectedMood(mood);
    // Reset additional details when a new mood is selected
    setMoodIntensity(5);
    setMoodNotes("");
  };

  // Submit mood log
  const handleSubmit = () => {
    if (selectedMood) {
      // In a real application, this would send data to a backend
      const moodLog = {
        mood: selectedMood.label,
        intensity: moodIntensity,
        notes: moodNotes,
        timestamp: new Date().toISOString(),
      };

      console.log("Mood Logged:", moodLog);

      // Show submitted state temporarily
      setSubmitted(true);

      // Reset form after 2 seconds
      setTimeout(() => {
        setSubmitted(false);
        setSelectedMood(null);
        setMoodIntensity(5);
        setMoodNotes("");
      }, 2000);
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>How are you feeling today?</h2>

        {/* Mood Selection */}
        <div style={styles.moodGrid}>
          {moods.map((mood) => (
            <button
              key={mood.id}
              onClick={() => handleMoodSelect(mood)}
              style={{
                ...styles.moodButton,
                ...(selectedMood?.id === mood.id ? styles.selectedMood : {}),
              }}
            >
              <span style={styles.emoji}>{mood.emoji}</span>
              <span style={styles.moodLabel}>{mood.label}</span>
            </button>
          ))}
        </div>

        {selectedMood && (
          <div style={styles.descriptionContainer}>
            <button
              onClick={handleSubmit}
              disabled={!selectedMood || submitted}
              style={{
                ...styles.submitButton,
                ...(submitted ? styles.submittedButton : {}),
                ...(!selectedMood || submitted ? styles.disabledButton : {}),
              }}
            >
              {submitted ? "Mood Logged! 👍" : "Log My Mood"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

// Inline styles
const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    backgroundColor: "#f4f4f4",
    fontFamily: "Arial, sans-serif",
  },
  card: {
    backgroundColor: "white",
    borderRadius: "12px",
    boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
    padding: "30px",
    width: "100%",
    maxWidth: "400px",
  },
  title: {
    textAlign: "center",
    marginBottom: "20px",
    color: "#333",
  },
  moodGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: "15px",
  },
  moodButton: {
    backgroundColor: "#f0f0f0",
    border: "none",
    borderRadius: "10px",
    padding: "15px",
    cursor: "pointer",
    transition: "all 0.3s ease",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  selectedMood: {
    backgroundColor: "#e0e0e0",
    border: "2px solid #666",
  },
  emoji: {
    fontSize: "3rem",
  },
  moodLabel: {
    marginTop: "10px",
    fontSize: "0.9rem",
  },
  descriptionContainer: {
    textAlign: "center",
    margin: "20px 0",
  },
  description: {
    fontStyle: "italic",
    color: "#666",
  },
  intensityContainer: {
    marginBottom: "20px",
  },
  label: {
    display: "block",
    marginBottom: "10px",
  },
  slider: {
    width: "100%",
  },
  textarea: {
    width: "100%",
    minHeight: "100px",
    marginBottom: "20px",
    padding: "10px",
    border: "1px solid #ddd",
    borderRadius: "8px",
    resize: "vertical",
  },
  submitButton: {
    width: "100%",
    padding: "12px",
    backgroundColor: "#4CAF50",
    color: "white",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
  },
  submittedButton: {
    backgroundColor: "#4CAF50",
  },
  disabledButton: {
    backgroundColor: "#cccccc",
    cursor: "not-allowed",
  },
};

export default MoodLogger;
