document.addEventListener("DOMContentLoaded", function(){
var redVal = document.querySelector('input#red');
var greenVal = document.querySelector('input#green');
var blueVal = document.querySelector('input#blue');

function updateBackground()
{
    var r = redVal.value;
    var g = greenVal.value;
    var b = blueVal.value;

    document.body.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';

}


redVal.addEventListener('input', updateBackground);
greenVal.addEventListener('input', updateBackground);
blueVal.addEventListener('input', updateBackground);
});
