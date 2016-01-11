let i = 0
let timerId = setInterval(function() {
	document.getElementById("timer").innerHTML= i++;
}, 1000);
console.log(timerId);
setTimeout(function() {
  clearInterval(timerId);
  //alert( 'стоп' );
}, 5000);