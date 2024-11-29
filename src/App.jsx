import "./styles.css";
import MoodLoggerTW from "./MoodLoggerTW";
import TeacherPage from "./TeacherPage";
import ChildRegistration from "./ChildRegistration";
import { useState } from "react";

export default function App() {
  const today = 'mon';
  const [page, setPage] = useState("childList");
  const [children, setChildren] = useState([
    { id: 1, name: 'Emma', avatar: '9747FF', registration: { mon: {}, tue: {}, wed: {}, thu: {}, fri: {} } },
    { id: 2, name: 'Liam', avatar: 'F6A21D', registration: { mon: {}, tue: {}, wed: {}, thu: {}, fri: {} } },
    { id: 3, name: 'Olivia', avatar: 'AAF61D', registration: { mon: {}, tue: {}, wed: {}, thu: {}, fri: {} } },
    { id: 4, name: 'Noah', avatar: 'F61D89', registration: { mon: {}, tue: {}, wed: {}, thu: {}, fri: {} } },
    { id: 5, name: 'Sophia', avatar: 'F6A21D', registration: { mon: {}, tue: {}, wed: {}, thu: {}, fri: {} } },
    { id: 6, name: 'Emma', avatar: '9747FF', registration: { mon: {}, tue: {}, wed: {}, thu: {}, fri: {} } },
    { id: 7, name: 'Liam', avatar: 'F6A21D', registration: { mon: {}, tue: {}, wed: {}, thu: {}, fri: {} } },
    { id: 8, name: 'Olivia', avatar: 'AAF61D', registration: { mon: {}, tue: {}, wed: {}, thu: {}, fri: {} } },
    { id: 9, name: 'Noah', avatar: 'F61D89', registration: { mon: {}, tue: {}, wed: {}, thu: {}, fri: {} } },
    { id: 10, name: 'Sophia', avatar: 'F6A21D', registration: { mon: {}, tue: {}, wed: {}, thu: {}, fri: {} } },
    { id: 11, name: 'Emma', avatar: '9747FF', registration: { mon: {}, tue: {}, wed: {}, thu: {}, fri: {} } },
    { id: 12, name: 'Liam', avatar: 'F6A21D', registration: { mon: {}, tue: {}, wed: {}, thu: {}, fri: {} } },
    { id: 13, name: 'Olivia', avatar: 'AAF61D', registration: { mon: {}, tue: {}, wed: {}, thu: {}, fri: {} } },
    { id: 14, name: 'Noah', avatar: 'F61D89', registration: { mon: {}, tue: {}, wed: {}, thu: {}, fri: {} } },
    { id: 15, name: 'Sophia', avatar: 'F6A21D', registration: { mon: {}, tue: {}, wed: {}, thu: {}, fri: {} } },
    { id: 16, name: 'Emma', avatar: '9747FF', registration: { mon: {}, tue: {}, wed: {}, thu: {}, fri: {} } },
    { id: 17, name: 'Liam', avatar: 'F6A21D', registration: { mon: {}, tue: {}, wed: {}, thu: {}, fri: {} } },
    { id: 18, name: 'Olivia', avatar: 'AAF61D', registration: { mon: {}, tue: {}, wed: {}, thu: {}, fri: {} } },
    { id: 19, name: 'Noah', avatar: 'F61D89', registration: { mon: {}, tue: {}, wed: {}, thu: {}, fri: {} } },
    { id: 20, name: 'Sophia', avatar: 'F6A21D', registration: { mon: {}, tue: {}, wed: {}, thu: {}, fri: {} } },
    { id: 21, name: 'Emma', avatar: '9747FF', registration: { mon: {}, tue: {}, wed: {}, thu: {}, fri: {} } },
    { id: 22, name: 'Liam', avatar: 'F6A21D', registration: { mon: {}, tue: {}, wed: {}, thu: {}, fri: {} } },
    { id: 23, name: 'Olivia', avatar: 'AAF61D', registration: { mon: {}, tue: {}, wed: {}, thu: {}, fri: {} } },
    { id: 24, name: 'Noah', avatar: 'F61D89', registration: { mon: {}, tue: {}, wed: {}, thu: {}, fri: {} } },
    { id: 25, name: 'Sophia', avatar: 'F6A21D', registration: { mon: {}, tue: {}, wed: {}, thu: {}, fri: {} } },
    { id: 26, name: 'Emma', avatar: '9747FF', registration: { mon: {}, tue: {}, wed: {}, thu: {}, fri: {} } },
    { id: 27, name: 'Liam', avatar: 'F6A21D', registration: { mon: {}, tue: {}, wed: {}, thu: {}, fri: {} } },
    { id: 28, name: 'Olivia', avatar: 'AAF61D', registration: { mon: {}, tue: {}, wed: {}, thu: {}, fri: {} } },
    { id: 29, name: 'Noah', avatar: 'F61D89', registration: { mon: {}, tue: {}, wed: {}, thu: {}, fri: {} } },
    { id: 30, name: 'Sophia', avatar: 'F6A21D', registration: { mon: {}, tue: {}, wed: {}, thu: {}, fri: {} } }
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


