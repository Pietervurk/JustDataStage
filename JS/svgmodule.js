//Config 




// test code voor svg




function addblock(){
	var rect = document.createElementNS(svgns, 'rect');
       rect.setAttributeNS(null, 'x', x);
       rect.setAttributeNS(null, 'y', y);
       rect.setAttributeNS(null, 'height', '10');
       rect.setAttributeNS(null, 'width', '10');
       rect.setAttributeNS(null, 'fill', '#'+Math.round(0xffffff * Math.random()).toString(16));
       document.getElementById('svgcanvas').appendChild(rect);
       x+=10;
       y+=10;
}


var svgmodule = (function($){


	var initModule, newSection, getarray, addSection, newrack;
	var drawRack,test, ChangeRackDepth,drawPillar,DropDown,drawPlanks,prepRackPillar, prepRackPlanks,ChangeHeightWidthSection, clearsvg, getValuesFromDropDown, closeDropDown;

	var height,Width,length,depth,planks;
	var svgns = "http://www.w3.org/2000/svg";
	var stellingkast = [];
	stellingkast.secties = [];
	stellingkast.depth = 0;
	var pillars = [];

	var Hoogte,Breedte,Lengte,Diepte,Legborden;

	//config vars
	var DefaultWidth;
	var defaultPillarWidth;
	var defaultPlankWidth;
	var currentSection = 0;
	var draw = SVG('svgcanvas');

	initModule = function(){
		DefaultWidth = 100;
		defaultPillarWidth = 4;
		defaultPlankWidth = 4;

	};

	newrack = function(){
		getValuesFromHTML();
		document.getElementById("invoertr").style.display = "none";
		//calculate ammount of secties needed for default 100cm width.
		//loop add all secties to list
		//print all secties

		if(Lengte > DefaultWidth){ // variabele aantal secties
				for(i=0; i< Lengte/DefaultWidth; i++){
					newSection(Hoogte,Breedte,Diepte,Legborden);
				}
		}else{ // single section
			newSection(Hoogte,Breedte,Diepte,Legborden);
		}
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
					pillars.push({name:"pilaar "+(pillars.length+1), height:stellingkast.secties[i-1].height, position:totalwidth});
					totalwidth += stellingkast.secties[i].width;
					}else if(stellingkast.secties[i-1].height < stellingkast.secties[i].height){
						pillars.push({name:"pilaar "+(pillars.length+1), height:stellingkast.secties[i].height, position:totalwidth});
						totalwidth += stellingkast.secties[i].width;
					}else if(stellingkast.secties[i-1].height == stellingkast.secties[i].height){
						pillars.push({name:"pilaar "+(pillars.length+1), height:stellingkast.secties[i].height, position:totalwidth});
						totalwidth += stellingkast.secties[i].width;
					}
				}else{//last pillar
					//totalwidth += stellingkast.secties[i-1].width;
						pillars.push({name:"pilaar "+(pillars.length+1), height:stellingkast.secties[i-1].height, position:totalwidth});
					}
		}
	}

	prepRackPlanks = function(){
		stellingkast.secties.forEach(function(section){
			section.planken =[];
			var hoogteverschil = section.height/section.planks;
			for (var i = 1; i <= section.planks; i++) {
				 section.planken.push({name:("plank "+ i) , height:hoogteverschil*(i-1)});
			}
		});
	}

	drawRack = function(){
		drawPillar();
		drawPlanks();
		drawAddSection();
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
	addSection = function(){
		section = stellingkast.secties[stellingkast.secties.length-1];
		newSection(section.height,section.width,section.depth,section.planks);
		prepRackPillar();
		prepRackPlanks();
		clearsvg();
		drawRack();
	}
	removeSection = function(){
		stellingkast.secties.splice(currentSection, 1);
		prepRackPillar();
		prepRackPlanks();
		clearsvg();
		drawRack();
	}

	drawPillar= function(){
		var hoogte = 0;
		var j = 0;
		var i = 0;
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
			rect.setAttributeNS(null, 'width', (pillars[j+1].position - pillars[j].position - 5) + (2 * defaultPillarWidth));
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
			i++;
			if(pillar.position > voegSectieToeAfstand){
				voegSectieToeAfstand = pillar.position+35;
			}
		})
		
	}

	drawPlanks = function(){
		var i = 0;
		var hoogte = 0;
		var lengthFromSide =25;
		stellingkast.secties.forEach(function(section){
			if(section.height > hoogte){
				hoogte=section.height;
			}
		})

		stellingkast.secties.forEach(function(section){
			section.planken.forEach(function(plank){
				var rect = draw.rect(section.width,defaultPlankWidth);
				rect.attr({name: plank.name, x: lengthFromSide, y: hoogte + 15-plank.height, fill: '#454545', style:"cursor:row-resize"});
				rect.draggable({minX: lengthFromSide, minY: hoogte-stellingkast.secties[i].height+25, maxX: lengthFromSide + stellingkast.secties[i].width, maxY: hoogte+20})
			})		
			lengthFromSide += section.width;
			i++;
		})
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
		var z = document.getElementById("dropDown");
		if (z.style.display == "none") {
			z.style.display = "block";
		}
		z.style.marginTop=y+"px";
		z.style.marginLeft=x+"px";
		if(stellingkast.secties[i] != null){
			document.getElementById("dropDownNaam").innerHTML = "wijzig " + stellingkast.secties[i].name;
			document.getElementById("dropDownNaam").value = i;
			DropDownEditor(i);
			currentSection = i;
		}
		
	}

	closeDropDown =function(){
		var z = document.getElementById("dropDown");
		if (z.style.display == "block") {
			z.style.display = "none";
		}
	}

	DropDownEditor = function(j){
		var hoogte = document.getElementById('HoogteAanpassen');
		var breedte = document.getElementById('BreedteAanpassen');
		var diepte = document.getElementById('DiepteAanpassen');
		var legborden = document.getElementById('LegbordenAanpassen');
		var value = stellingkast.secties[j];
		for(var i = 0; i < 100 ;i++){
			if(hoogte[i].value ==  value.height){
				hoogte.selectedIndex = i;
				break;
			}
		}
		for(var i = 0; i < 100 ;i++){
			if(breedte[i].value == value.width){
				breedte.selectedIndex = i;
				break;
			}
		}
		for(var i = 0; i < 100 ;i++){
			if(diepte[i].value ==  stellingkast.depth){
				diepte.selectedIndex = i;
				break;
			}
		}
		for(var i = 0; i < 100 ;i++){
			if(legborden[i].value == value.planks){
				legborden.selectedIndex = i;
				break;
			}
		}		
	}

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

	newSection = function(height,width,depth,planks){
		stellingkast.secties.push({name:"sectie " + (stellingkast.secties.length + 1), height:height, width:width, planks:planks, planken:[]});
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

	getarray = function(){
		return stellingkast.secties;


	}


	return {initModule:initModule, newSection:newSection, getarray:getarray, addSection:addSection, newrack:newrack,
	 drawRack:drawRack, test:test, DropDown:DropDown, ChangeRackDepth:ChangeRackDepth,
	 ChangeHeightWidthSection:ChangeHeightWidthSection, clearsvg:clearsvg, getValuesFromDropDown:getValuesFromDropDown, closeDropDown:closeDropDown}
}(jQuery));

$(function() {
	//when done
	svgmodule.initModule();

})