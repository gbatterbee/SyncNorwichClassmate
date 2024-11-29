import React, { useState } from "react";
import "./KidsNameGrid.css";

const KidsNameGrid = () => {
  const [kids, setKids] = useState([
    { id: 1, name: "Emma", age: 8, favorite: false },
    { id: 2, name: "Liam", age: 6, favorite: false },
    { id: 3, name: "Olivia", age: 9, favorite: false },
    { id: 4, name: "Noah", age: 7, favorite: false },
    { id: 5, name: "Sophia", age: 5, favorite: false },
    { id: 6, name: "Ethan", age: 10, favorite: false },
  ]);

  const [newKidName, setNewKidName] = useState("");
  const [newKidAge, setNewKidAge] = useState("");

  const handleFavoriteToggle = (id) => {
    setKids(
      kids.map((kid) =>
        kid.id === id ? { ...kid, favorite: !kid.favorite } : kid
      )
    );
  };

  const handleAddKid = (e) => {
    e.preventDefault();
    if (newKidName && newKidAge) {
      const newKid = {
        id: kids.length + 1,
        name: newKidName,
        age: parseInt(newKidAge),
        favorite: false,
      };
      setKids([...kids, newKid]);
      setNewKidName("");
      setNewKidAge("");
    }
  };

  const handleDeleteKid = (id) => {
    setKids(kids.filter((kid) => kid.id !== id));
  };

  return (
    <div className="kids-name-container">
      <h1>Register</h1>

      {/* <form onSubmit={handleAddKid} className="add-kid-form">
        <input
          type="text"
          placeholder="Kid's Name"
          value={newKidName}
          onChange={(e) => setNewKidName(e.target.value)}
          required
        />
        <button type="submit">Add Kid</button>
      </form> */}

      <div className="kids-grid">
        {kids.map((kid) => (
          <div
            key={kid.id}
            className={`kid-card ${kid.favorite ? "favorite" : ""}`}
          >
            <div className="kid-header">
              <h2>{kid.name}</h2>
              {/* <span className="age-badge">{kid.age} yrs</span> */}
            </div>
            {/* <div className="kid-actions">
              <button
                onClick={() => handleFavoriteToggle(kid.id)}
                className="favorite-btn"
              >
                {kid.favorite ? "❤️" : "🤍"}
              </button>
              <button
                onClick={() => handleDeleteKid(kid.id)}
                className="delete-btn"
              >
                🗑️
              </button>
            </div> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default KidsNameGrid;
