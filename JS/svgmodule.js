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
	var drawRack,test, ChangeRackDepth,drawPillar,DropDown,drawPlanks,prepRackPillar, prepRackPlanks,ChangeHeightWidthSection, clearsvg, getValuesFromDropDown;

	var height,Width,length,depth,planks;
	var svgns = "http://www.w3.org/2000/svg";
	var sections = [];
	var pillars = [];
	var planks = [];

	
	var Hoogte,Breedte,Lengte,Diepte,Legborden;


	//config vars
	var DefaultWidth;
	var defaultPillarWidth;
	var defaultPlankWidth;
var draw = SVG('svgcanvas');



	//var section = {height:"200", width:"100", depth:"80", planks:"5"};


	initModule = function(){
		DefaultWidth = 100;
		defaultPillarWidth = 4;
		defaultPlankWidth = 4;

	};

	newrack = function(){
		getValuesFromHTML();
		document.getElementById("invoertr").style.display = "none";
		//calculate ammount of sections needed for default 100cm width.
		//loop add all sections to list
		//print all sections

		if(Lengte > DefaultWidth){ // variable amount of sections
				for(i=0; i< Lengte/DefaultWidth; i++){
					newSection(Hoogte,Breedte,Diepte,Legborden);
					console.log(Hoogte,Breedte,Diepte,Legborden);
				}
		}else{ // single section
			newSection(Hoogte,Breedte,Diepte,Legborden);
			console.log(Hoogte,Breedte,Diepte,Legborden);
		}
		prepRackPillar();
		prepRackPlanks();
		drawRack();
	}

	prepRackPillar = function(){
		pillars = [];
		var totalwidth = 0;
		//calculates amount of pillars and where to place them.
		// puts in array with pillar object(height,location)

		for(i=0; i<sections.length+1; i++){
			
			if(i == 0){ // first pole.
				pillars.push({name:"pilaar " + (pillars.length+1), height:sections[i].height, position:0});
				totalwidth += sections[i].width;
			}else if(i> 0 && i < sections.length){// every pillar inbetween
				if(sections[i-1].height > sections[i].height){
					pillars.push({name:"pilaar "+(pillars.length+1), height:sections[i-1].height, position:totalwidth});
					totalwidth += sections[i].width;
					}else if(sections[i-1].height < sections[i].height){
						pillars.push({name:"pilaar "+(pillars.length+1), height:sections[i].height, position:totalwidth});
						totalwidth += sections[i].width;
					}else if(sections[i-1].height == sections[i].height){
						pillars.push({name:"pilaar "+(pillars.length+1), height:sections[i].height, position:totalwidth});
						totalwidth += sections[i].width;
					}
				}else{//last pillar
					//totalwidth += sections[i-1].width;
						pillars.push({name:"pilaar "+(pillars.length+1), height:sections[i-1].height, position:totalwidth});
					}
		}
	}

	prepRackPlanks = function(){
		planks = [];
			sections.forEach(function(section){
				var spaceInBetween = section.height/section.planks;
				var sectionplanks = [];
				
				for(i=0;i<section.planks; i++){
					if(i==0){
						sectionplanks.push({name:"Plank "+(i+1),height:0});
					}else{
						sectionplanks.push({name:"Plank "+(i+1),height:(spaceInBetween*i)});
					}
				}
				planks.push(sectionplanks);
			});
	}

	drawRack = function(){
		drawPillar();
		drawPlanks();
	}
	
	drawPillar= function(){
		var hoogte = 0;
		sections.forEach(function(section){
			if(section.height > hoogte){
				hoogte=section.height;
			}
		})
		var i = 0;
		pillars.forEach(function(pillar) {
			var rect = document.createElementNS(svgns, 'rect');
			rect.setAttributeNS(null, 'name', pillar.name);
			rect.setAttributeNS(null, 'x', pillar.position + 25);
			rect.setAttributeNS(null, 'y', hoogte + 25-pillar.height);
			rect.setAttributeNS(null, 'height', pillar.height);
			rect.setAttributeNS(null, 'width', defaultPillarWidth);
			rect.setAttributeNS(null, 'fill', '#112112');
			rect.setAttribute('onmouseover', 'svgmodule.DropDown('+ (pillar.position + 25) +','+ (hoogte + 25) + ','+(i)+')');
			document.getElementById('svgcanvas').appendChild(rect);
			i++;
		})
	}
	drawPlanks = function(){
		var i = 0;
		var hoogte = 0;
		var breedte = sections[i].width;
		var lengthFromSide =25;
		sections.forEach(function(section){
			if(section.height > hoogte){
				hoogte=section.height;
			}
		})

		planks.forEach(function(section){
			section.forEach(function(plank){
				var rect = draw.rect(breedte,defaultPlankWidth);
				rect.attr({name: plank.name, x: lengthFromSide, y: hoogte + 15-plank.height, fill: '#454545'});
				rect.draggable({minX: lengthFromSide, minY: hoogte-sections[i].height+25, maxX: lengthFromSide + sections[i].width, maxY: hoogte+20})
			})		
			lengthFromSide = lengthFromSide + sections[i].width;
			i++;
			if(sections[i] != null){
				breedte=sections[i].width;
			}
			
		})
	}

	clearsvg = function(){
		$("#svgcanvas").empty();
	}

	ChangeRackDepth = function(newdepth){
		sections.forEach(function(section){
			section.depth = newdepth;
		});
		console.log("veranderen van de diepte is nog best wel kut ");
	}

	ChangeHeightWidthSection = function(Section,Height,Width,Planks){
		for (var i = 0; i < sections.length; i++) {
			console.log(sections[i].name);
		        if (sections[i].name === Section) {
		            sections[i].height = Height;
					sections[i].width = Width;
					sections[i].planks = Planks;
		        }
			}
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
		document.getElementById("dropDownNaam").innerHTML = "wijzig " + sections[i].name;
		document.getElementById("dropDownNaam").value = i;
		DropDownEditor(i);
	}

	DropDownEditor = function(j){
		var hoogte = document.getElementById('HoogteAanpassen');
		var breedte = document.getElementById('BreedteAanpassen');
		var diepte = document.getElementById('DiepteAanpassen');
		var legborden = document.getElementById('LegbordenAanpassen');
		var value = sections[j];
		for(var i = 0; i < 100 ;i++){
			if(hoogte[i].text ==  value.height){
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
		console.log(value);
		for(var i = 0; i < 100 ;i++){
			if(diepte[i].text ==  value.depth){
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
		prepRackPillar();
		//return pillars;
		prepRackPlanks();
		//return planks;
		return sections;

	}

	newSection = function(height,width,depth,planks){
		sections.push({name:"sectie " + (sections.length+1), height:height, width:width, depth:depth, planks,planks});
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
		Sectie = "sectie " + (document.getElementById("dropDownNaam").value + 1); 
		ChangeHeightWidthSection(Sectie,Hoogte,Breedte,Legborden);
		ChangeRackDepth(Diepte);
	}

	getarray = function(){
		return sections;


	}


	return {initModule:initModule, newSection:newSection, getarray:getarray, addSection:addSection, newrack:newrack,
	 drawRack:drawRack, test:test, DropDown:DropDown, ChangeRackDepth:ChangeRackDepth,
	 ChangeHeightWidthSection:ChangeHeightWidthSection, clearsvg:clearsvg, getValuesFromDropDown:getValuesFromDropDown}
}(jQuery));

$(function() {
	//when done
	svgmodule.initModule();

})