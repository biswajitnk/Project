// Running Date and Time

let date;
let today;
let houre;
let minute;
let second;
let AM_PM;

const clicktime = document.getElementById("timer");



setInterval(() => {
    date = new Date();
    today = date.getDay();
    
    houre = date.getHours();
    minute = date.getMinutes();
    second = date.getSeconds();
    AM_PM = (houre >= 12) ? " PM " : " AM ";
    houre = (houre > 12) ? (houre - 12) : houre;
    // houre = 15;
    if (minute < 10) {
        minute = "0" + minute;
    }

    if (second < 10) {
        second = "0" + second;
    }

    clicktime.innerHTML = ("<span>" + houre + "</span>" + "<span>" + AM_PM + "</span>" +"<b>"+ " : "+"</b>"+ "<span>" + minute + "</span>" +"<b>"+" : " +"</b>"+ "<span>" + second + "</span>")
}, 1000);


// day print in javascript

let D = new Date();
let T = D.getDay();

let dayword = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const ShowNew = document.getElementById("dayit");

function Myname() {
    setInterval(() => {

        ShowNew.innerHTML = "<span>" + dayword[T] + "</span>";

    }, 1000);
}
Myname();

// Gretting Messages

let DT = new Date();
let HR = DT.getHours();
let MI = DT.getMinutes();
const seasonS = document.getElementById("light");

console.log(HR)

function clickdo() {
    setInterval(() => {
        GT = "";

    if (HR > 5 && HR <= 12) {
        GT = "Good Morning"
    }
    else if (HR > 12 && HR < 17) {
        GT = "Good Afternoon"
    }
    else if (HR > 17 && HR <= 21) {
        GT = "Good Evening"
    }
    else if (HR > 21) {
        GT = "Good Night"
    }

    seasonS.innerHTML = GT;
    }, 1000);
} clickdo();

// setinterval(clickdo, 1000)

