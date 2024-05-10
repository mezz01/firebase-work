import { useEffect, useState } from 'react'
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { db } from '../firebase-config';
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";


export default function Choice({path}) {
        const [survey, setSurvey] = useState([]);
        const surveyRef = collection(db, path)
      useEffect(() => {
        const getSurvey = async () => {
          const data = await getDocs(surveyRef);
          setSurvey(data.docs.map((doc) => ({...doc.data(),id: doc.id })));
        };
      getSurvey();
      },[])

    return (
        <>
            <ul>
                {survey.map((srv) => {
                    return (
                        <>
                        <h1>{srv.id}</h1>
                        <h2>{srv.choice}</h2>
                        <h2>{srv.count}</h2>
                        </>
                    );
                })}
            </ul>

        </>
    )
}