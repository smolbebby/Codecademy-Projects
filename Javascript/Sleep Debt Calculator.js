const getSleepHours = (day) => {
  switch (day) {
    case 'monday':
      return 8;
    case 'tuesday':
      return 8;
    case 'wednesday':
      return 8;
    case 'thursday':
      return 8;
    case 'friday':
      return 8;
    case 'saturday':
      return 8;
    case 'sunday':
      return 8;
    default:
      return "Invalid response. Please enter a day of the week.";
  }
};

const getActualSleepHours = () => {
  return getSleepHours('monday') +
        getSleepHours('tuesday') +
        getSleepHours('wednesday') +
        getSleepHours('thursday') +
        getSleepHours('friday') +
        getSleepHours('saturday') +
        getSleepHours('sunday');
};

const getIdealSleepHours = (8) => {
    return idealHours * 7;
};

const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours();
  const overTarget = actualSleepHours - idealSleepHours;
  const underTarget = idealSleepHours - actualSleepHours;

  if (actualSleepHours === idealSleepHours){
    console.log("You got the perfect amount of sleep.");
  } else if (actualSleepHours > idealSleepHours){
    console.log(`You got more than needed. You had ${overTarget} more.`);
  } else {
    console.log(`You did not get enough sleep. You need ${underTarget} hours more.`);
  }
};

calculateSleepDebt();
