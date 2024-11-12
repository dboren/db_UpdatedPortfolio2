
var modal = document.getElementById("myModal");

var wfhrImg = document.getElementById("wfhrImg");
var curatioImg = document.getElementById("curatioImg");
var nplImg = document.getElementById("nplImg");
var dayPlannerImg = document.getElementById("dayPlannerImg");
var weatherImg = document.getElementById("weatherImg");

var modalImg = document.getElementById("img01");

wfhrImg.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
}

var span = document.getElementsByClassName("close")[0];

//Ideally will need to condense these onclick blocks into a single function repeatable for any image on the page

span.onclick = function() {
  modal.style.display = "none";
}
curatioImg.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
  }
  
  var span = document.getElementsByClassName("close")[0];
  
  span.onclick = function() {
    modal.style.display = "none";
  }


  nplImg.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
  }
  
  var span = document.getElementsByClassName("close")[0];
  
  span.onclick = function() {
    modal.style.display = "none";
  }


  dayPlannerImg.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
  }
  
  var span = document.getElementsByClassName("close")[0];
  
  span.onclick = function() {
    modal.style.display = "none";
  }


  weatherImg.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
  }
  
  var span = document.getElementsByClassName("close")[0];
  
  span.onclick = function() {
    modal.style.display = "none";
  }