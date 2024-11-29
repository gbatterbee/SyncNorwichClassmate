import React, { useState } from 'react';
import MonsterIco from './svg/Monster'
const ChildRegistration = ({ children, select, today }) => {
  const [selectedChild, setSelectedChild] = useState(null);
  //const [isRegistered, setIsRegistered] = useState(false);

  const handleChildSelect = (child) => {
    setSelectedChild(child);
    select(child)
  };

  return (
    <>
      <div className="text-center py-6">
        <h2 className="text-2xl font-bold">Good <span style={{ color: 'f6a21d' }}>Morning,</span></h2>
        <h2 className="text-2xl font-bold">Select your <span style={{ color: 'f6a21d' }}>name</span></h2>
      </div>

      <div className="p-6 space-y-6">
        <div className="grid grid-cols-6 gap-4">
          {children.sort((a, b) => a.name.localeCompare(b.name)).map((child) => (
            <button
              key={child.id}
              onClick={() => handleChildSelect(child)}
              className={`
                  flex flex-col items-center justify-center 
                  p-4 rounded-lg transition-all
                  max-w-sm 
                  ${selectedChild?.id === child.id
                  ? 'bg-blue-100 ring-2 ring-blue-400 scale-105'
                  : 'bg-gray-50 hover:bg-gray-100 hover:shadow-md'}
                `}
            >
              <span className="text-5xl mb-2"><MonsterIco colour={child.avatar} opacity={child.registration[today] ? 0.1 : 1} /></span>
              <span className="text-sm font-medium text-gray-700">{child.name}</span>
            </button>
          ))}
        </div>

        {selectedChild && (
          <div className="text-center text-gray-600 font-medium">
            Welcome, {selectedChild.name}!
          </div>
        )}


      </div>

    </>
  );
};

export default ChildRegistration;