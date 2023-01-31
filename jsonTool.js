const fs=require("fs")

fetch(`https://raw.githubusercontent.com/SoltanHuseynov/basic-datas/main/country-phone-code.json`)
.then(response=>response.json())
.then(code1=>{
	fetch(`https://gist.githubusercontent.com/doersdf/021e2e18e83f33d16fee5daa308e6a4e/raw/fc6fd9127efd12d97a3d39f38befc784d6bcbf22/countryPhoneCodes.json`)
	.then(response=>response.json())
	.then(code2=>{
		let tel
		for(var z=0;z<code1.length;z++){
			for(var x=0;x<code2.length;x++){
				if(code1[z].name==code2[x].country){
					code1[z].code="+"+code2[x].code
					jsonString=JSON.stringify(code1[z])
					console.info(jsonString)
					//console.info(JSON.stringify(code1[z]))
					
				}
			}
		}
		// tel=JSON.parse(code1[0])
		// jsonString=JSON.stringify(code1[0])
		// console.info(jsonString)
		// fs.writeFile("CountryTel.json",tel,(err)=>{
			// if(err) throw err
		// })
		console.info(code1.length,code2.length)
	})
})
