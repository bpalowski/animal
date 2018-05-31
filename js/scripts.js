$(document).ready(function() {
  var animal = prompt("What is your favorite animal");

  if(animal === "snake") {
    $('#snake').show();
  }
  else if(animal=="lion") {
    $('#lion').show();
  }
  else if(animal=="horse") {
    $('#horse').show();
  }
  else{
  $('#nothing').show();
}

});
