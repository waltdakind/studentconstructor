var exports = module.exports = {};

// studentsOnTheBus (array)
var studentsOnTheBus =[];
// driverName (string)
var driverName  = '';
// color (string)
var color = '';
// gas (integer)
var gas = 0;
// studentEntersBus (function that adds a student to the studentsOnTheBus property)
exports.studentEntersBus = function() {};

// busChatter (function that outputs the students' catch phrases if they can have fun one by one)
exports.busChatter = function() {};

//bus constructor
var bus = function(name, driverName, color, gas){
  this.studentsOnTheBus = name;
  this.driverName = gender;
  this.color = grade;
  this.gas = gpa;
  this.studentEntersBus = function(){
    if((this.detentions < 10) && (this.gpa > 2)){
      console.log("I can have fun!!!! " + this.catchPhrase)
    }else{
      console.log("I can't have fun. Darn!");
    }
  };
  this.busChatter = function(){
    if((this.detentions < 10) && (this.gpa > 2)){
      console.log("I can have fun!!!! " + this.catchPhrase)
    }else{
      console.log("I can't have fun. Darn!");
    }
  };

};

//at the bottom of bus.js, export the constructor function