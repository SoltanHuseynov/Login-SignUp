//this step is Query
//when the user clicks on the sign up   
$(`#link`).click(()=>{
	window.location.href="/account/create"
})


//step2:password button
let reg=/[a-z|A-Z,.!{}:";'`!&*]/g
$(`#phone`).keypress(()=>{
	let value=$(`#phone`).val()//to get value 
	let getReg=reg.test(value)//to get true or false
	if(value.match(reg)!=null){
		if(getReg==true){
			$(`#phone`).val("")
			$(`#phone`).attr(`maxlength`,0)
		}
	}
	else{
		$(`#phone`).attr(`maxlength`,20)
	}
	
})

//step3:Iphone number button
//to get select 
let off=false
$(`#code-bar`).click(()=>{
	$(`.bar-list`).toggle()
	
	// if(off){
		// $(`.option-list`).css("display","block")
		// off=false
	// }else{
		// off=true
		// $(`.option-list`).css("display","none")
	// }
	
})
$(`#phone`).click(()=>{$(`.bar-list`).css("display","none")})

$.getJSON(`https://raw.githubusercontent.com/SoltanHuseynov/basic-datas/main/country-phone-code.json`,(data)=>{
	let yIndex=0
	let index=0
	for(yIndex;yIndex<data.length;yIndex++){
		index+=1
		$(`.bar-list`).append("<div class=nav-list id=get-list"+index+"><img src="+data[yIndex].image+" width=25/><span>"+data[yIndex].code+"</span></div>")
		//$(`.nav-list`).attr("id",index+1)
		//$(`span`).attr("name","data-list")
		$('#get-list'+index).click($value=>{
				$(`#phone`).val(`(${$value.target.innerText}) `)
				$(`.data-list`).attr("src",$value.currentTarget.childNodes[0].src)
				$(`.bar-list`).css("display","none")
				
		})
				
	}
	 $(`#phone`).val(`(${data[0].code}) `)
})

// step4: to create mulit step of the form with the animation 
const getForm=$(`[data-multi-step]`)
const getSteps=[...getForm.find(`[data-step]`)]//to specified a array with step
//Validity
const formGroup=$(`[data-input]`)
const inputGroup=[...formGroup.find(`input`)]
// to get index from the step array
let getIndex=getSteps.findIndex(step=>{
	return step.classList.contains("active")//if it has active,to make true or false
})

//if this is ,the index will take 0  
if(getIndex<0){
	getIndex=0
	showSteps()// will be active into this
}
//this step is Validity in the input
function Validity(event){
	inputGroup.forEach(index=>{
		if(event){
			index.setAttribute(`required`,``)
		}else{
			index.removeAttribute(`required`)
		
		}
		
	})
}
// to build of click on the Form Element
getForm.click("click",v=>{
	let count
	if (v.target.matches(`[data-next]`)){
		ValidityPass()
		count=1
		Validity(true)
	}else if(v.target.matches(`[data-back]`)){
		NormalStream()
		count=-1
		Validity(false)
	}
	if(count== null)return
	/* 
		this check validity to input.
		if there is no  value to the input, this will return 'false'
	 	or there are these value ,that will return `true`.								
	*/
	const getInput=[...getSteps[getIndex].querySelectorAll(`input`)]
	let getValid=getInput.every(input=>{
		input.checkValidity()
		return input.reportValidity()
	})
	if(getValid){
		getIndex+=count
		showSteps()
	
	}else{
		return false
	}

})
// it is make animationed event
getSteps.forEach(value=>{
	value.addEventListener("animationend",event=>{
		// it's delete `hide class` from the form box
		getSteps[getIndex].classList.remove("hide")
		//if the class list not contains `active`,
		//there will add hide class into the form box.  
		event.target.classList.toggle("hide", !event.target.classList.contains("active"))
	})
	
})

/* 
 to generate the active class and to be  equal  index to the getIndex,
 so it's  specified the index into the form. And getIndex=0 because 
 ths is equal index=0 in the first step of the form and 
 that is show to first step into the form.
 if it the start event,it'll show the next step of the form 
 and it will add the active value there,
 like this `index(1)==getIndex(1)`.
*/
function showSteps(){
	getSteps.forEach((step,index)=>{
		step.classList.toggle('active',index==getIndex)
	
	})
}

//the password validity
const getPass=[...$(`[data-password]`)]
//password show from the main page
$(`.eye-one`).click(()=>{
	let type=$(`#passShow`).attr('type') == `password`? 'text':`password`
	$(`#passShow`).attr(`type`,type)
	$('.eye-one').toggleClass(`bi-eye-slash-fill`)
})

let span=document.createElement("span")
span.style.color="red"
span.style.textAlign="center"
span.innerHTML="the charset must be 6 in length"

function ValidityPass(){
	if(getPass[0].value.length<6&&getPass[1].value.length<6&&getPass[0].value.length!=0){
		formGroup[1].appendChild(span)
		getPass[0].style.border="2px solid red"
		getPass[1].style.border="2px solid red"
		getIndex=0
	}
	else if(getPass[0].value===getPass[1].value){		
		return true
	}
	else if(getPass[0].value.length<6&&getPass[0].value.length!=0){
		getPass[0].style.border="2px solid red"
		getPass[1].style.border="none"
		formGroup[1].appendChild(span)
		getIndex=0
	}
	else if(getPass[1].value.length<6&&getPass[1].value.length!=0){
		getPass[1].style.border="2px solid red"
		getPass[0].style.border="none"
		formGroup[1].appendChild(span)
		getIndex=0
	}
	else{
	 	getIndex=0
		getPass[0].style.border="2px solid red"
		getPass[1].style.border="2px solid red"
		span.remove()
	}
}

function NormalStream(){
	getPass[0].style.border="none"
	getPass[1].style.border="none"
	span.remove()
}

//password show 
$(`.eye`).click(()=>{
	let type=getPass[0].getAttribute(`type`) == `password`? `text`:`password`
	getPass[0].setAttribute('type',type)
	getPass[1].setAttribute('type',type)
	$(`.eye`).toggleClass(`bi-eye-slash-fill`)
	
})
