var admin = require("firebase-admin");
var serviceAccount = require("../api/serviceAccount.json")

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://first-app-d7cf5-default-rtdb.firebaseio.com"
});

async function getUid(){
  const getUser=await admin.auth().listUsers()
  return getUser
}

var db=admin.database()

function setLogin(res,username,password){
  getUid().then(listUser=>{
    if(listUser.users!==undefined){
      listUser.users.forEach(uids=>{
        //part 1
        var path=db.ref(`users/${uids.uid}`)
        path.once("value",value=>{
          //part 2
          let getlist=value.val()
          if(getlist!=null){
            // part 3
            if(getlist.username==username&&getlist.password==password){
              if(res.headersSent!==true){
                res.redirect(`/account/${username}`)
              }
            }
            else{
              setTimeout(()=>{
                if(res.headersSent!==true){
                  res.render("index",{span:"password not found"})
                }
                if(res.headersSent!==true){
                  res.redirect("/")
                }
              },1500)
            }
            
          }
          else{
            setTimeout(()=>{
              if(res.headersSent!==true){
                res.render("index",{span:"password not found"})
              }
            },1500)
          }
        })
      })
    }
    else{
      console.info(false)
    }
  })
}

module.exports={
    setLogin
    
}