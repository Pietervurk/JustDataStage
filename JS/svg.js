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

	var initModule, newSection, getarray, addSection, newrack, drawRack,test,drawPillar,myFunction;
	var height,Width,length,depth,planks;
	var svgns = "http://www.w3.org/2000/svg";
	var sections = [];
	var pillars = [];
	var Hoogte,Breedte,Lengte,Diepte,Legborden;


	//config vars
	var DefaultWidth;
	var defaultPillarWidth;




	//var section = {height:"200", width:"100", depth:"80", planks:"5"};


	initModule = function(){
		DefaultWidth = 100;
		defaultPillarWidth = 5;
	};

	newrack = function(){
		getValuesFromHTML();
		//calculate ammount of sections needed for default 100cm width.
		//loop add all sections to list
		//print all sections

		if(Lengte > DefaultWidth){ // variable amount of sections
				for(i=0; i< Lengte/DefaultWidth; i++){
					newSection(Hoogte,Breedte,Diepte,Legborden);
				}
		}else{ // single section
			newSection(Hoogte,Breedte,Diepte,Legborden);
		}
	}

	prepRackPillar = function(){
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




	drawRack = function(){
		drawPillar();
	}
	
	drawPillar= function(){
		pillars.forEach(function(pillar) {
			var rect = document.createElementNS(svgns, 'rect');
			rect.setAttributeNS(null, 'name', pillar.name)
			rect.setAttributeNS(null, 'x', pillar.position + 25)
			rect.setAttributeNS(null, 'y', 25)
			rect.setAttributeNS(null, 'height', pillar.height);
			rect.setAttributeNS(null, 'width', defaultPillarWidth);
			rect.setAttributeNS(null, 'fill', '#112112');
			rect.setAttribute('onmouseover', 'myFunction('+ (pillar.position + 25) +','+ (pillar.height + 25) + ')');
			document.getElementById('svgcanvas').appendChild(rect);
		})
	}

	myFunction =function(x,y){
		var z = document.getElementById("dropDown");
		if (z.style.display === "none") {
			z.style.display = "block";
		}
		z.style.marginTop=x+"px";
		z.style.marginLeft=y+"px";
	}

	test = function(){
		// test space for functiontesting

		newSection(250,100,50,5);
		newSection(150,100,50,5);
		newSection(250,100,50,5);
		prepRackPillar();
		return pillars;
	}



	newSection = function(height,width,depth,planks){
		var name = "section" + (sections.length+1);
		var temp = {name:name, height:height, width:width, depth:depth, planks,planks};
		sections.push(temp);
	};






	 getValuesFromHTML= function(){
		// waardes vanuit HTML ophalen.
		var e;
		e = document.getElementById("Hoogte");
		Hoogte = e.options[e.selectedIndex].value;
		e = document.getElementById("Lengte");
		Lengte = e.options[e.selectedIndex].value;
		e = document.getElementById("Diepte");
		Diepte = e.options[e.selectedIndex].value;
		e = document.getElementById("Legborden");
		Legborden = e.options[e.selectedIndex].value;
		//newSection(Hoogte,Lengte,Diepte,Legborden);  --Not Needed
		Breedte = DefaultWidth;
	}

	getarray = function(){
		return sections;


	}


	return {initModule:initModule, newSection:newSection, getarray:getarray, addSection:addSection, newrack:newrack, drawRack:drawRack, test:test, myFunction:myFunction}
}(jQuery));

$(function() {
	//when done
	svg.initModule();

})