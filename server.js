//server file
const express=require("express")
const path=require("path")
const bodyParser=require("body-parser")
const cheerio = require('cheerio');
const fs=require("fs")

const {Profile}=require("./src/server/toGetFile")
// const {signIn}=require("./src/server/account")


const App=express()
App.use(express.static(__dirname+`/public`))
App.use(bodyParser.urlencoded({extended:true}))
App.use(bodyParser.json())
App.set("views",path.join(__dirname+"/public/template"))
App.set(`view engine`,`ejs`)

let userId=00

App.get(`/`,(req,res)=>{
    res.render(`index`)
    
})

App.get(`/account/create`,(req,res)=>{
    res.render(`account/create`)
    
})


App.post("/account/profile",(req,res)=>{
    userId+=1
    // signIn(req.body)
    console.info(req.body)
    res.render("account/profile")
})
// App.post("/",(req,res)=>{
//     res.render('index')
// })
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
},1500)

fetch("https://raw.githubusercontent.com/SoltanHuseynov/basic-datas/main/localhost.json")
.then(res=>{
    return res.json()
}).then(data=>{
    App.listen(data.port[1],()=>{
        console.info(`http://${data.ip[0]}:${data.port[1]}`)
    })
    
})
