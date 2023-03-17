import {initializeApp} from "firebase/app"
import {getAuth,signInWithPopup,GoogleAuthProvider} from "firebase/auth"
import {getStorage,uploadBytes,ref} from "firebase/storage"


const firebaseConfig = {
    apiKey: "AIzaSyCie5kmpUQdOdkwJGlIQKlZI2A7tIIAKyk",
    authDomain: "first-app-d7cf5.firebaseapp.com",
    databaseURL: "https://first-app-d7cf5-default-rtdb.firebaseio.com",
    projectId: "first-app-d7cf5",
    storageBucket: "first-app-d7cf5.appspot.com",
    messagingSenderId: "817155215154",
    appId: "1:817155215154:web:4850c0735826b4a92b912b"
}
let app=initializeApp(firebaseConfig)
let auth=getAuth(app)
let storage=getStorage(app)


let provider=new GoogleAuthProvider()

export function WithGoogle(){
    signInWithPopup(auth,provider)
    .then(re=>{
        let userName=re.user.displayName.split(" ")
        let storageRef=ref(storage,`users/${userName[0]+userName[1]}.ejs`)

        if(re.user.displayName){
            uploadBytes(storageRef)
            .then(file=>{
                console.info(file.metadata.name)
            })
            // location.reload()
            setTimeout(()=>{
                window.location.href=`user/${userName[0]+userName[1]}`
            },1500)
        }
    })
}


