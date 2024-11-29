import "./styles.css";
import MoodLoggerTW from "./MoodLoggerTW";
import TeacherPage from "./TeacherPage";
import ChildRegistration from "./ChildRegistration";
import { useState } from "react";


export default function App() {
  const today = 'mon';
  const [page,setPage] = useState("childList");
  const [children, setChildren] = useState([
    { id: 1, name: 'Emma', avatar: '👧' , registration: { mon: {}, tue: {}, wed: {}, thu: {}, fri: {} } },
    { id: 2, name: 'Liam', avatar: '👦' , registration: { mon: {}, tue: '', wed: '', thu: '', fri: '' } },
    { id: 3, name: 'Olivia', avatar: '👧', registration: { mon: '', tue: '', wed: '', thu: '', fri: '' }  },
    { id: 4, name: 'Noah', avatar: '👦' , registration: { mon: '', tue: '', wed: '', thu: '', fri: '' } },
    { id: 5, name: 'Sophia', avatar: '👧', registration: { mon: '', tue: '', wed: '', thu: '', fri: '' }  }
  ]);

  const [child, setChild] = useState();

  const handleSelect = (child) =>{
    setPage('register')
    setChild(child);
  }

  const handleRegister = (mood) =>{
    console.log({handleRegister:mood})
    const updatedChild = {...child}
    updatedChild.registration[today] = mood;
    const newChildren = children.filter(c=>c.id!==child.id);
    newChildren.push(child);
    setChildren(newChildren);
    console.log({newChildren})
    setPage('childList')
    
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


