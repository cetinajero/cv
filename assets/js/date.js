// Variable definitions
var birthdate = '1987-08-12';
var workdate = '2006-12-25';
var timeZone = -7;

function calcTimeZone(hours) {
    return hours * 3600 * 1000
}

function isLeapYear(year) {
    var d = new Date(year, 1, 28);
    d.setDate(d.getDate() + 1);
    return d.getMonth() == 1;
}

function getYears(date, timeZone) {
    var d = new Date(date), now = new Date();
    var years = now.getFullYear() - d.getFullYear();
    d.setFullYear(d.getFullYear() + years);
    if (d > now) {
        years--;
        d.setFullYear(d.getFullYear() - 1);
    }
    var days = (now.getTime() - d.getTime() + calcTimeZone(timeZone)) / (3600 * 24 * 1000);
    return Math.floor(years + days / (isLeapYear(now.getFullYear()) ? 366 : 365));
}

document.getElementById("age-es").innerHTML = getYears(birthdate, timeZone);
document.getElementById("age-en").innerHTML = getYears(birthdate, timeZone);

document.getElementById("experience-es").innerHTML = getYears(workdate, timeZone);
document.getElementById("experience-en").innerHTML = getYears(workdate, timeZone);
