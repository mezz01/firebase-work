import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { db } from './firebase-config';
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { Question } from './components/questions';



function App() {
  const [survey, setSurvey] = useState([]);
  const surveyRef = collection(db, "survey")
  useEffect(() => {
    const getSurvey = async () => {
      const data = await getDocs(surveyRef);
      setSurvey(data.docs.map((doc) => ({...doc.data(),id: doc.id })));
    };
  getSurvey();
  },[])

  return (
    <>
    <h1>hello</h1>
      {survey.map((srv) => {
        return (
        <>
        <h1>{srv.id}</h1>
        <h2>{srv.title}</h2>
        <h3>{srv.description}</h3>
        <Question path={`survey/${srv.id}/questions`} />
        </>
        )
      })}
    </>
  )
}

export default App
