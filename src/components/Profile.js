import { Paper, Avatar, Typography, Button } from "@mui/material";
import React, { useState } from "react";
import { useEffect } from "react";
import EditDialog from "./EditDialog";
import { userInfoAtom } from "../recoil/Atoms";
import { useRecoilValue } from "recoil";

const Profile = () => {
  const [open, setOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState({
    name: "user",
    description: "i am a software developper",
    img:"https://i.pravatar.cc/100",
  });
  const handleEditOpen = () => {
    setOpen(true);
  };
  const userInfo = useRecoilValue(userInfoAtom);
  //console.log(userInfo)
  useEffect(() => {
    if (userInfo) {
      setCurrentUser((prevVal) => {
        return { ...prevVal, name: userInfo.name, img:userInfo.imgUrl };
      });
    }
  }, []);

  /*useEffect(() => {//I have a problem here!
    if (user?.displayName) {
      setCurrentUser((prevVal) => {
        return { ...prevVal, name: user.displayName };
      });
    }
  }, []);*/

  return (
    <>
      <Paper
        sx={{
          width: "80%",
          margin: "30px auto",
          padding: "20px",
          textAlign: "center",
        }}
      >
        <Avatar
          sx={{ width: 100, height: 100, margin: "20px auto" }}
          src={currentUser.img} //{user.photoURL ? user.photoURL : "https://i.pravatar.cc/100"} //{user.photoURL} //"https://i.pravatar.cc/100"
        />
        <Typography variant="h4">{currentUser.name}</Typography>
        <Typography varaiant="body1">{currentUser.description}</Typography>
        <Button variant="outlined" onClick={handleEditOpen}>
          Edit
        </Button>
      </Paper>
      <EditDialog
        open={open}
        setOpen={setOpen}
        setNewFieldValue={setCurrentUser}
        field={currentUser}
      />
    </>
  );
};

export default Profile;
