document.addEventListener("DOMContentLoaded", function() {
    const button = document.getElementById("Clk");
    const body = document.body;

    button.addEventListener("click", function() {
        body.classList.toggle("dark-mode");
        const currentMode = body.classList.contains("dark-mode") ? "Dark" : "Light";
        // button.textContent = `Mode(${currentMode})`;
    });
});
var count=0;
var count2=0;
function update1(){
    const but=document.getElementById("like1");
    count=1;
    document.getElementById("like1").style.transition="0.4s"
    document.getElementById("like1").style.color="magenta";
    document.getElementById("likes1").innerHTML=count+" Likes";
}
function update2(){
    const but=document.getElementById("like2");
    count2=1;
    document.getElementById("like2").style.transition="0.4s"
    document.getElementById("like2").style.color="magenta";
    document.getElementById("likes2").innerHTML=count2+" Likes";
}
