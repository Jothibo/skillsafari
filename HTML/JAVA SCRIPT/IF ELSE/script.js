let donorName = prompt("Enter your name:");
let donorAge = prompt("Enter your age:");
let donorWeight = prompt("Enter your weight in kg:");
let donorBloodType = prompt("Enter your blood type (e.g. A+, B-, AB+):");

if (donorAge >= 18) {
  if (donorWeight >= 50) {
    alert(
      donorName +
        ", you are eligible to donate blood. Thank you for your willingness to donate!"
    );

    // add donor to list
    let donorList = [];
    donorList.push(donorName);
    donorList.push(donorAge);
    donorList.push(donorWeight);
    donorList.push(donorBloodType);
    console.log(donorList); // print the donor list to the console for testing purposes
  } else {
    alert(
      donorName +
        ", you are not eligible to donate blood. Thank you for your interest in donating."
    );
  }
} else {
  alert(
    donorName +
      ", you are not eligible to donate blood. Thank you for your interest in donating."
  );
}
