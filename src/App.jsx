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
import { useCollectionData } from 'react-firebase-hooks/firestore';
import Survey from './components/survey';




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

  /* Getting data using the new firebase hooks method :
  const query = collection(db, "survey");
  const [docs, loading, error] = useCollectionData(query);
  const [snapshot, ld, err] = useDocument(reference);
  console.log(snapshot);*/

  return (
    <>
      <Survey />
    </>
  )
}

export default App
