// const {getDatabase,set,ref,}=require("firebase/database")
// const {initializeApp}=require("firebase/app")
import {initializeApp} from "firebase/app"
// import {getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword} from "firebase/auth"
import {getDatabase,set,ref} from"firebase/database"

// const username =document.querySelector("[data-username]")

let app=initializeApp({
    apiKey: "AIzaSyCie5kmpUQdOdkwJGlIQKlZI2A7tIIAKyk",
    authDomain: "first-app-d7cf5.firebaseapp.com",
    databaseURL: "https://first-app-d7cf5-default-rtdb.firebaseio.com",
    projectId: "first-app-d7cf5",
    storageBucket: "first-app-d7cf5.appspot.com",
    messagingSenderId: "817155215154",
    appId: "1:817155215154:web:4850c0735826b4a92b912b"
})
let db=getDatabase(app)
// let auth=getAuth()
// let userID=000
export function signIn(person){
    // userID+=1

    set(ref(db,"users/"),{
        person
        //email:email
    })
}

// function signIn(email,password,iphone){
//     createUserWithEmailAndPassword(auth,email,password).then(user=>{
//         signInWithEmailAndPassword(auth,email,password)
//         .then(userCredential=>{
//             console.info(userCredential.user)
//         })
//     }).catch(error=>{
//         console.info(false)
//     })
// }


// module.exports={
//     signIn
// }
