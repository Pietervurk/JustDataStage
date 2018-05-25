var svgmodule = (function($){
	
	test = function(){
		// test space for functiontesting

		newSection(250,100,50,5);
		newSection(150,100,50,5);
		newSection(150,100,50,4);
		newSection(250,100,50,10);
		prepRackPlanks();
		prepRackPillar();
		drawRack();
		return stellingkast;

	}


	var initModule, newSection, getarray, addSection, newrack, drawArrows;
	var drawRack,test, ChangeRackDepth,drawPillar,DropDown,drawPlanks,prepRackPillar, prepRackPlanks,ChangeHeightWidthSection, clearsvg, getValuesFromDropDown, closeDropDown, drawWeight, removeWeight, removeAlert,drawAlert, sectionLocation,test2, calculatePrice;


	//svg variabelen
	var svgns = "http://www.w3.org/2000/svg";
	var draw = SVG('svgcanvas');

	//variabelen die te maken hebben met de stellingkast
	var stellingkast = [];
	stellingkast.secties = [];
	//stellingkast.accesoires = []; tijdelijk overbodig. is voor slepen accesoires.
	stellingkast.depth = 0;
	var pillars = [];
	var maxHoogte=0;

	//variabelen om tijdelijk de stellingkast variabelen op te slaan
	var Hoogte,Breedte,Lengte,Diepte,Legborden;
	var height,Width,length,depth,planks;
	
	//default variabelen
	var DefaultWidth;
	var defaultPillarWidth;
	var defaultPlankWidth;
	var currentSection;
	
	//deze functie initialiseerd de default waarden
	initModule = function(){
		DefaultWidth = 100;
		defaultPillarWidth = 5;
		defaultPlankWidth = 4;
		currentSection = -1;

	};

	//deze functie maakt de stellingkast met de waarden die aan het begin zijn ingevoerd
	newrack = function(){
		getValuesFromHTML();
		document.getElementById("invoertr").style.display = "none";
		document.getElementById("invisible-row").style.display = "none";
		//calculate ammount of secties needed for default 100cm width.
		//loop add all secties to list
		if(Lengte > DefaultWidth){ // variabele aantal secties
				for(i=0; i< Lengte/DefaultWidth; i++){
					newSection(Hoogte,Breedte,Diepte,Legborden);
				}
		}else{ // single section
			newSection(Hoogte,Breedte,Diepte,Legborden);
		}
		//tekent de stellingkast
		prepRackPlanks();
		prepRackPillar();
		drawRack();
		
	}

	prepRackPillar = function(){
		pillars = [];
		var totalwidth = 0;
		//calculates amount of pillars and where to place them.
		// puts in array with pillar object(height,location)

		for(i=0; i<stellingkast.secties.length+1; i++){
			
			if(i == 0){ // first pole.
				pillars.push({name:"pilaar " + (pillars.length+1), height:stellingkast.secties[i].height, position:0});
				totalwidth += stellingkast.secties[i].width;
			}else if(i> 0 && i < stellingkast.secties.length){// every pillar inbetween
				if(stellingkast.secties[i-1].height > stellingkast.secties[i].height){
					pillars.push({name:"pilaar "+(pillars.length+1), height:stellingkast.secties[i-1].height, position:totalwidth+(i*defaultPillarWidth)});
					totalwidth += stellingkast.secties[i].width;
					}else if(stellingkast.secties[i-1].height < stellingkast.secties[i].height){
						pillars.push({name:"pilaar "+(pillars.length+1), height:stellingkast.secties[i].height, position:totalwidth+(i*defaultPillarWidth)});
						totalwidth += stellingkast.secties[i].width;
					}else if(stellingkast.secties[i-1].height == stellingkast.secties[i].height){
						pillars.push({name:"pilaar "+(pillars.length+1), height:stellingkast.secties[i].height, position:totalwidth+(i*defaultPillarWidth)});
						totalwidth += stellingkast.secties[i].width;
					}
				}else{//last pillar
					//totalwidth += stellingkast.secties[i-1].width;
						pillars.push({name:"pilaar "+(pillars.length+1), height:stellingkast.secties[i-1].height, position:totalwidth+(i*defaultPillarWidth)});
					}
		}
	}

	prepRackPlanks = function(){
		stellingkast.secties.forEach(function(section){
			j=parseInt(section.name.replace("sectie ", ""))
			i=1;
			if (section.planken.length == 0){
				var hoogteverschil = section.height/section.planks;
				while (i <= section.planks) {
					
						section.planken.push({name:("plank "+j+"."+i) , height:hoogteverschil*(i-1)});
						i++;
					}
				
			}
			j++;
		});
	}

	drawRack = function(){
		drawPillar();
		drawPlanks();
		drawAddSection();
		drawArrows();
	}

	drawAddSection = function(){
		var x = pillars[pillars.length-1].position+37.5;
		var y = 25;
		var height = 0;
		var width = 20;
		stellingkast.secties.forEach(function(section){
			if(section.height > height){
				height = section.height;
			}
		})
		var addSection = document.getElementById("addSection");
		addSection.style.display = "block";
		addSection.style.marginTop = y+"px";
		addSection.style.marginLeft = x+"px";
		addSection.style.height = height+"px";
		addSection.style.lineHeight = height+"px";
		addSection.style.width = width+"px";
		addSection.setAttribute("onclick","svgmodule.addSection()")
	}
	drawWeight = function(plankname){
		var weightdiv = document.getElementById("weight");
		var weightspan = document.getElementById("weightspan");
		if(stellingkast.depth <= 50){
			weightspan.innerHTML = 80;
		}else{
			weightspan.innerHTML = 150;
		}
		var plank=document.getElementsByName(plankname)[0];
		// var plank=document.getElementById(id);
		var x=plank.x.baseVal.value;
		var y=plank.y.animVal.value;
		weightdiv.style.display = "inline-block";
		weightdiv.style.marginTop = (y-25) + "px";
		weightdiv.style.marginLeft = (x+5) + "px";
		savePlankHeight(y,plankname);
	}
	removeWeight = function(){
		var weightdiv = document.getElementById("weight");
		setTimeout(function() {
			weightdiv.style.display = "none"
		  }, 500);
		;
	}

	savePlankHeight = function(y,plankname){
		stellingkast.secties.forEach(function(section){
			section.planken.forEach(function(plank){
				if(plank.name == plankname){
					
					plank.height = -y+section.height+15+(maxHoogte-section.height);;
				}
			})
		})
	}

	addSection = function(){
		section = stellingkast.secties[stellingkast.secties.length-1];
		newSection(section.height,section.width,stellingkast.depth,section.planks);
		prepRackPillar();
		prepRackPlanks();
		clearsvg();
		drawRack();
	}
	removeSection = function(){
		if(stellingkast.secties.length > 1 && stellingkast.secties.length > currentSection){
			//drawAlert("removing section with index " + currentSection,0,true)
			stellingkast.secties.splice(currentSection, 1);
		}else{
			drawAlert("can't delete current section because it either is the last one standing or it is already deleted",0,false);
		}

		prepRackPillar();
		prepRackPlanks();
		clearsvg();
		drawRack();
	}
	drawAlert=function(text, delay, boolean){
		//delay 0 is geen delay, boolean true is good alert boolean flase is error alert
		var alert = document.getElementById("alert");
		var alertSpan = document.getElementById("alert-span");
		alertSpan.innerHTML=text;
		if (boolean==true){
			alert.style.backgroundColor="lightgreen";
		}else{
			alert.style.backgroundColor="lightcoral";
		}
		alert.style.display="inline-block";
		if(delay!=0){
			setTimeout(function() {
			alert.style.display = "none"
			}, delay);
		}
		

	}
	removeAlert=function(){
		var alert = document.getElementById("alert");
		alert.style.display="none";
	}

	drawPillar= function(){
		var hoogte = 0;
		var j = 0;
		var voegSectieToeAfstand = 0;
		stellingkast.secties.forEach(function(section){
			if(section.height > hoogte){
				hoogte=section.height;
			}
		})
		stellingkast.secties.forEach(function(section){
			var rect = document.createElementNS(svgns, 'rect');
			rect.setAttributeNS(null, 'name', section.name);
			rect.setAttributeNS(null, 'x', pillars[j].position + 25);
			rect.setAttributeNS(null, 'y', hoogte + 25-section.height);
			rect.setAttributeNS(null, 'height', section.height);
			rect.setAttributeNS(null, 'width', (pillars[j+1].position - pillars[j].position-5) + (2 * defaultPillarWidth));
			rect.setAttribute('onmouseover', 'svgmodule.DropDown('+ (pillars[j].position + 25) +','+ (hoogte + 25) + ','+(j)+')');
			rect.setAttribute('class', 'background');
			document.getElementById("svgcanvas").appendChild(rect);
			j++;
		})
		pillars.forEach(function(pillar) {
			var rect = document.createElementNS(svgns, 'rect');
			rect.setAttributeNS(null, 'name', pillar.name);
			rect.setAttributeNS(null, 'x', pillar.position + 25);
			rect.setAttributeNS(null, 'y', hoogte + 25-pillar.height);
			rect.setAttributeNS(null, 'height', pillar.height);
			rect.setAttributeNS(null, 'width', defaultPillarWidth);
			rect.setAttributeNS(null, 'fill', '#112112');
			document.getElementById('svgcanvas').appendChild(rect);
			if(pillar.position > voegSectieToeAfstand){
				voegSectieToeAfstand = pillar.position+35;
			}
		})
		
	}

	drawPlanks = function(){
		var hoogte = 0;
		var lengthFromSide =0;
		var i=0;
		stellingkast.secties.forEach(function(section){
			if(section.height > hoogte){
				hoogte=section.height;
			}
		})
		stellingkast.secties.forEach(function(section){	
			section.planken.forEach(function(plank){
				lengthFromSide=pillars[i].position+defaultPillarWidth+25;
				var rect = draw.rect(section.width,defaultPlankWidth);
				rect.attr({name: plank.name, x: lengthFromSide, y: hoogte + 15-plank.height, fill: '#454545', style:"cursor:row-resize",onmouseenter:'svgmodule.drawWeight("'+plank.name+'")', ondragend:'svgmodule.drawWeight("'+plank.name+'")',onmouseleave:"svgmodule.removeWeight()"});
				rect.draggable({minX: lengthFromSide, minY: hoogte-section.height+25, maxX: lengthFromSide + section.width, maxY: hoogte+ 20})
			})		
			i++;			
		})
	}
	drawArrows = function(){
		var horizontalArrow = document.getElementById("horizontalArrow");
		var verticalArrow = document.getElementById("verticalArrow");
		var horizontalSpan = document.getElementById("horizontalSpan");
		var verticalSpan = document.getElementById("verticalSpan");
		var totaalLengte = document.getElementById("totaalLengte");
		var totaalHoogte = document.getElementById("totaalHoogte");
		var totaalDiepte = document.getElementById("totaalDiepte");
		//horizontal (0,0) = (0,0) vertical (0,0) = (0,-15) meaning that for the vertical top you have to subtract 15
		var hoogte = 0;
		var breedte = 0;
		console.log(stellingkast.secties);
		stellingkast.secties.forEach(function(section){
			if(section.height > hoogte){
				hoogte=section.height;
			}
			breedte += section.width+defaultPillarWidth;
		})
		var section= stellingkast.secties;
		horizontalSpan.innerHTML=(breedte + defaultPillarWidth)+" cm";
		verticalSpan.innerHTML=hoogte + " cm";
		horizontalArrow.style.width=(breedte + defaultPillarWidth) + "px";
		horizontalArrow.style.top=10+ "px";
		horizontalArrow.style.left=25+ "px";
		horizontalArrow.style.display="flex";
		verticalArrow.style.display="flex";
		verticalArrow.style.width=hoogte + "px";
		verticalArrow.style.top=(25-15)+ "px";
		verticalArrow.style.left=10+ "px";

		totaalLengte.innerHTML=(breedte + defaultPillarWidth);
		totaalHoogte.innerHTML=hoogte;
		totaalDiepte.innerHTML=stellingkast.depth;

	}

	clearsvg = function(){
		$("#svgcanvas").empty();
	}

	ChangeRackDepth = function(newdepth){
		stellingkast.depth = newdepth;
		clearsvg();
		prepRackPillar();
		prepRackPlanks();
		drawRack();
	}

	ChangeHeightWidthSection = function(Section,Height,Width,Planks){
		i=0;
		stellingkast.secties.forEach(function(section){
			if (i == Section) {
				section.height = Height;
				section.width = Width;
				section.planks = Planks;
			}
			i++
		})
		clearsvg();
		prepRackPillar();
		prepRackPlanks();
		drawRack();
	}

	DropDown =function(x,y,i){
		currentSection = i;
		var z = document.getElementById("dropDown");
		if (z.style.display == "none") {
			z.style.display = "block";
		}
		z.style.marginTop=y+"px";
		z.style.marginLeft=x+"px";
		if(stellingkast.secties[i] != null){
			document.getElementById("dropDownNaam").innerHTML = "wijzig " + stellingkast.secties[i].name;
			document.getElementById("dropDownNaam").value = i;
			DropDownEditor();
		}
		
	}

	closeDropDown =function(){
		var z = document.getElementById("dropDown");
		if (z.style.display == "block") {
			z.style.display = "none";
		}
	}

	DropDownEditor = function(){
		var hoogte = document.getElementById('HoogteAanpassen');
		var breedte = document.getElementById('BreedteAanpassen');
		var diepte = document.getElementById('DiepteAanpassen');
		var legborden = document.getElementById('LegbordenAanpassen');
		var value = stellingkast.secties[currentSection];
		for(var i = 0; i < hoogte.length ;i++){
			if(hoogte[i].value ==  value.height){
				hoogte.selectedIndex = i;
			}
		}
		for(var i = 0; i < breedte.length;i++){
			if(breedte[i].value == value.width){
				breedte.selectedIndex = i;
			}
		}
		for(var i = 0; i < diepte.length ;i++){
			if(diepte[i].value ==  stellingkast.depth){
				diepte.selectedIndex = i;
			}
		}
		for(var i = 0; i < legborden.length ;i++){
			if(legborden[i].value == value.planks){
				legborden.selectedIndex = i;
			}
		}		
	}

	newSection = function(height,width,depth,planks){
		var naamNummer = 1
		if(stellingkast.secties.length != 0){
			naamNummer=parseInt(stellingkast.secties[stellingkast.secties.length-1].name.replace("sectie ", ""))+1
		}
		if (height>maxHoogte){
			maxHoogte=height;
		}
		stellingkast.secties.push({name:"sectie " + naamNummer, height:height, width:width, planks:planks, planken:[]});
		stellingkast.depth = depth;
	};

	 getValuesFromHTML= function(){
		// waardes vanuit HTML ophalen.
		var e;
		e = document.getElementById("Hoogte");
		Hoogte = Number(e.options[e.selectedIndex].value);
		e = document.getElementById("Lengte");
		Lengte = Number(e.options[e.selectedIndex].value);
		e = document.getElementById("Diepte");
		Diepte = Number(e.options[e.selectedIndex].value);
		e = document.getElementById("Legborden");
		Legborden = Number(e.options[e.selectedIndex].value);
		Breedte = DefaultWidth;
	}

	getValuesFromDropDown= function(){
		// waardes vanuit HTML dropdown ophalen.
		var e;
		e = document.getElementById("HoogteAanpassen");
		Hoogte = Number(e.options[e.selectedIndex].value);
		e = document.getElementById("BreedteAanpassen");
		Breedte = Number(e.options[e.selectedIndex].value);
		e = document.getElementById("DiepteAanpassen");
		Diepte = Number(e.options[e.selectedIndex].value);
		e = document.getElementById("LegbordenAanpassen");
		Legborden = Number(e.options[e.selectedIndex].value);
		Sectie = document.getElementById("dropDownNaam").value;
		ChangeHeightWidthSection(Sectie,Hoogte,Breedte,Legborden);
		ChangeRackDepth(Diepte);
	}


	//sectionLocation = function(){

	// Tijdelijk overbodig. is voor slepen van accesoires.

	//	var selectedSection;
	//	pillars.forEach(function(pillar){
	//		if(event.pageX-40 > pillar.position){
	//			selectedSection = pillar.name.substr(7);
	//		}else{
	//		}
			
	//	})
	///	console.log(selectedSection);
	//	stellingkast.accesoires.sectionaccesoires = [{position:0}];
	//	stellingkast.accesoires.sectionaccesoires = [{position:1}];

	//	stellingkast.accesoires.forEach(function(sectionaccesoires){
	//		console.log(sectionaccesoires.position);
	//	})
		//stellingkast.accesoires.push({sectionaccesoires: []});
		//stellingkast.accesoires.sectionaccesoires.push({position:1});
		//add item to array
		// create draw function for accesoires
		// reload svg
	//}


	calculatePrice = function(){
		var pillarAmmount, pillarHeight, plankAmmount, plankHeight, depth, totalPrice;
		pillarAmount = stellingkast.secties.Length+1;
		totalPrice = 0;
		stellingkast.secties.forEach(function(sectie){
			totalPrice += sectie.width+stellingkast.depth*sectie.planks;
		})
		pillars.forEach(function(pillar){
			totalPrice += pillar.height;
		})
		console.log(totalPrice);
	}


	test2= function(){
		console.log(pillars);
	}
	return {initModule:initModule, newSection:newSection, getarray:getarray, addSection:addSection, newrack:newrack,removeAlert:removeAlert, drawArrows:drawArrows,
	 drawRack:drawRack, test:test, DropDown:DropDown, ChangeRackDepth:ChangeRackDepth, drawWeight:drawWeight, removeWeight:removeWeight, drawAlert:drawAlert,
	 ChangeHeightWidthSection:ChangeHeightWidthSection, clearsvg:clearsvg, getValuesFromDropDown:getValuesFromDropDown, closeDropDown:closeDropDown,
	 sectionLocation,test2:test2, calculatePrice:calculatePrice}
}(jQuery));

$(function() {
	//when done
	svgmodule.initModule();
	    $( "#draggable" ).draggable();


	    //tijdelijk overbodig. is voor slepen accesoires.
	//    $( ".accessoiresdiv" )
    // .mouseup(function(event) {
    //	svgmodule.sectionLocation();    
    // })


    // functie voor locatie muis bepalen.
//$("html").mousemove(function(){
//  	setInterval(console.log(event.pageX-40), 1000);
 // })

})