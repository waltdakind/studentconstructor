// require the prompt module
prompt = require('prompt');
fs = require('fs');
var exports = module.exports = {};
var bus = require("./bus.js");
// class file
var studentData = "studentData.txt";



// var Firebase = require("firebase");
// var myFirebaseRef = new Firebase("https://blazing-heat-242.firebaseio.com/");
// append function
function appender(str) {
	fs.appendFile(studentData, str, "utf8", function(err) {
		if (!err) {
			console.log('Adding new student to studentData...');
		}
	})
}

// item class
var Student = function(name, gender, grade, gpa, detentions, sleepingInClass, catchPhrase){
  this.name = name;
  this.gender = gender;
  this.grade = grade;
  this.gpa = gpa;
  this.detentions = detentions;
  this.sleepingInClass = sleepingInClass;
  this.catchPhrase = catchPhrase;
  this.onTheBus = true; //boolean value to determine if student is on bus
  this.canStudentHaveFun = function(){
    if((this.detentions < 10) && (this.gpa > 2)){
      console.log("I can have fun!!!! " + this.catchPhrase)
    }else{
      console.log("I can't have fun. Darn!");
    }
  };
};


exports.addStudent = function(){
//name, gender, grade, gpa, detentions, sleepingInClass, catchPhrase, and a function called canStudentHaveFun
// prompt time
prompt.start();
// start prompt
prompt.get(['name', 'gender', 'grade', 'gpa','detentions', 'sleepingInClass', 'catchPhrase'], function(err, result) {
	// if no error
	if (!err) {
		// add a new Student
		var Student = new Student(result.name, result.grade, result.gpa, result.detentions, result.sleepingInClass, result.catchPhrase);
		// log the results to console
		console.log("Student: " + Student.name);
		console.log("Gender: " + Student.gender);
		console.log("Grade: " + Student.grade);
		console.log("GPA: " + Student.gpa);
		console.log("Detentions: " + Student.detentions);
		console.log("Times Caught Sleeping in Class: " + Student.sleepingInClass);
		console.log("catch Phrase: " + Student.catchPhrase);
		// add info as an array on a new line in studentData.txt
		appender("['"+ Student.name + "','" + Student.gender + "','" + Student.grade + "','" + Student.gpa + "','" + Student.detentions + "','" + Student.sleepingInClass + "','"+ Student.catchPhrase + "']\n");
	}
})
}


