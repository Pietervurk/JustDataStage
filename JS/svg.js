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
var x = 10;
var y = 10;

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

	var initModule, newSection, getarray,addSection;
	var height,length,depth,planks;
	var svgns = "http://www.w3.org/2000/svg";
	var sections = [];
	//var section = {height:"200", width:"100", depth:"80", planks:"5"};


	initModule = function(){

	};

	newSection = function(height,length,depth,planks){
		var name = "section" + (sections.length+1);
		var temp = {name:name, height:height, length:length, depth:depth, planks,planks};
		sections.push(temp);
	};

	addSection = function(){
		var e = document.getElementById("Hoogte");
		var Hoogte = e.options[e.selectedIndex].value;
		var e = document.getElementById("Lengte");
		var Lengte = e.options[e.selectedIndex].value;
		var e = document.getElementById("Diepte");
		var Diepte = e.options[e.selectedIndex].value;
		var e = document.getElementById("Legborden");
		var Legborden = e.options[e.selectedIndex].value;
		newSection(Hoogte,Lengte,Diepte,Legborden);
	}

	getarray = function(){
		return sections;
	}


	return {initModule:initModule, newSection:newSection, getarray:getarray, addSection:addSection}
}(jQuery));

$(function() {
	//when done

var svgarray = svg.getarray();

svgarray.forEach(function(element){
	console.log(element);
});

})