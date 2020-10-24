function kalender() {
	//INITIALIZATION af variabler relateret til nuværende år
	var year = new Date().getFullYear(); //årstal
	var leapYear = false; //tjekker om skudår, initialiseres til false. 
	var yearLastTwoNumbers = year % 100; //sidste 2 tal i årstallet, virker ikke efter århundredeskiftet :(
	
	//for testing
	//year = 2063;

	//DAY DEFINITION
	var currentDate = new Date(); //datoen i dag
	var yearStart = new Date(currentDate.getFullYear(), 0, 0); //årets startdato
	var yearDiff = currentDate - yearStart; //forskellen mellem de to
	var oneDay = 1000 * 60 * 60 * 24; //en dag i sekunder
	var currentDay = Math.floor(yearDiff / oneDay); //finder den nuværende dags nummer	

	//for testing
	//currentDay = 265;

	//finder ud af om det er skudår
	if(year % 4 == 0)
	{
		leapYear = true;
	} else {
		currentDay -= 2;
	}

	currentDay +=0;

	console.log(currentDay);

	var currentMonth_rep;
	//MONTH DEFINITION
	if(currentDay <= 19 || currentDay >= 355) {
		currentMonth_rep = 1;
	} else if(currentDay > 19 && currentDay < 29) {
		currentMonth_rep = 2;
	} else {
		if(leapYear) {
			var temp_currentDay = currentDay + 4;
		} else {
			var temp_currentDay = currentDay + 5;
		}
		currentMonth_rep = Math.floor(((temp_currentDay)/ 30)+1);
	}
	console.log(currentMonth_rep);


	//DAYS OF CELEBRATION
	var dayHonors = []; //erklærer et array
	var dayOfHonor; //erklærer dagen som skal fejres

	//array over alle kalenderens måneder. Index 0 er sat til null så at måned 1 = Nivôse, for oversigthedens skyld
	var months_rep = [null, "Nivôse","Pluviôse","Ventôse","Germinal","Floréal","Prairial","Messidor","Thermidor","Fructidor","Vendémiaire","Brumaire","Frimaire"];
	currentMonth_rep = months_rep[currentMonth_rep]; //finder den nuværende måned
	console.log(currentMonth_rep);	
	
	//array over alle dage i det republikanske år ift. til vores år. Vores første dag er f.eks. den republikanske 12. i månededen "Nivôse"
	var dayOfMonth_rep = [null,"12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30","1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30","1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30","1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30","1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30","1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30","1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30","1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30","1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30","cel_virtue","cel_talent","cel_labour","cel_convict","cel_revolution","1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30","1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30","1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30","1","2","3","4","5","6","7","8","9","10","11"];
	if(leapYear) //indsætter en ekstra dag hvis det er skudår
	{
			dayOfMonth_rep.splice(260,0,"cel_honor");
	}

	currentDay_rep = dayOfMonth_rep[currentDay]; //finder ud af hvad for en dag på måneden det er
	console.log(currentDay_rep);
    
    //definerer fejrdagene ud fra hvilken måned det er
	switch(currentMonth_rep) {
		case("Nivôse"):
			dayHonors = [null,"Peat","Coal","Bitumen","Sulphur","the Dog","Lava","Topsoil","Manure","Saltpeter","Flail","Granite","Clay","Slate","Sandstone","the Rabbit","Flint","Marl","Limestone","Marble","the Winnowing Basket","Gypsum","Salt","Iron","Copper","the Cat","Tin","Lead","Zinc","Mercury","the Sieve"];
			document.getElementById("calenderImage").style.background  = "url(./Billeder/Seasons/season_1.jpg)";
			break;
		case("Pluviôse"):
			dayHonors = [null,"the Spurgle-Laurel","Moss","the Butcher's Broom","Snowdrop","the Bull","Laurustinus","Tinder Polypore","Daphne Mezereum","the Poplar","the Axe","the Hellebore","Broccoli","the Bay Laurel","the Filbert","the Cow","the Box Tree","the Lichen","the Yew Tree","the Lungwort","the Billhook","the Pennycress","the Rose Daphne","the Couch Grass","the Common Knotgrass","the Hare","the Woad","the Hazel","the Cyclamen","the Celandine","the Sleigh"];
			document.getElementById("calenderImage").style.background  = "url(./Billeder/Seasons/season_2.jpg)";
			break;
		case("Ventôse"):
			dayHonors = [null,"the Coltsfoot","Dogwood","the Matthiola","the Privet","the Billygoat","the Wild Ginger","the Italian Buckthorne","the Violet","the Goat Willow","the Spade","Narcissus","Elm","the Common Fumitory","the Hedge Mustard","the Goat","Spinach","Doronicum","the Pimpernel","the Chervil","the Twine","Mandrake","Parsley","Scurvy-Grass","the Daisy","Tuna","the Dandelion","the Wood Anemone","the Maidenhair Fern","the Ash Tree","the Dibber"];
			document.getElementById("calenderImage").style.background  = "url(./Billeder/Seasons/season_3.jpg)";
			break;
		case("Germinal"):
			dayHonors = [null,"the Primrose","the Plane Tree","Asparagus","the Tulip","the Hen","the Chard","Birch","the Daffodil","Alder","the Hatchery","the Periwinkle","the Hornbeam","the Morel","the Beech Tree","the Bee","Lettuce","Larch","Hemlock","the Radish","the Hive","the Judas Tree","the Romaine Lettuce","the Horse Chestnut","the Rocket","the Dove","the Lilac","the Anemone","the Pansy","Billberry","the Grafting Knife"];
			document.getElementById("calenderImage").style.background  = "url(./Billeder/Seasons/season_4.jpg)";
			break;
		case("Floréal"):
			dayHonors = [null,"the Rose","the Oak Tree","the Fern","the Hawthorn","the Nightingale","the Common Columbine","the Lily of the Valley","the Button Mushroom","Hyacinth","the Rake","Rhubarb","Sainfoin","the Wallflower","the Fan Palm Tree","the Silkworm","the Comfrey","the Salad Burnet","the Basket of Gold","the Orache","the Garden Hoe","Thrift","Fritillary","the Borage","the Valerian","the Carp","the Shrub","the Chive","the Bugloss","the Wild Mustard","the Shepherds Crook"];
			document.getElementById("calenderImage").style.background  = "url(./Billeder/Seasons/season_5.jpg)";
			break;
		case("Prairial"):
			dayHonors = [null,"Alfalfa","the Daylily","the Tréfle","Angelica","the Duck","the Lemon Balm","Oat Grass","the Martagon Lily","Wild Thyme","the Scythe","Strawberry","the Woundwort","the Pea","Acacia","the Quail","Carnation","the Elderberry","the Poppy","the Lime Tree","the Ptichfork","the Cornflower","the Camomile","the Honeysuckle","the Bedstraw","the Tench","Jasmine","Verbena","Thyme","Peony","the Handcart"];
			document.getElementById("calenderImage").style.background  = "url(./Billeder/Seasons/season_6.jpg)";
			break;
		case("Messidor"):
			dayHonors = [null,"Rye","Oat","the Onion","the Speedwell","the Mule","Rosemary","the Cucumber","the Shallot","the Wormwood","the Sickle","Coriander","the Artichoke","the Clove","Lavender","Chamois","Tobacco","the Redcurrant","the Hairy Vetchling","the Cherry","the Park","the Mint","Cumin","the Bean","Alkanet","the Guinafowl","the Sage","the Garlic","the Tare","Wheat","the Shawnm"];
			document.getElementById("calenderImage").style.background  = "url(./Billeder/Seasons/season_7.jpg)";
			break;
		case("Thermidor"):
			dayHonors = [null,"Spelt","the Common Mullein","the Melon","Ryegrass","the Ram","the Horsetail","Mugwort","the Safflower","the Blackberry","the Watering Can","the Foxtail Millet","the Common Glasswort","the Apricot","Basil","Sheep","the Marshmallow","the Flax","the Almond","the Gentian","the Lock","the Carline Thristle","the Caper","the Lentil","the Inula","the Otter","the Myrtle","Rapeseed","the Lupin","Cotton","the Mill"];
			document.getElementById("calenderImage").style.background  = "url(./Billeder/Seasons/season_8.jpg)";
			break;
		case("Fructidor"):
			dayHonors = [null,"the Plum","the Millet","the Puffball","the Six-row Barley","Salmon","the Tuberose","the Winter Barley","the Apocynum","Liquorice","the Ladder","the Watermelon","the Fennel","the European Barberry","the Walnut","the Trout","the Lemon","the Teasel","the Buckthorne","the Mexican Marigold","the Harvesting Bsket","the WIld Rose","the Hazelnut","Hops","the Sorghum","the Crayfish","the Bitter Orange","the Goldenrod","Maize","the Sweet Chestnut","the Sweet Chestnut"];
			document.getElementById("calenderImage").style.background  = "url(./Billeder/Seasons/season_9.jpg)";
			break;
		case("Vendémiaire"):
			dayHonors = [null,"the Raisin","Saffron","the Chestnut","the Autumn Crocus","the Horse","the Impatiens","the Carrot","the Amaranth","the Parsnip","the Vat","the Potato","the Strawflower","the Winter Squash","the Mignotte","the Donkey","the Marvel of Peru","the Pumpkin","the Buckwheat","the Sunflower","the Wine-Press","Hemp","the Peach","the Turnip","the Amaryllis","the Ox","the Eggplant","the Chili","the Tomato","Barley","the Barrel"];
			document.getElementById("calenderImage").style.background  = "url(./Billeder/Seasons/season_10.jpg)";
			break;
		case("Brumaire"):
			dayHonors = [null,"the Apple","the Celery","the Pear","the Beetroot","the Goose","the Heliotrope","the Common Fig","the Black Salsify","the Chequer Tree","the plough","the Salsify","the Water Chestnut","the Jerusalem Artichokr","the Endive","the Turkey","the Skirret","the Watercress","the Leadworts","the Pomegranate","the Harrow","Baccharis","Azarole","the Madder","the Orange","the Pheasant","the Pistachio","the Tuberous Pea","The Quince","the Service Tree","the Roller"];
			document.getElementById("calenderImage").style.background  = "url(./Billeder/Seasons/season_11.jpg)";
			break;
		case("Frimaire"):
			dayHonors = [null,"the Rampion","the Turnip","the Chicory","the Medlar","the Pig","the Lamb's Lettuce","the Cauliflower","Honey","the Juniper","the Pickaxe","Wax","Horseradish","the Cedar Tree","Fir","the Roe Deer","the Gorse","the Cypress Tree","Ivy","the Savin Juniper","the Grub Hoe","the Sugar Maple","Heather","the Reed Plant","the Sorrel","the Cricket","the Pine Nut","the Cork","the Truffle","the Olive","the Shovel"];
			document.getElementById("calenderImage").style.background  = "url(./Billeder/Seasons/season_12.jpg)";
			break;
	}

	document.getElementById("calenderImage").style.backgroundSize = "100%"; //sørger for at baggrunden er den rigtige størrelse, det blvier lidt messed up når man ændrer den med javascript

	dayOfHonor = dayHonors[currentDay_rep]; //definerer hvad der skal fejres i dag



	var frenchDay = currentDay_rep.toString().slice(-1); //finder den sidste værdi i dagen
	var frenchDay = parseInt(frenchDay,10); //konverterer tilbage til et tal, så kan bruges i mappen
	var decadeFrench;

	if(currentDay_rep < 10) { //if less than 10, it is the first week
		decadeFrench = "first"; 
		document.getElementById("honorOfTheDay").innerHTML = ("day of " + dayOfHonor);
	} else if(currentDay_rep >= 20) { //if greater than 20, it is the third and final week
		decadeFrench = "third"; 
		document.getElementById("honorOfTheDay").innerHTML = ("day of " + dayOfHonor);
	} else if (currentDay_rep >= 10 && currentDay_rep < 20) { //if it is neither, it must be the second week
		decadeFrench = "second";
		document.getElementById("honorOfTheDay").innerHTML = ("day of " + dayOfHonor);
	}

	//DEFINES THE PHASE OF THE CURRENT DECADE
	var frenchNameDays = new Map([
			[1,"Primidi of the "],
			[2,"Duodi of the "],
			[3,"Tridi of the "],
			[4,"Quartidi of the "],
			[5,"Quintidi of the "],
			[6,"Sextidi of the "],
			[7,"Septidi of the "],
			[8,"Octidi of the "],
			[9,"Nonidi of the "],
			[0,"Décadi of the "],

		]);

	var frenchDayName = frenchNameDays.get(frenchDay);

	//TEST FOR DAY OF CELEBRATIONS

	var republicanYear = year + 753; //år siden Rom blev grundlagt
	var frenchYear = year - 1792; //år siden den franske revolution

	//hvis det er en æresdag, så vil den specifikke dags tekst udskrives.
	//som defualt er det ikke en æresdag, og den normale tekst vil udskrives i det case.
	switch(currentDay_rep) {
		case("cel_honor"):
			frenchDayName = "Sansculottide for Honor,";
			document.getElementById("dayAndMonth").innerHTML = (frenchDayName);
			document.getElementById("honorOfTheDay").innerHTML = ("in the year " + republicanYear + " of the city of Rome");
			break;
		case("cel_virtue"):
			frenchDayName = "Sansculottide for Virtue";
			document.getElementById("dayAndMonth").innerHTML = (frenchDayName);
			document.getElementById("honorOfTheDay").innerHTML = ("in the year " + republicanYear + " of the city of Rome");
			break;
		case("cel_talent"):
			frenchDayName = "Sansculottide for Talent";
			document.getElementById("dayAndMonth").innerHTML = (frenchDayName);
			document.getElementById("honorOfTheDay").innerHTML = ("in the year " + republicanYear + " of the city of Rome");
			break;
		case("cel_labour"):
			frenchDayName = "Sansculottide for Labour";
			document.getElementById("dayAndMonth").innerHTML = (frenchDayName);
			document.getElementById("honorOfTheDay").innerHTML = ("in the year " + republicanYear + " of the city of Rome");
			break;
		case("cel_convict"):
			frenchDayName = "Sansculottide for Conviction";
			document.getElementById("dayAndMonth").innerHTML = (frenchDayName);
			document.getElementById("honorOfTheDay").innerHTML = ("in the year " + republicanYear + " of the city of Rome");
			break;
		case("cel_revolution"):
			frenchDayName = "Sansculottide for the Revolution";
			document.getElementById("dayAndMonth").innerHTML = (frenchDayName);
			document.getElementById("honorOfTheDay").innerHTML = ("in the year " + frenchYear + " since the Revolution");
			break;
		default:
			document.getElementById("dayAndMonth").innerHTML = (frenchDayName + decadeFrench + " week of " + currentMonth_rep + ",");
			break;
	}
}
