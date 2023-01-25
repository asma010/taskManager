import {Paper,Avatar,Typography,Button} from "@mui/material";
import React, { useState } from "react";
import EditDialog from "./EditDialog";

const Profile=()=>{

    const [currentUser,setCurrentUser]=useState({name:'Asma',description:'i am a software developper'});
    const [open, setOpen]=useState(false);

    const handleEditOpen=()=>{
        setOpen(true);
    };
    return(
        <>
        <Paper sx={{width:'80%', margin:'30px auto', padding:'20px', textAlign:'center'}}>
            <Avatar sx={{width: 100, height: 100, margin: "20px auto"}} src='https://i.pravatar.cc/100'/>
            <Typography variant='h4'>{currentUser.name}</Typography>
            <Typography varaiant='body1'>{currentUser.description}</Typography>
            <Button variant='outlined'  onClick={handleEditOpen}>Edit</Button>
        </Paper>
        <EditDialog open={open} setOpen={setOpen} setNewFieldValue={setCurrentUser} field={currentUser}/>
        </>
    )
};

export default Profile;