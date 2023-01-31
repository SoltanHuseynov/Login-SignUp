let off=false
$(`.active`).css("border","1px solid #0d6efd")
$(`.active`).click(()=>{
	$(`.active`).css("border","1px solid #0d6efd")
	$(`.dropdown-toggle`).css("border","none")
	$(`.dropdown-menu`).css("display","none")
	$(`.link`).css("border","none")	
	$(`.display`).css("border","none")
})

$(`.dropdown-toggle`).click(()=>{
    $(`.dropdown-toggle`).css("border","1px solid #0d6efd")
	$(`.dropdown-menu`).slideToggle(500)	 	
	$(`.active`).css("border","none")
	$(`.link`).css("border","none")
	$(`.display`).css("border","none")
	 
})
$(`.link`).click(()=>{
	$(`.link`).css("border","1px solid #0d6efd")
	$(`.dropdown-toggle`).css("border","none")
	$(`.dropdown-menu`).css("display","none")
	$(`.active`).css("border","none")
	$(`.display`).css("border","none")
})
$(`.display`).click(()=>{
	$(`.display`).css("border","1px solid #0d6efd")
	$(`.dropdown-toggle`).css("border","none")
	$(`.dropdown-menu`).css("display","none")
	$(`.active`).css("border","none")
	$(`.link`).css("border","none")
	
})

$(`button`).click(()=>{
	$(`.data`).load(`https://raw.githubusercontent.com/SoltanHuseynov/basic-datas/main/PersonID.txt`)
})

console.log("over runing...")
