import {
  TextField,
  Button,
  Dialog,
  DialogActions,
  DialogTitle,
  DialogContentText,
  DialogContent,
} from "@mui/material";
import { useState } from "react";
//import Textfield from './Textfield';

export default function EditDialog({ open, setOpen, setNewFieldValue,field }) {
  //const [field,setField]=useState({name:'',description:''});
  
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Edit Profile"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Name
          </DialogContentText>
          <TextField
          value={field.name}
           disabled 
          />
          <DialogContentText id="alert-dialog-description">
            Description
          </DialogContentText>
          <TextField
          value={field.description}
            onChange={(e) =>
              setNewFieldValue((prevField) => {
                return { ...prevField, description: e.target.value };
              })
            }
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} autoFocus >
            CLOSE
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}