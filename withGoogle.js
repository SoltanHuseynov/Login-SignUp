import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-app.js"
import { getAuth,GoogleAuthProvider, signInWithPopup, } from 'https://www.gstatic.com/firebasejs/9.17.2/firebase-auth.js'

const firebaseConfig={
    apiKey: "AIzaSyCie5kmpUQdOdkwJGlIQKlZI2A7tIIAKyk",
    authDomain: "first-app-d7cf5.firebaseapp.com",
    databaseURL: "https://first-app-d7cf5-default-rtdb.firebaseio.com",
    projectId: "first-app-d7cf5",
    storageBucket: "first-app-d7cf5.appspot.com",
    messagingSenderId: "817155215154",
    appId: "1:817155215154:web:4850c0735826b4a92b912b"
}
const app=initializeApp(firebaseConfig)
const auth=getAuth(app)
const provider=new GoogleAuthProvider()

function Google(){
    signInWithPopup(auth,provider)
    .then(result=>{
        console.info(result.user.displayName)
        if(result.user.displayName){
            window.location.href="/profile"
           
        }
    })
}


let button=document.getElementById("event")
button.addEventListener("click",()=>{
    Google()
    console.info(ProfileUser)
})