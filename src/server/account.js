const {getDatabase,set,ref}=require("firebase/database")
const {initializeApp}=require("firebase/app")
const {writeFileSync}=require("fs")
const {getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword}=require("firebase/auth")

const md5=require("md5")

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
let auth=getAuth()

function html(user){
    let body=`
        <html>
            <head>
                <meta charset="utf-8">
                <meta name="viewport" content="width=device-width, initial-scale=1">
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-icons/1.10.3/font/bootstrap-icons.min.css">
            </head>
            <body>
                <div class="div-h1">
                    <h1><i class="bi bi-person"></i>${user}</h1>
                </div>
            </body>
            <style>
                .div-h1{
                    border: 1px solid ;
                    border-radius: 10px;
                    margin: 20px;
                    width: 30%;
                    height: 50;
                }
                .div-h1 h1{
                    text-align: center;
                    margin: 2%;
                    font-weight: 600;
                }
                i{
                    margin-right: 5%
                }
                .div-h1 h1 i:hover{
                    color: red;
                }
            </style>
        <html>
    `
    return body
}

function signIn(username,email,password,phone){
    if(email!=(undefined||null)&&password!=(undefined||null)){
        createUserWithEmailAndPassword(auth,email,password).then(user=>{
            signInWithEmailAndPassword(auth,email,password)
            if(user.user.reloadUserInfo.localId!=undefined){
                Create(user.user.reloadUserInfo.localId,username,email,password,phone)
                writeFileSync(`public/template/account/${username}.ejs`,html(username))
                // console.info(user.user.reloadUserInfo.localId)
            }
            else{
                return false
            }
            return user
        })
        .catch(error=>{
            if(error){
                return false
            }
        })
    }else{
        return false
    }
}


function Create(url,username,email,password,phone){
    let path=ref(db,"users/"+url)
    set(path,{
        username:username,
        email:email,
        password:md5(password),
        phone:phone
    })
    
}

module.exports={
    signIn,
}
