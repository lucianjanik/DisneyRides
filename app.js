(function(){

	  
var app = angular.module('themepark', ['rides']);
  
var DWRides = [
           	{ name: 'Space Mountain', park: 'Magic Kingdom', height: 36 },
           	{ name: 'Expedition Everest', park: 'Disney\'s Animal Kingdom', height: 36 },
           	{ name: 'Big Thunder Mountain Railroad', park: 'Magic Kingdom', height: 48 },
           	{ name: 'Rock n Roller Coaster', park: 'Disney\'s Hollywood Studio', height: 48 },
        	{ name: 'Seven Dwarfs Mine Train', park: 'Magic Kingdom', height: 48 },
        	{ name: 'Mission: SPACE', park: 'Epcot', height: 48 },
        	{ name: 'Test Track', park: 'Epcot', height: 48 },
        	{ name: 'Star Tours', park: 'Disney\'s Hollywood Studio', height: 48 },
        	{ name: 'Twilight Zone Tower of Terror', park: 'Disney\'s Hollywood Studio', height: 48 },
        	{ name: 'Primeval Whirl', park: 'Disney\'s Animal Kingdom', height: 48 },
            ];

var names=findUnique(DWRides, "name", "All Rides");
var parks=findUnique(DWRides, "park", "All Parks");


function findUnique(array,att,label){
	var allarray=[];
	var uniquearray=[];
	var initial ={};
	initial[att]=label;
	uniquearray.push(initial);

	for (var i = 0; i < array.length; i++) {
	    allarray.push(array[i][att]);
	}
	allarray.sort();
	
	var check="";
	for (var j = 0; j < allarray.length; j++) {
		if (allarray[j]!=check){
			var obj ={};
			obj[att]=allarray[j];
			uniquearray.push(obj);
			check=allarray[j];
		}
	}
	return uniquearray;
}

app.controller('ThemeParkController', function(){
this.rides=DWRides;
this.uniquenames=names;
this.uniqueparks=parks;
this.sortType='name';
this.sortReverse=false;
this.searchRides = '';
this.namefilter = '';
this.parkfilter = '';
this.pf = this.uniqueparks[0];
this.nf = this.uniquenames[0];

this.setFilter = function(){

	if (this.pf.park==this.uniqueparks[0].park)
		this.parkfilter ='';
	else
		this.parkfilter=this.pf.park;
	
	if (this.nf.name==this.uniquenames[0].name)
		this.namefilter='';
	else
		this.namefilter=this.nf.name;
};

this.clearFilter = function(){
	this.pf = this.uniqueparks[0];
	this.nf = this.uniquenames[0];
	this.parkfilter='';
	this.namefilter='';
};



}); 



})();