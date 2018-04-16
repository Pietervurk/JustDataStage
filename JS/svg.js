//Config 




// test code voor svg


//for (var x = 0; x < 1000; x += 10) {
//    for (var y = 0; y < 750; y += 10) {
//        var rect = document.createElementNS(svgns, 'rect');
//        rect.setAttributeNS(null, 'x', x);
//        rect.setAttributeNS(null, 'y', y);
//        rect.setAttributeNS(null, 'height', '10');
//        rect.setAttributeNS(null, 'width', '10');
//        rect.setAttributeNS(null, 'fill', '#'+Math.round(0xffffff * Math.random()).toString(16));
//        document.getElementById('svgcanvas').appendChild(rect);
//    }
//}
//var x = 10;
//var y = 10;

//function addblock(){
//	var rect = document.createElementNS(svgns, 'rect');
//        rect.setAttributeNS(null, 'x', x);
//        rect.setAttributeNS(null, 'y', y);
//        rect.setAttributeNS(null, 'height', '10');
//        rect.setAttributeNS(null, 'width', '10');
//        rect.setAttributeNS(null, 'fill', '#'+Math.round(0xffffff * Math.random()).toString(16));
 //       document.getElementById('svgcanvas').appendChild(rect);
//        x+=10;
//        y+=10;
//}


var svg = (function($){

	var initModule, newSection, getarray,addSection,newrack, drawRack;
	var height,Width,length,depth,planks;
	var svgns = "http://www.w3.org/2000/svg";
	var sections = [];
	var pillars = [];
	var Hoogte,Breedte,Lengte,Diepte,Legborden;


	//config vars
	var DefaultWidth;




	//var section = {height:"200", width:"100", depth:"80", planks:"5"};


	initModule = function(){
		DefaultWidth = 100;
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
		var totalwidth;
		//calculates amount of pillars and where to place them.
		// puts in array with pillar object(height,location)

		for(i=0; i<sections.length; i++){
			if(i == 0){
				pillars.push({name:"pillar" + (pillars.length+1), height:sections[i].height, position:0});
				totalwidth += sections[i].width;
			}else{
				if(sections[i--].height > sections[i].height){
					pillars.push({name:"pillar"+(pillars.length+1), height:sections[i--], position:totalwidth});
					totalwidth += sections[i].width;
				}else{
					pillar.push({name:"pillar"+(pillars.length+1), height:sections})
				}
			}

			
		}
	}




	drawRack = function(){

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


	return {initModule:initModule, newSection:newSection, getarray:getarray, addSection:addSection, newrack:newrack, drawRack:drawRack}
}(jQuery));

$(function() {
	//when done

})