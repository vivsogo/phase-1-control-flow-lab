function scuberGreetingForFeet(ride){
  if (ride <= 400){
    return "This one is on me!";
  }
  else if (ride <=2500 ){
    return "I will gladly take your thirty bucks.";
  }
  else {
    return "No can do.";
  }
  
}

function ternaryCheckCity(city){
  return (city === "NYC" ? "Ok, sounds good." : "No go.")
  
}


function switchOnCharmFromTip(tip){
  switch(tip){
    case("generous"):
      return "Thank you so much."
  }
  switch(tip){
    case("not as generous"):
     return "Thank you."
  }
  switch(tip){
    case("thanks for everything"):
    return "Bye."
  }

}