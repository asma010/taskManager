import React, { useState } from "react";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";
import { Button, Paper, TextField } from "@mui/material";
import { UserAuth } from "../context/AuthContext";

const NewTasks = () => {
  const { user } = UserAuth();
  const [field, setField] = useState({
    userName: "",
    taskName: "",
    taskDescription: "",
    dueDate: "",
    priority: "",
  });

  const [fieldIsValid, setFieldIsValid] = useState({
    userName: false,
    taskName: false,
    taskDescription: false,
    dueDate: false,
    priority: false,
  });

  const validateNotEmpty = (obj, name) => {
    if (obj.trim().length < 1) {
      setFieldIsValid((prevField) => {
        return {
          ...prevField,
          [name]: false,
        };
      });
    } else {
      setFieldIsValid((prevField) => {
        return {
          ...prevField,
          [name]: true,
        };
      });
    }
  };
  const changeHandler = (e, name) => {
    setField({ ...field, [name]: e.target.value });
    validateNotEmpty(e.target.value, name);
  };
  const handleSave = () => {
    const newTaskForm = {
      userId: user?.reloadUserInfo?.localId,
      userName: field.userName,
      taskName: field.taskName,
      taskDescription: field.taskDescription,
      dueDate: field.dueDate,
      priority: field.priority,
      complete: false,
    };
    const collectionRef = collection(db, "asma-tasks");
    addDoc(collectionRef, newTaskForm);
  };
  return (
    <div className="new-task-box">
      <Paper sx={{ width: "95%", margin: "auto auto", padding: "5px"}}>
        <h2>create new Task</h2>

        <div className="flex-container">
          <div className="flex-item">
            <div className="input-label">userName</div>
            <TextField
              error={!fieldIsValid.userName} 
              fullWidth
              onChange={(e) => changeHandler(e, "userName")}
            />
          </div>
          <div className="flex-item">
            <div className="input-label">Task Name</div>
            <TextField
              error={!fieldIsValid.taskName}
              fullWidth
              onChange={(e) => changeHandler(e, "taskName")}
            />
          </div>
        </div>
        <div className="flex-container">
          <div className="flex-item">
            <div className="input-label">Task Description</div>
            <TextField
              error={!fieldIsValid.taskDescription}
              fullWidth
              onChange={(e) => changeHandler(e, "taskDescription")}
            />
          </div>
        </div>
        <div className="flex-container">
          <div className="flex-item">
            <div className="input-label">Due Date</div>
            <TextField
              type="date"
              error={!fieldIsValid.dueDate}
              fullWidth
              onChange={(e) => changeHandler(e, "dueDate")}
            />
          </div>
          <div className="flex-item">
            <div className="input-label">Priority</div>
            <TextField
              error={!fieldIsValid.priority}
              fullWidth
              onChange={(e) => changeHandler(e, "priority")}
            />
          </div>
        </div>
      </Paper>
      <Button
        variant="outlined"
        className="submit-button"
        onClick={handleSave}
        disabled={
          !fieldIsValid.userName ||
          !fieldIsValid.taskName ||
          !fieldIsValid.taskDescription ||
          !fieldIsValid.dueDate ||
          !fieldIsValid.priority
        }
      >
        Submit new Task
      </Button>
    </div>
  );
};
export default NewTasks;