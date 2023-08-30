import React, { useState, useEffect } from "react";
import { db } from "../firebase";
import { addDoc, collection, getDocs } from "firebase/firestore";
import Task from "./Task";
import LoadingPage from "./Loading ";

const ShowTasks = ({tasks, isLoading}) => {
  if (isLoading) {
    return <LoadingPage isTaskLoading={true} />
  }
  return (
    <div>
      {tasks.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </div>
  );
};

export default ShowTasks;
