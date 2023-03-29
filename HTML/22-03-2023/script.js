const form = document.querySelector("form");
const routeInput = document.getElementById("route");
const dateInput = document.getElementById("date");
const seatsInput = document.getElementById("seats");

form.addEventListener("submit", (event) => {
  // Prevent the form from submitting if there are validation errors
  if (!validateInputs()) {
    event.preventDefault();
  }
});

function validateInputs() {
  let isValid = true;

  // Check if a route is selected
  if (routeInput.value === "") {
    routeInput.classList.add("error");
    isValid = false;
  } else {
    routeInput.classList.remove("error");
  }

  // Check if a date is selected
  if (dateInput.value === "") {
    dateInput.classList.add("error");
    isValid = false;
  } else {
    dateInput.classList.remove("error");
  }

  // Check if the number of seats is valid
  if (
    seatsInput.value === "" ||
    isNaN(seatsInput.value) ||
    seatsInput.value <= 0
  ) {
    seatsInput.classList.add("error");
    isValid = false;
  } else {
    seatsInput.classList.remove("error");
  }

  return isValid;
}
