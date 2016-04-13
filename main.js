// in main.js 
// make the bus object with the constructor function, 
// and then add 20 students to it. 
// Then successfully call the busChatter
//  property of the bus object

var bus = require("./bus.js");
var student = require("./student.js");
var option = process.argv[2];

//(name, gender, grade, gpa, detentions, sleepingInClass, catchPhrase)
//populate student for bus stuff
// var Ryan = new student.Student('Ryan','m','12', 4.0, 2, 2, 'anything i do i do it for you');
// var Candace = new student.Student('Candace','f','12', 3.0, 5, 3, 'They call me Candy cuz I\'m sweet');
// var Stevie = new student.Student('Stevie','m','11', 5.0, 0, 1,'They call me Stevie cuz I\'m sweet like Stevia');
// var Marylee = new student.Student('Marylee','f','10', 2.0, 0, 0, 'ML is me, don\'t mess with me');
// var Nolan = new student.Student('Nolan','m','9', 4.0, 0, 'Nolan, nolan , nolan, keep those doggies rollin');
// var Grazyna = new student.Student('Grazyna','f','12', 4.0, 0, 9, 'wooooohooooo');
// var Florene = new student.Student('Florene','f','11', 4.0, 0, 1, 'woot woot');
// var Star = new student.Student('Star','m','12', 4.0, 5, 'Supahstahh');
// var Fernande = new student.Student('Fernande','m','12', 4.0, 1, 2,'yoinks');
// var Anneliese = new student.Student('Anneliese','f','12', 4.0, 2, 3, 'gadzooks');
// var Claire = new student.Student('Claire','f','11', 4.0, 2, 2, 'i put a loop in your function');
// var Ed = new student.Student('Ed','m','12', 4.0, 2, 6, 'ed\'s not dead');
// var Wesley = new student.Student('Wesley','m','12', 4.0, 1, 0, 'So yeah');
// var Danita = new student.Student('Danita','f','10', 4.0, 1, 0,'I can\'t even');
// var Meridith = new student.Student('Meridith','f','12', 4.0, 5, 2, 'I literally can\'t even');
// var Trena = new student.Student('Trena','f','12', 4.0, 2, 2, 'Poop');
// var Janay = new student.Student('Janay','f','9', 4.0, 0, 3, 'Poppycock');
// var Danielle = new student.Student('Danielle','f','12', 4.0, 0, 3,'Noooo');
// var Damaris = new student.Student('Damaris','m','12', 4.0, 0, 3,'RAWK ON!');
// var Ronni = new student.Student('Ronni','m','12', 4.0, 2, 2, 'Ronni\'s a rager!');


switch(option) {
    case 'student':
        //open the method for adding student by prompt
        student.addStudent();
        break;
    case 'bus':
			//bus constructor
			//bus(name, driverName, color, gas);

	        break;
    case 'help':
			console.log("Available options: \'node main.js student\' or \'node main.js bus\'")
	        break;
    default:
        	console.log(option + ' is not a valid choice.')
        	break;
}

