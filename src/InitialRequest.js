import { useEffect } from "react";
import { db } from "./firebase";
import { dataAtom } from "./recoil/Atoms";
import { collection, getDocs } from "firebase/firestore";
import { useSetRecoilState } from "recoil";

export default function InitialRequest() {
  const setData = useSetRecoilState(dataAtom);
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
      setData(tempArray);
    };

    setData(null);
    getAllData();
  }, [setData, getDocs]);


  return null;
}
