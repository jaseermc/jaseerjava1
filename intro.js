
var readlineSync = require("readline-sync");
let day = readlineSync.question(" enter the number of day  :  ");
let daycon= parseInt(day)





switch(daycon) {
    case 1:
        console.log("MONDAY");
        break;
    case 2:
        console.log("TUESDAY");
        break;
    case 3: 
        console.log ("WEDNESDAY");
        break;
    case 4:
        console.log("THURSDAY");
        break;
    case 5: 
       console.log("FRIDAY");
        break;
    case 6: 
    console.log("SATURDAY");
        break;     
        case 7:
             console.log("SUNDAY");
             break;        
    default:
        console.log("invalid entry");
       
}
