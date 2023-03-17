//server file
const express=require("express")
const path=require("path")
const bodyParser=require("body-parser")

const md5=require("md5")

const {Profile}=require("./src/server/toGetFile")
const {signIn}=require("./src/server/account")
const {setLogin}=require("./src/server/login")
const App=express()


App.use(express.static(__dirname+`/public`))
App.use(bodyParser.urlencoded({extended:true}))
App.use(bodyParser.json())
// App.use(layouts)
App.set("views",path.join(__dirname+"/public/template"))
App.set(`view engine`,`ejs`)



App.get(`/`,(req,res)=>{
    res.render(`index`,{span:undefined})
})

App.post("/",(req,res,next)=>{
    ProfileUser(req.body.username,true)
    setLogin(res,req.body.username,md5(req.body.password))
    
})

App.get(`/account/create`,(req,res)=>{
    res.render(`account/create`)
    
})

App.post("/account/create",(req,res)=>{
    signIn(req.body.username,req.body.email,req.body.password,req.body.phone)
    ProfileUser(req.body.username,false)
    setTimeout(()=>{
        res.redirect(`/account/${req.body.username}`)
    },2500)
})

function ProfileUser(user,loop){
    if(loop){
        App.get(`/account/${user}`,(req,res)=>{
            res.render(`account/${user}`)
        })
    }else{
        App.get(`/account/${user}`,(req,res)=>{
            res.render(`account/${user}`)
        })
    }
}

setTimeout(()=>{
    Profile().then(index=>{
        index.forEach(url=>{
            if(url!=null){
                App.get(`/user/${url}`,(req,res)=>{
                    res.render(`user/${url}`)
                })
            }else{
                return false
            }
        })
    })
},10)

fetch("https://raw.githubusercontent.com/SoltanHuseynov/basic-datas/main/localhost.json")
.then(res=>{
    return res.json()
}).then(data=>{
    App.listen(data.port[1],()=>{
        console.info(`http://${data.ip[0]}:${data.port[1]}`)
    })
    
})
