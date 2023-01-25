import React from "react";
import NavBar from "./NavBar";
import NewTasks from './NewTasks';
import ShowTasks from "./ShowTasks";
import { loggedInAtom } from "../recoil/atoms";
import { useRecoilValue } from "recoil";

const TasksContainer=()=>{
    const loggedIn=useRecoilValue(loggedInAtom);
    //console.log(loggedIn);
    return (
        <>
    
        <NavBar/>
        <NewTasks/> 
        <ShowTasks/>

        </>
    )

}

export default TasksContainer;