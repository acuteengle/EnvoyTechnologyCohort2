document.getElementById("myHeader").innerHTML = "I understand Javascript";

document.getElementById("changeText").addEventListener("click", function () {
  document.getElementById("myHeader").innerHTML = "Event Listeners are cool!";
});

document.getElementById("myParagraph").style.textAlign = "center";
document.getElementById("myParagraph").style.color = "lightblue";

console.log("I understand how to log");

document.getElementById("sendAlert").addEventListener("click", function () {
  alert("I understand alerts!");
});

document.getElementById("changeimage").addEventListener("click", function () {
  document.getElementById("funimage").src="https://secure.img1-fg.wfcdn.com/im/02238154/compr-r85/8470/84707680/pokemon-pikachu-wall-decal.jpg"
});