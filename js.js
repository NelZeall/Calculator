function pushButton(buttonValue) {
     if (buttonValue == 'C') {
          document.getElementById('screen').value = '';
     } 
     else {
          document.getElementById('screen').value += buttonValue;
     }
}

function calculate(equation) {
	var answer = eval(equation);
	var num = document.getElementById('screen').value;
	var memo = document.getElementById("mem").value += answer + "\n";
     if (answer = eval(equation)) {
     document.getElementById('screen').value = answer;
 	} else if(num = memo) {
     document.getElementById('screen').value = document.getElementById("mem").value += answer + "\n";
 } 
}

function doMath(){
	var inputNum1 = document.getElementById('screen').value;
	var answer = Math.sqrt(inputNum1);
	document.getElementById('screen').value = answer;
}

 
function memory() { 
	var ele = document.getElementById("mem"); 
	if(ele.style.display == "block") 
	{ 
	ele.style.display = "none"; 
	} 
	else { ele.style.display = "block"; 
	}
}

function doPercent() {
	var NewNumber = document.getElementById('screen').value;
	var Number2 = " " + NewNumber;
	if(NewNumber != "blank") {
	Number2 *= .01;
	NewNumber = "blank";
	calculate(Number2);
   }
}
