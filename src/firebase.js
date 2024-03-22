import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyCqNTIdyA5u2-t5P6XkYyyDwqj_fIgpvsI",
    authDomain: "marigold-media-5eaba.firebaseapp.com",
    projectId: "marigold-media-5eaba",
    storageBucket: "marigold-media-5eaba.appspot.com",
    messagingSenderId: "150373673890",
    appId: "1:150373673890:web:fa87e366abbf8366fea0fb",
    measurementId: "G-GVNRJH6GXL"
};

const app = initializeApp(firebaseConfig);
export { app };
