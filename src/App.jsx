import "./styles.css";
import "./MoodLogger";
import MoodLoggerTW from "./MoodLoggerTW";
import KidsNameGrid from "./KidsNameGrid";
import RegistrationSummary from "./RegistrationSummary";
import ChildRegistration from "./ChildRegistration";
import { useState } from "react";


export default function App() {
  const today = 'mon';
  const [page,setPage] = useState("childList");
  const [children, setChildren] = useState([
    { id: 1, name: 'Emma', avatar: '👧' , registration: { mon: '', tue: '', wed: '', thu: '', fri: '' } },
    { id: 2, name: 'Liam', avatar: '👦' , registration: { mon: '', tue: '', wed: '', thu: '', fri: '' } },
    { id: 3, name: 'Olivia', avatar: '👧', registration: { mon: '', tue: '', wed: '', thu: '', fri: '' }  },
    { id: 4, name: 'Noah', avatar: '👦' , registration: { mon: '', tue: '', wed: '', thu: '', fri: '' } },
    { id: 5, name: 'Sophia', avatar: '👧', registration: { mon: '', tue: '', wed: '', thu: '', fri: '' }  }
  ]);

  const [child, setChild] = useState(
    { id: 1, name: 'Emma', avatar: '👧' },
  );

  const handleSelect = (child) =>{
    setPage('register')
    setChild(child);
  }

  const handleRegister = (mood) =>{
    console.log({handleRegister:mood})
    setPage('childList')
    setChild(child);
  }

  return <div>
    {page==="childList" && <ChildRegistration children={children} select={handleSelect}/>}
    {page==="register" && <MoodLoggerTW child={child} register={handleRegister}/>}
    {page==="dashboard" && <TeacherPage children={children}/>}

    <button onClick={()=>{setPage('childList')}}>Reset</button>  
    <button onClick={()=>{setPage('dashboard')}}>Dashboard</button>

  </div>
}



import React from 'react';

const students = [
  { name: 'John Doe', status: 'Registered', mood: { mon: '😊', tue: '😊', wed: '😐', thu: '😊', fri: '😊' } },
  { name: 'Jane Smith', status: 'Pending', mood: { mon: '😐', tue: '😊', wed: '😊', thu: '😊', fri: '😞' } },
  // Add more students as needed
];

const TeacherPage = () => {
  return (
    <div className="container mx-auto p-4">

      <h1 className="text-2xl font-bold mb-4">Teacher's Page</h1>
      <table className="min-w-full bg-white">
        <thead className="bg-gray-800 text-white">
          <tr>
            <th className="w-1/3 px-4 py-2">Name</th>
            <th className="w-1/3 px-4 py-2">Registration Status</th>
            <th className="w-1/3 px-4 py-2">Week Indicator</th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-gray-100">
            <td className="border px-4 py-2">Name</td>
            <td className="border px-4 py-2">Registered</td>
            <td className="border px-4 py-2">
              <div className="grid grid-cols-5 gap-2">
                <div>Mon</div>
                <div>Tue</div>
                <div>Wed</div>
                <div>Thu</div>
                <div>Fri</div>
              </div>
            </td>
          </tr>
          {students.map((student, index) => (
            <tr key={index} className="bg-gray-100">
              <td className="border px-4 py-2">{student.name}</td>
              <td className="border px-4 py-2">{student.status}</td>
              <td className="border px-4 py-2">
                <div className="grid grid-cols-5 gap-2">
                  <div> {student.mood.mon}</div>
                  <div>
                    {student.mood.tue}</div>
                  <div> {student.mood.wed}</div>
                  <div> {student.mood.thu}</div>
                  <div> {student.mood.fri}</div>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};