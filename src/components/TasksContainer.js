import React, { useEffect, useState } from "react";
import NavBar from "./NavBar";
import NewTasks from "./NewTasks";
import ShowTasks from "./ShowTasks";
import { auth, db } from "../firebase";

import { collection, doc, getDoc, getDocs, setDoc } from "firebase/firestore";


const TasksContainer = () => {
  const [tasks, setTasks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const userId = localStorage.getItem("userId");


  useEffect(() => {
    const checkAndCreateUserData = async (user) => {
      const docRef = doc(db, 'userInfo', user.uid);
      const docSnapshot = await getDoc(docRef);
      console.log(user.uid)
      console.log(docSnapshot.exists())
      if (!docSnapshot.exists()) {
        console.log('Document does not exist. Creating...');
        const newData = {
          name: user.displayName || "user",
          description: 'description',
          imgUrl: user.photoURL || "https://i.pravatar.cc/100",
        };
        const collectionRef = collection(db, "userInfo");
        const customDocRef = doc(collectionRef, user.uid);
        setDoc(customDocRef, newData)
      } else
        console.log('Document already exists.');
    };
    checkAndCreateUserData(auth.currentUser);
  }, []);

  useEffect(() => {
    let isMounted = true;
    const getAllTasks = async () => {
      const collectionRef = collection(db, "asma-tasks");
      const snapshot = await getDocs(collectionRef);
      if (isMounted) {
        const tempArray = [];
        snapshot.forEach((task) => {
          if (task.data().userId === userId) {
            tempArray.push({ ...task.data(), id: task.id });
          }
        });
        setTasks(tempArray);
        setIsLoading(false);
      }
    };
    getAllTasks();
    return (() => {
      isMounted = false;
    })
  }, [tasks]);
  return (
    <div className="scrollable-container">
      <NavBar />
      <NewTasks />
      <ShowTasks tasks={tasks} isLoading={isLoading} />
    </div>
  );
};

export default TasksContainer;
