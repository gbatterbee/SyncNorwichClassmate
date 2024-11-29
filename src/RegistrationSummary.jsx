import React, { useState } from 'react';
import './RegistrationSummary.css';

const RegistrationSummary = () => {
  const [children, setChildren] = useState([
    {
      id: 1,
      name: 'Emma Thompson',
      registered: true,
      moods: [
        { day: 'Mon', mood: '😊' },
        { day: 'Tue', mood: '😐' },
        { day: 'Wed', mood: '😔' },
        { day: 'Thu', mood: '😊' },
        { day: 'Fri', mood: '😌' },
        { day: 'Sat', mood: '😊' },
        { day: 'Sun', mood: '😊' }
      ]
    },
    {
      id: 2,
      name: 'Liam Rodriguez',
      registered: false,
      moods: [
        { day: 'Mon', mood: '😫' },
        { day: 'Tue', mood: '😐' },
        { day: 'Wed', mood: '😔' },
        { day: 'Thu', mood: '😐' },
        { day: 'Fri', mood: '😊' },
        { day: 'Sat', mood: '😌' },
        { day: 'Sun', mood: '😊' }
      ]
    },
    {
      id: 3,
      name: 'Olivia Chen',
      registered: true,
      moods: [
        { day: 'Mon', mood: '😊' },
        { day: 'Tue', mood: '😊' },
        { day: 'Wed', mood: '😊' },
        { day: 'Thu', mood: '😊' },
        { day: 'Fri', mood: '😊' },
        { day: 'Sat', mood: '😊' },
        { day: 'Sun', mood: '😊' }
      ]
    }
  ]);

  const toggleRegistration = (id) => {
    setChildren(children.map(child => 
      child.id === id ? { ...child, registered: !child.registered } : child
    ));
  };

  return (
    <div className="registration-summary-container">
      <h1>Child Registration Summary</h1>
      <div className="summary-grid">
        {/* Header */}
        <div className="summary-header">
          <span>Name</span>
          <span>Registered</span>
          <span className="mood-days">
            {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map(day => (
              <span key={day} className="day-header">{day}</span>
            ))}
          </span>
        </div>

        {/* Children Rows */}
        {children.map((child) => (
          <div key={child.id} className="summary-row">
            <span className="child-name">{child.name}</span>
            
            <span 
              className="registration-status" 
              onClick={() => toggleRegistration(child.id)}
            >
              {child.registered ? '✓' : '✗'}
            </span>
            
            <div className="mood-days">
              {child.moods.map((dayMood, index) => (
                <span 
                  key={index} 
                  className="mood-emoji"
                  title={`${child.name}'s mood on ${dayMood.day}`}
                >
                  {dayMood.mood}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RegistrationSummary;