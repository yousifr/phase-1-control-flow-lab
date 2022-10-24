function scuberGreetingForFeet(feet){
  // Write your code here!
  if(feet<=400){
    return "This one is on me"
  }
  else if(feet>400){
    return "You have to pay"
  }
}

function ternaryCheckCity(feet){
  // Write your code here!
  return feet<=400?"This one is on me": "you have to pay"
}

function switchOnCharmFromTip(){
  // Write your code here!
}
console.log(ternaryCheckCity(700))