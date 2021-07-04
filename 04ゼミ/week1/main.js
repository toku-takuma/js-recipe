const soccer=document.getElementById("soccer")
const badminton=document.getElementById("badminton")
const table_tennis=document.getElementById("table_tennis")
const tennis=document.getElementById("tennis")
const display=document.getElementById("display")

soccer.onclick=function(){
    display.textContent="残念！不正解！"
}
badminton.onclick=function(){
    display.textContent="残念！不正解！"
}
table_tennis.onclick=function(){
    display.textContent="お見事！正解！"
}
tennis.onclick=function(){
    display.textContent="残念！不正解！"
}
