var factList = ["The GT high school dropout rate has increased.",
"Many graduating GT high school seniors report experiencing burn out.",
"Depression and anxiety has increased among GT students.",
"Many GT students report feeling alone in their education."];

var fact = document.getElementById("fact");
var btn = document.getElementById("btn");
var count = 0;

if(btn){
  btn.addEventListener("click", displayFact);
}
function displayFact(){
  fact.innerHTML = factList[count];
  count++;
  if (count == factList.length){
    count = 0;
  }
}
