import { Paper, Avatar, Typography, Button } from "@mui/material";
import React, { useState, useEffect } from "react";
import { auth, db } from '../firebase';
import { collection, doc, getDoc, getDocs, updateDoc } from 'firebase/firestore';
import EditDialog from "./EditDialog";
import Loading from "./Loading ";

const Profile = () => {
  const [open, setOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState({
    name: '',
    description: '',
    img: "https://i.pravatar.cc/100",
  });
  useEffect(() => {
    const fetchData = async () => {
      const currentUser = auth.currentUser;
      const docRef = doc(db, 'userInfo', currentUser.uid);//localStorage.getItem("userId")
      const snapshot = await getDoc(docRef);
      const fetchedData = snapshot.data();
      const updatedData = {
        ...fetchedData,
        imgUrl: currentUser?.photoURL
      };
      // console.log(updatedData)
      setData(updatedData);
      setIsLoading(false);
    }
    fetchData();
  }, [db])

  if (isLoading) {
    return <Loading isTaskLoading={false} />;
  }

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
          src={data.imgUrl}
        />
        <Typography variant="h4">{data.name}</Typography>
        <Typography varaiant="body1">{data.description}</Typography>
        <Button variant="outlined" onClick={() => setOpen(true)}>
          Edit
        </Button>
      </Paper>
      <EditDialog
        open={open}
        setOpen={setOpen}
        setNewFieldValue={setData}
        field={data}
      />
    </>
  );
};

export default Profile;
