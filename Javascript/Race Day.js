let raceNumber = Math.floor(Math.random() * 1000);

const registeredEarly = false;
const runnerAge = 18;

if (runnerAge >= 18 && registeredEarly == true){
  secondNumber = raceNumber + 1000;
}
if (runnerAge > 18 && registeredEarly == true){
  console.log(`You will race at 9.30 am, with your number being ${secondNumber}`);
}
else if (runnerAge > 18 && registeredEarly == false){
  console.log(`You will race at 11.00 am, with your number being ${raceNumber}`);
}
else if (runnerAge < 18){
  console.log(`You will race at 12.30 pm, with your number being ${raceNumber}`);
}
else {
  console.log("Please see the registration desk for further assistance.");
}
