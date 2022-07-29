const formSection = document.querySelector("#formSection");
const thankYouSection = document.querySelector("#thankYouSection");

const ratingForm = document.querySelector("#ratingForm");
const formStatus = document.querySelector("#formStatus");
const userRating = document.querySelector("#userRating");

const errorMessages = {
  required: "Please submit a rating.",
};

const clearForm = () => {
  formStatus.innerHTML = "";
  userRating.innerHTML = "";
};

ratingForm.addEventListener("submit", (e) => {
  e.preventDefault();
  clearForm();

  const rating = ratingForm.elements["rating"];
  const value = rating.value;

  if (value) {
    userRating.innerHTML = value;
    formSection.setAttribute("data-close", true);
    thankYouSection.setAttribute("data-open", true);
  } else {
    formStatus.innerHTML = errorMessages.required;
  }
});
