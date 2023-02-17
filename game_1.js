const key1 =document.getElementById ("nyckel1")
const key2 =document.getElementById ("nyckel2")
const key3 =document.getElementById ("nyckel3")

console.log(sessionStorage.display);
if (sessionStorage.display !== undefined) {
    key1.style.display = sessionStorage.display;
    key2.style.display = sessionStorage.display;
    key3.style.display = sessionStorage.display;
}
key1.onclick = function() {
    key1.style.display = "none";
    sessionStorage.display = "none";
}
key2.onclick = function() {
    key2.style.display = "none";
    sessionStorage.display = "none";
}
key3.onclick = function() {
    key3.style.display = "none";
    sessionStorage.display = "none";
}
const lock = document.getElementById("las");
const next = document.getElementById ("button");
next.style.display = "none"
lock.onclick = function() {
    if (key1.style.display === "none" && key2.style.display === "none" && key3.style.display === "none") {
        alert("you found all the keys, you can now go to the next room");
        next.style.display = "block";
    } 
    else{ 
        alert("you can't open the door without all the keys")
    }
}