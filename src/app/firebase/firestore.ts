import { getFirestore } from "firebase/firestore";
import { app } from "./firebasedb";

const fireStore = getFirestore(app);
export default fireStore;
