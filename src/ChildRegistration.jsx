import React, { useState } from 'react';
import MonsterIco from './Monster'
const ChildRegistration = ({children, select}) => {
  // const [children, setChildren] = useState([
  //   { id: 1, name: 'Emma', avatar: '👧' },
  //   { id: 2, name: 'Liam', avatar: '👦' },
  //   { id: 3, name: 'Olivia', avatar: '👧' },
  //   { id: 4, name: 'Noah', avatar: '👦' },
  //   { id: 5, name: 'Sophia', avatar: '👧' }
  // ]);

  const [selectedChild, setSelectedChild] = useState(null);
  const [isRegistered, setIsRegistered] = useState(false);

  const handleChildSelect = (child) => {
    setSelectedChild(child);
    select(child)
  };

  const handleRegister = () => {
    if (selectedChild) {
      setIsRegistered(true);
      setTimeout(() => {
        setIsRegistered(false);
        select(null);
      }, 2000);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl overflow-hidden">
        <div className="bg-blue-600 text-white text-center py-6">
          <h2 className="text-2xl font-bold">Hello</h2>
        </div>

        <div className="p-6 space-y-6">
          <div className="grid grid-cols-3 gap-4">
            {children.map((child) => (
              <button
                key={child.id}
                onClick={() => handleChildSelect(child)}
                className={`
                  flex flex-col items-center justify-center 
                  p-4 rounded-lg transition-all 
                  ${selectedChild?.id === child.id 
                    ? 'bg-blue-100 ring-2 ring-blue-400 scale-105' 
                    : 'bg-gray-50 hover:bg-gray-100 hover:shadow-md'}
                `}
              >
                <span className="text-5xl mb-2"><MonsterIco/></span>
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
      </div>
    </div>
  );
};

export default ChildRegistration;