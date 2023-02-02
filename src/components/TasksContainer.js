import React,{useEffect} from "react";
import NavBar from "./NavBar";
import NewTasks from "./NewTasks";
import ShowTasks from "./ShowTasks";

const TasksContainer = () => {
  //const loggedIn=useRecoilValue(loggedInAtom);
  //console.log(loggedIn);
  return (
    <>
      <NavBar />
      <NewTasks />
      <ShowTasks />
    </>
  );
};

export default TasksContainer;
