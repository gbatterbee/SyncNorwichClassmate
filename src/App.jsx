import "./styles.css";
import "./MoodLogger";
import MoodLoggerTW from "./MoodLoggerTW";
import KidsNameGrid from "./KidsNameGrid";
import RegistrationSummary from "./RegistrationSummary";
import ChildRegistration from "./ChildRegistration";


export default function App() {
  return <div><ChildRegistration/><MoodLoggerTW/><RegistrationSummary/><TeacherPage/>
  
  
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
            <th className="w-1/3 px-4 py-2">Mood Indicator</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => (
            <tr key={index} className="bg-gray-100">
              <td className="border px-4 py-2">{student.name}</td>
              <td className="border px-4 py-2">{student.status}</td>
              <td className="border px-4 py-2">
                <div className="grid grid-cols-5 gap-2">
                  <div>Mon: {student.mood.mon}</div>
                  <div>Tue: {student.mood.tue}</div>
                  <div>Wed: {student.mood.wed}</div>
                  <div>Thu: {student.mood.thu}</div>
                  <div>Fri: {student.mood.fri}</div>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};