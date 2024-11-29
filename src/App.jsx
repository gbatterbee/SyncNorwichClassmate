import "./styles.css";
import MoodLoggerTW from "./MoodLoggerTW";
import TeacherPage from "./TeacherPage";
import ChildRegistration from "./ChildRegistration";
import { useState } from "react";









export default function App() {
  const today = 'mon';
  const [page, setPage] = useState("childList");
  const [children, setChildren] = useState([
    { id: 1, name: 'Layla Carter', avatar: '9747FF', registration: { mon: {}, tue: {}, wed: {}, thu: {}, fri: {} } },
    { id: 2, name: 'Anthony Nelson', avatar: 'F6A21D', registration: { mon: {}, tue: {}, wed: {}, thu: {}, fri: {} } },
    { id: 3, name: 'Aria Baker', avatar: 'AAF61D', registration: { mon: {}, tue: {}, wed: {}, thu: {}, fri: {} } },
    { id: 4, name: 'Sebastian Adams', avatar: 'F61D89', registration: { mon: {}, tue: {}, wed: {}, thu: {}, fri: {} } },
    { id: 5, name: 'Grace Green', avatar: 'F6A21D', registration: { mon: {}, tue: {}, wed: {}, thu: {}, fri: {} } },
    { id: 6, name: 'Jackson Scott', avatar: '9747FF', registration: { mon: {}, tue: {}, wed: {}, thu: {}, fri: {} } },
    { id: 7, name: 'Scarlett King', avatar: 'F6A21D', registration: { mon: {}, tue: {}, wed: {}, thu: {}, fri: {} } },
    { id: 8, name: 'Matthew Wright', avatar: 'AAF61D', registration: { mon: {}, tue: {}, wed: {}, thu: {}, fri: {} } },
    { id: 9, name: 'Ella Allen', avatar: 'F61D89', registration: { mon: {}, tue: {}, wed: {}, thu: {}, fri: {} } },
    { id: 10, name: 'Daniel Hall', avatar: 'F6A21D', registration: { mon: {}, tue: {}, wed: {}, thu: {}, fri: {} } },
    { id: 11, name: 'Harper Young', avatar: '9747FF', registration: { mon: {}, tue: {}, wed: {}, thu: {}, fri: {} } },
    { id: 12, name: 'Alexander Walker', avatar: 'F6A21D', registration: { mon: {}, tue: {}, wed: {}, thu: {}, fri: {} } },
    { id: 13, name: 'Evelyn Lewis', avatar: 'AAF61D', registration: { mon: {}, tue: {}, wed: {}, thu: {}, fri: {} } },
    { id: 14, name: 'Henry White', avatar: 'F61D89', registration: { mon: {}, tue: {}, wed: {}, thu: {}, fri: {} } },
    { id: 15, name: 'Amelia Jackson', avatar: 'F6A21D', registration: { mon: {}, tue: {}, wed: {}, thu: {}, fri: {} } },
    { id: 16, name: 'Lucas Thomas', avatar: '9747FF', registration: { mon: {}, tue: {}, wed: {}, thu: {}, fri: {} } },
    { id: 17, name: 'Charlotte Anderson', avatar: 'F6A21D', registration: { mon: {}, tue: {}, wed: {}, thu: {}, fri: {} } },
    { id: 18, name: 'Benjamin Wilson', avatar: 'AAF61D', registration: { mon: {}, tue: {}, wed: {}, thu: {}, fri: {} } },
    { id: 19, name: 'Mia Hernandez', avatar: 'F61D89', registration: { mon: {}, tue: {}, wed: {}, thu: {}, fri: {} } },
    { id: 20, name: 'James Martinez', avatar: 'F6A21D', registration: { mon: {}, tue: {}, wed: {}, thu: {}, fri: {} } },
    { id: 21, name: 'Isabella Rodriguez', avatar: '9747FF', registration: { mon: {}, tue: {}, wed: {}, thu: {}, fri: {} } },
    { id: 22, name: 'William Davis', avatar: 'F6A21D', registration: { mon: {}, tue: {}, wed: {}, thu: {}, fri: {} } },
    { id: 23, name: 'Sophia Miller', avatar: 'AAF61D', registration: { mon: {}, tue: {}, wed: {}, thu: {}, fri: {} } },
    { id: 24, name: 'Oliver Garcia', avatar: 'F61D89', registration: { mon: {}, tue: {}, wed: {}, thu: {}, fri: {} } },
    { id: 25, name: 'Ava Jones', avatar: 'F6A21D', registration: { mon: {}, tue: {}, wed: {}, thu: {}, fri: {} } },
    { id: 26, name: 'Noah Williams', avatar: '9747FF', registration: { mon: {}, tue: {}, wed: {}, thu: {}, fri: {} } },
    { id: 27, name: 'Liam Smith', avatar: 'F6A21D', registration: { mon: {}, tue: {}, wed: {}, thu: {}, fri: {} } },
    { id: 28, name: 'Emma Johnson', avatar: 'AAF61D', registration: { mon: {}, tue: {}, wed: {}, thu: {}, fri: {} } },
    { id: 29, name: 'Olivia Brown', avatar: 'F61D89', registration: { mon: {}, tue: {}, wed: {}, thu: {}, fri: {} } },
    { id: 30, name: 'Sophia Smith', avatar: 'F6A21D', registration: { mon: {}, tue: {}, wed: {}, thu: {}, fri: {} } }
  ]);

  const [child, setChild] = useState();

  const handleSelect = (child) => {
    setPage('register')
    setChild(child);
  }

  const handleRegister = (mood) => {
    console.log({ handleRegister: mood })
    const updatedChild = { ...child }
    updatedChild.registration[today] = mood;
    const newChildren = children.filter(c => c.id !== child.id);
    newChildren.push(child);
    setChildren(newChildren);
    console.log({ newChildren })
    setPage('childList')

  }

  return <><div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center p-4">
    <div className="w-full max-w-screen-lg bg-white rounded-2xl shadow-xl overflow-hidden">

      {page === "childList" && <ChildRegistration children={children} select={handleSelect} />}
      {page === "register" && <MoodLoggerTW child={child} register={handleRegister} />}
      {page === "dashboard" && <TeacherPage children={children} />}

    </div>
  </div>
    <button onClick={() => { setPage('childList') }}>Reset</button>
    <button onClick={() => { setPage('childList') }}>Child</button>
    <button onClick={() => { setPage('dashboard') }}>Dashboard</button>
  </>
}

import React from 'react';


