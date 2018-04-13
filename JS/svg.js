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

	var initModule;
	var height,width,depth,planks;
	var svgns = "http://www.w3.org/2000/svg";
	var sections = [];
	//var section = {height:"200", width:"100", depth:"80", planks:"5"};


	initModule = functions(){

	}

	newSection = function(height,width,depth,planks){
		var name = "section" + sections.count()+1;
		var name = {};
	}


	return {initModule: initModule, newSection: newSection}
}(JQuery));

$(function() {
	//when done
})