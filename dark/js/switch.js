var day = new Date();               // Variable day get the current date and time 
var hour_of_day = day.getHours();   // Variable hour_of_Day gets the hours of the current date and time 

switch(hour_of_day) { // Switch statement compares each hour by each case number to determine whether to use a light or dark version of webpage
    case 0:           // Case 12am
        window.location = "/dark/index.html"; // Window location object finds the dark theme of webpage through pathname 
        break;       // Break out of case 12am
    case 1:         // Case 1 am 
        window.location = "/dark/index.html"; // Window location object finds the dark theme of webpage through pathname
        break;      // Break out of case 1am
    case 2:         // Case 2am
        window.location = "/dark/index.html"; // Window location object finds the dark theme of webpage through pathname
        break;      // Break out of case 2am
    case 3:         // Case 3am 
        window.location = "/dark/index.html";  // Window location object finds the dark theme of webpage through pathname
        break;      // Break out of case 3am
    case 4:         // Case 4am 
        window.location = "/dark/index.html"; // Window location object finds the dark theme of webpage through pathname
        break;      // Break out of case 4am
    case 5:         // Case 5am 
        window.location = "/dark/index.html"; // Window location object finds the dark theme of webpage through pathname
        break;      // Break out of case 5am
    case 6:         // Case 6am
        window.location = "/index.html"; // Window location object finds the light theme of webpage through pathname
        break;      // Break out of case 6am  
    case 7:         // Case 7am
        window.location = "/index.html"; // Window location object finds the light theme of webpage through pathname
        break;      // Break out of case 7am
    case 8:         // Case 8am
        window.location = "/index.html"; // Window location object finds the light theme of webpage through pathname
        break;      // Break out of case 8am
    case 9:         // Case 9am
        window.location = "/index.html"; // Window location object finds the light theme of webpage through pathname 
        break;      // Break out of case 9am
    case 10:        // Case 10am
        window.location = "/index.html";  // Window location object finds the light theme of webpage through pathname
        break;      // Break out of case 10am
    case 11:        // Case 11am
        window.location = "/index.html";  // Window location object finds the light theme of webpage through pathname
        break;      // Break out of case 11am
    case 12:        // Case 12pm
        window.location = "/index.html"; // Window location object finds the light theme of webpage through pathname
        break;      // Break out of case 12pm 
    case 13:        // Case 1pm
        window.location = "/index.html"; // Window location object finds the light theme of webpage through pathname
        break;      // Break out of case 1pm 
    case 14:        // Case 2pm
        window.location = "/index.html"; // Window location object finds the light theme of webpage through pathname
        break;      // Break out of case 2pm 
    case 15:        // Case 3pm
        window.location = "/index.html"; // Window location object finds the light theme of webpage through pathname
        break;      // Break out of case 3pm 
    case 16:        // Case 4pm
        window.location = "/dark/index.html"; // Window location object finds the light theme of webpage through pathname
        break;      // Break out of case 4pm  
    case 17:        // Case 5pm 
        window.location = "/index.html"; // Window location object finds the light theme of webpage through pathname
        break;      // Break out of case 5pm 
    case 18:        // Case 6pm 
        window.location = "/dark/index.html"; // Window location object finds the dark theme of webpage through pathname
        break;     // Break out of case 6pm 
    case 19:       // Case 7pm
        window.location = "/dark/index.html"; // Window location object finds the dark theme of webpage through pathname
        break;     // Break out of case 7pm 
    case 20:       // Case 8pm 
        window.location = "/dark/index.html"; // Window location object finds the dark theme of webpage through pathname
        break;     // Break out of case 8pm 
    case 21:       // Case 9pm 
        window.location = "/dark/index.html"; // Window location object finds the dark theme of webpage through pathname
        break;     // Break out of case 9pm 
    case 22:       // Case 10pm 
        window.location = "/dark/index.html"; // Window location object finds the dark theme of webpage through pathname
        break;     // Break out of case 10pm 
    case 23:       // Case 11pm 
        window.location = "/dark/index.html"; // Window location object finds the dark theme of webpage through pathname
        break;     // Break out of case 11pm 
    case 24:       // Case 12am (new day briefly before going to case 0)
        window.location = "/dark/index.html";  // Window location object finds the dark theme of webpage through pathname
        break;     //  Break out of case 12am 
    default:       // Default case  
        window.location = "/index.html"; // Window location finds the light theme of webpage through pathname
}

document.getElementById('hours').innerHTML = hour_of_day; // document gives element of hours by paragraph id from innerHTML of index.html