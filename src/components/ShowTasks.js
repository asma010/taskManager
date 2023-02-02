import React, { useState, useEffect } from "react";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";
import Task from "./Task";

const ShowTasks = () => {
  const [tasks, setTasks] = useState([]);
  const userId = localStorage.getItem("userId");
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
        //console.log(tempArray);
        setTasks(tempArray);
      }
    };
    getAllTasks();
    return (()=>{
      isMounted=false;
    })
  }, []);
  return (
    <div>
      {tasks.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </div>
  );
};

export default ShowTasks;
