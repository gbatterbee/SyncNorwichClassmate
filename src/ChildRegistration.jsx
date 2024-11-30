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
              <Avatar child={child} today={today}/>
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

const Avatar = ({ child, today }) => !!child.img ? <CircularImage child={child} today={today}/> : <MonsterIco colour={child.avatar} opacity={child.registration[today] ? 0.1 : 1} />;

const CircularImage = ({ child, today }) => {
  return (
    <div className="flex items-center justify-center bg-gray-100">
      <div className="w-32 h-32">
        <img
          src={child.img}
          alt="Description of Image"
          className="rounded-full w-full h-full object-cover"
          style={{ opacity: child.registration[today]?0.2:1,}}
        />
      </div>
    </div>
  );
};

export default ChildRegistration;