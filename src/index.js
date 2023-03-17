import "../public/css/style.css"
import "../public/jqu/script"
import { WithGoogle} from "./server/authGoogle"

//that is google authenticate 
$("#event").click(()=>{
    WithGoogle()
    
})
