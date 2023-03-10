const {getStorage,ref,listAll}=require("firebase/storage")
const {initializeApp}=require("firebase/app")
const {writeFileSync}=require("fs")

let app=initializeApp({
    apiKey: "AIzaSyCie5kmpUQdOdkwJGlIQKlZI2A7tIIAKyk",
    authDomain: "first-app-d7cf5.firebaseapp.com",
    databaseURL: "https://first-app-d7cf5-default-rtdb.firebaseio.com",
    projectId: "first-app-d7cf5",
    storageBucket: "first-app-d7cf5.appspot.com",
    messagingSenderId: "817155215154",
    appId: "1:817155215154:web:4850c0735826b4a92b912b"
})

let storage=getStorage(app)
let listRef=ref(storage,"users/")

async function Profile(){
    const file=await listAll(listRef)
    let user=[]
    file.items.forEach((itemRef)=>{
        if(itemRef.name!=null){
            let title=itemRef.name.replace(".ejs","")
            writeFileSync(`public/template/user/${itemRef.name.toString()}`,`<h1>${title}</h1>`)
            user.push(title)
        }else{
            return false
        }
    })
    return user
}
module.exports={
    Profile
}