import "../public/css/style.css"
import "../public/jqu/script"
import { WithGoogle} from "./server/db"
// import { signIn} from "./server/account"

let form=document.getElementById("idform")
let form2=document.getElementById("test")

$("#event").click(()=>{
    console.info(form)
    WithGoogle()
    
})


// $("#link").click(()=>{
//     form.action="account/create"
//     form.method="post"
// })

$("[data-end]").click(()=>{
    form2.action="profile"
    form2.method="post"
    
})
// signIn(form2.innerText)