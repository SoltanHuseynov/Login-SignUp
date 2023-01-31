//server file

const express=require("express")

const App=express()
App.use(express.static(__dirname+`/public`))
App.set(`view engine`,`ejs`)


App.get(`/`,(req,res)=>{
   res.render(`page/index`)
})
App.get(`/account/create`,(req,res)=>{
    res.render(`page/account/create`)
})
App.get(`/account/flag`,(req,res)=>{
    res.render(`page/account/flag`)
})


fetch("https://raw.githubusercontent.com/SoltanHuseynov/basic-datas/main/test1.json")
.then(res=>{
    return res.json()
}).then(data=>{
    App.listen(data.port[0],"192.168.1.105",()=>{
        console.info(`http://192.168.1.105:${data.port[0]}`)
    })
    
})
