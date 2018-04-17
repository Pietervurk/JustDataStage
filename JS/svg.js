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


var svg = (function($){

	var initModule, newSection, getarray, addSection, newrack, drawRack,test, ChangeRackDepth,drawPillar,DropDown,drawPlanks, prepRackPillar, prepRackPlanks;
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




	//var section = {height:"200", width:"100", depth:"80", planks:"5"};


	initModule = function(){
		DefaultWidth = 100;
		defaultPillarWidth = 4;
		defaultPlankWidth = 4;
	};

	newrack = function(){
		getValuesFromHTML();
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
		console.log('hoi');
	}

	prepRackPillar = function(){
		console.log('hoi vanuit pilllar');
		var totalwidth = 0;
		//calculates amount of pillars and where to place them.
		// puts in array with pillar object(height,location)

		for(i=0; i<sections.length+1; i++){
			
			if(i == 0){ // first pole.
				pillars.push({name:"pillar" + (pillars.length+1), height:sections[i].height, position:0});
				totalwidth += sections[i].width;
			}else if(i> 0 && i < sections.length){// every pillar inbetween
				if(sections[i-1].height > sections[i].height){
					pillars.push({name:"pillar"+(pillars.length+1), height:sections[i-1].height, position:totalwidth});
					totalwidth += sections[i].width;
					}else if(sections[i-1].height < sections[i].height){
						pillars.push({name:"pillar"+(pillars.length+1), height:sections[i].height, position:totalwidth});
						totalwidth += sections[i].width;
					}else if(sections[i-1].height == sections[i].height){
						pillars.push({name:"pillar"+(pillars.length+1), height:sections[i].height, position:totalwidth});
						totalwidth += sections[i].width;
					}
				}else{//last pillar
					//totalwidth += sections[i-1].width;
						pillars.push({name:"pillar"+(pillars.length+1), height:sections[i-1].height, position:totalwidth});
					}
		}
	}

	prepRackPlanks = function(){
		console.log('hoi vanuit planks');
			sections.forEach(function(section){
				var spaceInBetween = section.height/section.planks;
				var sectionplanks = [];
				
				for(i=0;i<section.planks; i++){
					if(i==0){
						sectionplanks.push({name:"Plank"+(i+1),height:0});
					}else{
						sectionplanks.push({name:"Plank"+(i+1),height:(spaceInBetween*i)});
					}
				}
				planks.push(sectionplanks);
			});
	}

	drawRack = function(){
		console.log('hoi vanuit draw');
		console.log(sections);
		drawPillar();
		drawPlanks();
	}
	
	drawPillar= function(){
		console.log('hoi vanuit drawpillar');
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
			rect.setAttribute('onmouseover', 'svg.myFunction('+ (pillar.position + 25) +','+ (hoogte + 25) + ','+(1+i)+')');
			document.getElementById('svgcanvas').appendChild(rect);
			i++;
		})
	}
	drawPlanks = function(){
		console.log('hoi vanuit drawplanks');
		var i = 0;
		var hoogte = 0;
		var breedte = sections[i].width;
		sections.forEach(function(section){
			if(section.height > hoogte){
				hoogte=section.height;
			}
		})
		planks.forEach(function(section){
			section.forEach(function(plank){
				var rect = document.createElementNS(svgns, 'rect');
				rect.setAttributeNS(null, 'name', plank.name);
				rect.setAttributeNS(null, 'x', breedte * i + 25+2);
				rect.setAttributeNS(null, 'y', hoogte + 15-plank.height);
				rect.setAttributeNS(null, 'height', defaultPlankWidth);
				rect.setAttributeNS(null, 'width', breedte);
				rect.setAttributeNS(null, 'fill', '#454545');
				rect.setAttribute('onmouseover', 'svg.myFunction('+ (breedte * i + 25) +','+ (hoogte + 25) + ','+(1+i)+')');
				document.getElementById('svgcanvas').appendChild(rect);
			})
			i++;
		})
	}
	ChangeRackDepth = function(newdepth){
		sections.forEach(function(section){
			section.depth = newdepth;
		});
	}

	ChangeHeightWidthSection = function(Section,Height,Width){
		//Change values of selected Section
		//Run prepRackPillar and prepRackPlanks again
		//Clear SVG
		//Redraw Rack
	}

	DropDown =function(x,y,i){
		var z = document.getElementById("dropDown");
		if (z.style.display == "none") {
			z.style.display = "block";
		}
		z.style.marginTop=y+"px";
		z.style.marginLeft=x+"px";
		document.getElementById("dropDownNaam").innerHTML = "Wijzig sectie " + i;
		DropDownEditor(i);
	}

	DropDownEditor = function(j){
		var hoogte = document.getElementById('HoogteAanpassen');
		var breedte = document.getElementById('BreedteAanpassen');
		var diepte = document.getElementById('DiepteAanpassen');
		var legborden = document.getElementById('LegbordenAanpassen');
		var value = sections[j-1].height;
		var options = hoogte.options;
		for (var option, i = 0; option = options[i]; i++) {
			if (option.value == value) {
				hoogte.selectedIndex = i;
			break;
			}
		}
		var value = sections[j-1].width;
		var options = breedte.options;
		for (var option, i = 0; option = options[i]; i++) {
			if (option.value == value) {
				breedte.selectedIndex = i;
			break;
			}
		}
		var value = sections[j-1].depth;
		var options = diepte.options;
		for (var option, i = 0; option = options[i]; i++) {
			if (option.value == value) {
				diepte.selectedIndex = i;
			break;
			}
		}
		var value = sections[j-1].planks;
		var options = legborden.options;
		for (var option, i = 0; option = options[i]; i++) {
			if (option.value == value) {
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
		console.log('hoi vanuit newsection');
		sections.push({name:"section" + (sections.length+1), height:height, width:width, depth:depth, planks,planks});
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
		//newSection(Hoogte,Lengte,Diepte,Legborden);  --Not Needed
		Breedte = DefaultWidth;
	}

	getarray = function(){
		return sections;


	}


	return {initModule:initModule, newSection:newSection, getarray:getarray, addSection:addSection, newrack:newrack, drawRack:drawRack, test:test, myFunction:DropDown, ChangeRackDepth:ChangeRackDepth}
}(jQuery));

$(function() {
	//when done
	svg.initModule();

})