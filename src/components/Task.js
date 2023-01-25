import React,{useState} from "react";
import {db} from '../firebase';
import {doc,updateDoc} from 'firebase/firestore';
import { Button } from "@mui/material";

const Task = ({ task }) => {
    const[complete,setComplete]=useState(task.complete);

    const handleStatusChange=()=>{
        const docRef=doc(db,'asma-tasks',task.id);
        updateDoc(docRef,{complete:!task.complete});
        setComplete(!complete);
    }
  return (
    <div className={`task-card ${complete ? "complete" :""}`}>  
      <div className="task-status">
        <Button onClick={handleStatusChange}>{`Mark ${complete ? 'incomplete' : 'complete'} `}</Button>
      </div>
      <div className="task-name-description">
        <div className="task-name">{task.taskName}</div>
        <div className="task-description">{task.taskDescription}</div>
      </div>
      <div className="task-author">
        <b>Owner:</b> {task.userName}
      </div>
      <div className="task-priority">
        <b>Priority:</b> {task.priority}
      </div>
      <div className="task-dueDate">
        <b>Due:</b> {task.dueDate}
      </div>
    </div>
  );
};
export default Task;
