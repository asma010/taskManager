import React,{useState,useEffect} from 'react';
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";
import Task from './Task';



const ShowTasks=()=>{
    
    const [tasks,setTasks]=useState([]);
    useEffect(
        ()=>{
            const getAllTasks=async()=>{
                const collectionRef=collection(db,'asma-tasks');
                const snapshot=await getDocs(collectionRef);
                const tempArray=[];
                snapshot.forEach((task)=>{
                    tempArray.push({...task.data(),id:task.id});
                });
                //console.log(tempArray);
                setTasks(tempArray);
            }
            getAllTasks();
        },
        []
    )
    return(

        <div>
            {tasks.map((task)=>(
                <Task key={task.id} task={task}/>
            ))}
        </div>
    )
};

export default ShowTasks;