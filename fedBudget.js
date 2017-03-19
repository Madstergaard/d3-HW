var first = d3.select("#first");
var second = d3.select("#second");

//      [total revenue, total spending, total surplus, GDP]
var info2014 = [2.79,3.23,.447,15.8];
var info2015 = [2.96,3.36,.399,16.2];


var makeBars = function() {

    first.selectAll("div")
	.data(info2014)
	.enter()
	.append("div")
	.style("width", function(d) {
	    return d*50 + "px";
	})
	.text( function(d) {
	    return d;
	});

    
    second.selectAll("div")
	.data(info2015)
	.enter()
	.append("div")
	.style("width", function(d) {
	    return d*50 + "px";
	})
	.text( function(d) {
	    return d;
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
