	var a,b,result;
	var x, text;
	var memory = 0;

	function setValues() {
		a = Number(document.getElementById("a").value);
		b = Number(document.getElementById("b").value);
	}

	//sum ++++

	function sum() {
		setValues();
		result = a+b;
		x = document.getElementById("sum").value;

	if (result) {
		text ="The result is" + " " + result;
			
	} else if(isNaN(result)){ 
		text = "This is not a number, ANIKI SENPAI!";	
	
	}  else{return false;}
	   document.getElementById("demo").innerHTML = text;
	}

	//rest ----

	function rest() {
		setValues();
		result = a-b;
		x = document.getElementById("rest").value;

	if (result) {
		text ="The result is" + " " + result;
			
	} else if(isNaN(result)){ 
		text = "This is not a number, ANIKI SENPAI!";	
	
	}  else{return false;}
	   document.getElementById("demo").innerHTML = text;
	}

	//mult ****

	function mult() {
		setValues();
		result = a*b;
		x = document.getElementById("mult").value;

	if (result) {
		text ="The result is" + " " + result;
			
	} else if(isNaN(result)){ 
		text = "This is not a number, ANIKI SENPAI!";	
	
	}  else{return false;}
	   document.getElementById("demo").innerHTML = text;
	}

	// div ////

	function div() {
		setValues();
		result = a/b;
		x = document.getElementById("div").value;

	if (result) {
		text ="The result is" + " " + result;
			
	} else if(isNaN(result)){ 
		text = "This is not a number, ANIKI SENPAI!";	
	
	}  else{return false;}
	   document.getElementById("demo").innerHTML = text;
	}

	// memory 
	function cal(z) {
	x=eval(z.Input.value);
	z.Input.value=x;
	}
	function boom(z) {
	z.Input.value=" ";
	}

	function memoryrecall(z) {
	var memory = ;
	if (memory==0 ||{memory = ""}
	}

	function memorysub(z) {

	}
