function timeTick(){
	var time = new Date(); //laver et nyt objekt af klassen Date
	var seconds = time.getSeconds(); //får sekunder
	var minutes = time.getMinutes(); //får minutter
	var hours = time.getHours(); //får timer

	//***KONVERTION TIL DECIMAL***//

	//Konverterer normale tidsenheder til decimalversionen.
	var decimalHours = ((10/24)*hours);
	var decimalMinutes = (((100/144)*minutes));
	var decimalSeconds = ((1.136*seconds));


	//Summer alle konvertionerne som sekunder
	var totalDecimalSeconds = decimalHours * 10000 + decimalMinutes * 100 + decimalSeconds;

	//Udregner timer, minutter og sekunder ud fra det totale antal sekunder.
	//Det er lidt af en omvej, men det gøres for at tage højde for overflow...
	//...(så man ikke får f.eks. 120 sekunder, når det maks kan være 100)

	decimalHours = Math.floor(totalDecimalSeconds / 10000);
	decimalMinutes = Math.floor((totalDecimalSeconds - (decimalHours*10000)) / 100);
	decimalSeconds = Math.floor((totalDecimalSeconds - (decimalHours*10000)) - (decimalMinutes*100));

	
	//******


	//sørger for at værdien altid er tocifret -> 7 sekunder bliver til 07 sekunder.
	if(decimalSeconds < 10) {
		decimalSeconds = "0" + decimalSeconds;
	}
	if(decimalMinutes < 10) {
		decimalMinutes = "0" + decimalMinutes;
	}

	var clockDisplay = (decimalHours + ":" + decimalMinutes + ":" + decimalSeconds);

	console.log(clockDisplay);
	console.log(totalDecimalSeconds);

	document.getElementById("clockDisplay").innerHTML = (clockDisplay);

	setTimeout(timeTick, 200);
}