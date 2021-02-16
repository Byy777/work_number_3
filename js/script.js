//burger menu
let  menuBtn = document.querySelector(".menu_btn");
let menu = document.querySelector("aside");
let  allContent=document.querySelector('.content')

function myFunction(x) {
	if(x.classList.toggle("change")){
		menu.style.display='block'
		allContent.style.display='none'

	}
	else{
		menu.style.display='none'
		allContent.style.display='block'
	}
	
}

//input value in uppercase
let nameCard=document.querySelector('.first_card_owner') 
nameCard.style.textTransform='uppercase'


//regular expressions, input checking
let reg_card_1=/^[0-9]{4}$/
let reg_card_2=/^[0-9]{4}$/
let reg_card_3=/^[0-9]{4}$/
let reg_card_4=/^[0-9]{4}$/
let reg_card_cvv=/^[0-9]{3}$/
let reg_ownerCard=/(^[a-zA-Z][a-zA-Z]{3,15}\s[a-zA-Z][a-zA-Z]{2,15})$/i

function check(id, reg){
	let st = document.getElementById(id);
	let v = document.getElementById(id).value;   
	
	if (reg.test(v) ){
	  st.style.border = '1px solid #8494AB';
	  return true;
	}
	else {
	  st.style.border = '1px solid red';
	  return false;
	}
}

//form validation
function submitFilled(){
	let card_cvv=document.querySelector('.second_card_cvv_number').style.border
	let card_n_inp1=document.getElementById('card_number_1').style.border
	let card_n_inp2=document.getElementById('card_number_2').style.border
	let card_n_inp3=document.getElementById('card_number_3').style.border
	let card_n_inp4=document.getElementById('card_number_4').style.border
	let card_owner_card=document.getElementById('ownerCard').style.border
	if(card_cvv=='1px solid red'){
		alert('Некоретный ввод "Код CVV2 / CVC2"')
	}
	else if(card_n_inp1=='1px solid red' || card_n_inp2=='1px solid red' || card_n_inp3=='1px solid red' || card_n_inp4=='1px solid red'){
		alert('Некорректный ввод "Номер карты"')
	}
	else if(card_owner_card=='1px solid red'){
		alert('Некорректный ввод "Держатель карты"')
	}
	else{
		alert('Форма отправлена усмешно!')
	}
}

