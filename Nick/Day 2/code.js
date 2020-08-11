document.getElementById("head").innerHTML="help";

document.getElementById("change").addEventListener("click", function(){
    document.getElementById("head").innerHTML="here we go bois";
});
document.getElementById("alert").addEventListener("click", function(){
    alert("ding dong your opinion is wrong");
});
document.getElementById("fun").addEventListener("click", function(){
    document.getElementById("card").src="https://kachagain.com/sifas/images/cards/48_t.png";
});
document.getElementById("para").style.textAlign="center";
document.getElementById("para").style.color="blue";
console.log("here");