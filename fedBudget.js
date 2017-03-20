var tR = d3.select("#tR");
var tS = d3.select("#tS");
var tSurp = d3.select('#tSurp');
var GDP = d3.select('#GDP');


//[2014,2015]
var infotR = [2.79,2.96];
var infotS = [3.23,3.36];
var infotSurp = [447,399];
var infoGDP = [15.8,16.2];

var makeBars = function() {

    tR.selectAll("div")
	.data(infotR)
	.enter()
	.append("div")
	.style("width", function(d) {
	    return d*90 + "px";
	})
	.text( function(d) {
	    return "$"+d+" trillion";
	});

    
    tS.selectAll("div")
	.data(infotS)
	.enter()
	.append("div")
	.style("width", function(d) {
	    return d*90 + "px";
	})
	.text( function(d) {
	    return "$"+d+" trillion";
	});

    tSurp.selectAll("div")
	.data(infotSurp)
	.enter()
	.append("div")
	.style("width", function(d) {
	    return d + "px";
	})
	.text( function(d) {
	    return "$"+d+" billion";
	});

    GDP.selectAll("div")
	.data(infoGDP)
	.enter()
	.append("div")
	.style("width", function(d) {
	    return d*90 + "px";
	})
	.text( function(d) {
	    return "$"+d+" trillion";
	});

};

var transitionTest = function( scale ) {
    dyn.selectAll("div")
	 .data(info)
	 .transition()
	 .duration(2000)
	 .style("width", function(d) {
	     return d * scale + "px";
	 });
 };

makeBars();
