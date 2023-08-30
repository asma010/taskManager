import {
  TextField,
  Button,
  Dialog,
  DialogActions,
  DialogTitle,
  DialogContentText,
  DialogContent,
} from "@mui/material";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../firebase";

export default function EditDialog({ open, setOpen, setNewFieldValue, field }) {
  const handleClose = async () => {
    const docRef = doc(db, 'userInfo', localStorage.getItem('userId'));
    await updateDoc(docRef, field);
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
            onChange={(e) =>
              setNewFieldValue((prevField) => ({
                ...prevField,
                name: e.target.value,
              }))
            }
          />
          <DialogContentText id="alert-dialog-description">
            Description
          </DialogContentText>
          <TextField
            value={field.description}
            onChange={(e) =>
              setNewFieldValue((prevField) => ({
                ...prevField,
                description: e.target.value,
              }))
            }
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} autoFocus>
            CLOSE
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
