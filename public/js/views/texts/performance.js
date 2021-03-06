jQuery(document).ready(function(e){

	var performance = new performancePage();
	
	performance.init();
	performance.drawGraphs();
});

performancePage = function () {
    'use strict';
};

performancePage.prototype = {
	init 	: function(){
		var storedHash = window.location.hash;
		var performancePage = this;
		window.setInterval(function () {
		    if (window.location.hash != storedHash) {
		        storedHash = window.location.hash;
		        performancePage.updateSideNavBar(storedHash);
		    }
		},
		100);
	},
	
	updateSideNavBar : function(anchorHash){
		jQuery('#navPerformances > ul > li').removeClass();
		jQuery('a[href=\''+anchorHash+'\']').parent().addClass('active');
	},
	
	drawGraphs : function(){
		 var shinglesPerfData= [206033.24],
		 hbar = new RGraph.HBar('csvShinglesPerformance', shinglesPerfData)
		 .Set('chart.units.post','ns')
	     .Set('chart.colors', ['Gradient(#ffd737:#FDB515)'])
	     .Set('chart.strokestyle', 'rgba(0,0,0,0)')
	     .Set('chart.labels.above', true)
	     .Set('chart.labels.above', true)
	     .Set('chart.vmargin', 15)
	     .Set('chart.background.grid', false)
	     .Set('chart.labels', ['k=9'])
	     .Set('chart.gutter.right',50)
	     .Draw();
		 
		 var minHashPerfData= [128.92],
		 hbar = new RGraph.HBar('csvMinhashPerformance',minHashPerfData)
		 .Set('chart.units.post','ms')
		 .Set('chart.scale.decimals',2)
	     .Set('chart.colors', ['Gradient(#ffd737:#FDB515)'])
	     .Set('chart.strokestyle', 'rgba(0,0,0,0)')
	     .Set('chart.labels.above', true)
	     .Set('chart.labels.above', true)
	     .Set('chart.vmargin', 15)
	     .Set('chart.background.grid', false)
	     .Set('chart.labels', ['n=100'])
	     .Set('chart.gutter.right',50)
	     .Draw();
		 
		 var lshPerfData= [461.44,494.77,498.23],
		 hbar = new RGraph.HBar('csvLshPerformance',lshPerfData)
		 .Set('chart.units.post','ms')
		 .Set('chart.scale.decimals',2)
	     .Set('chart.colors', ['Gradient(#ffd737:#FDB515)'])
	     .Set('chart.strokestyle', 'rgba(0,0,0,0)')
	     .Set('chart.labels.above', true)
	     .Set('chart.labels.above', true)
	     .Set('chart.vmargin', 15)
	     .Set('chart.background.grid', false)
	     .Set('chart.labels', ['b=20 n=100',
	                           'b=10 n=100',
	                           'b=5 n=100'])
	     .Set('chart.gutter.right',50)
	     .Draw();
	}
};

