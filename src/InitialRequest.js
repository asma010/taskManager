import { useEffect } from "react";
import { db } from "./firebase";
import { dataAtom, userInfoAtom } from "./recoil/Atoms";
import { collection, getDocs } from "firebase/firestore";
import { useSetRecoilState } from "recoil";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";

export default function InitialRequest() {
  const setData = useSetRecoilState(dataAtom);
  const setUserAuth = useSetRecoilState(userInfoAtom);
  useEffect(() => {
    if (!localStorage.getItem("isLoggedIn")) return null;
    const getAllData = async () => {
      const collectionRef = collection(db, "asma-tasks");
      const snapshot = await getDocs(collectionRef);
      const tempArray = [];
      snapshot.forEach((d) => {
        if (d.data().userId === localStorage.getItem("userId"))
          tempArray.push({ ...d.data(), id: d.userId });
      });
      //console.log(tempArray);
      setData(tempArray);
    };
    setData(null);
    getAllData();
  }, [setData, getDocs]);

  useEffect(() => {
    const getUserAuth = onAuthStateChanged(auth, (currentUser) => {
      //setUser(currentUser);
      if (localStorage.getItem("isLoggedIn") === "yes") {
        const tempArray = {
          name: currentUser?.displayName,
          email: currentUser?.email,
          imgUrl: currentUser?.photoURL,
        };
        setUserAuth(tempArray);
        console.log(tempArray);
      }
    });
    return () => {
      getUserAuth();
    };
  }, []);

  return null;
}
