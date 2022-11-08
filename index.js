const selectRatingPage = document.querySelector(".selectRatingPage");
const showRatingPage = document.querySelector(".showRatingPage");
const ratingNumber = document.querySelectorAll(".ratingNumber");
const confirmedRating = document.querySelector(".confirmedRating");


// SubmitButton
const toggleButton = function () {
  selectRatingPage.classList.toggle("hidden");
  showRatingPage.classList.toggle("hidden");
  const rating = localStorage.getItem("rating");
  confirmedRating.textContent = rating;
};
