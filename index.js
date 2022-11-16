// const selectRatingPage = document.querySelector(".selectRatingPage");
// const showRatingPage = document.querySelector(".showRatingPage");
// const ratingNumber = document.querySelectorAll(".ratingNumber");
// const confirmedRating = document.querySelector(".confirmedRating");

let star1 = document.querySelector(".starImg1")
let star2 = document.querySelector(".starImg2")
let star3 = document.querySelector(".starImg3")
let star4 = document.querySelector(".starImg4")
let star5 = document.querySelector(".starImg5")


// // //raiting stars
let ratingAll = document.querySelectorAll('.ratingNumber');
let stars = document.querySelector('#star');

for (let i = 0; i < ratingAll.length; i++) {
  ratingAll[i].addEventListener('click', btn)
}

function btn() {
  console.log(this.id);

  if(this.id == 1 ) {
    star1.style.display = "flex";
  }else{
    star1.style.display = "none";
  }
  if(this.id == 2 ) {
    star2.style.display = "flex";
  }else{
    star2.style.display = "none";
  }
  if(this.id == 2 ) {
    star2.style.display = "flex";
  }else{
    star2.style.display = "none";
  }
  if(this.id == 3 ) {
    star3.style.display = "flex";
  }else{
    star3.style.display = "none";
  }
  if(this.id == 4 ) {
    star4.style.display = "flex";
  }else{
    star4.style.display = "none";
  }
  if(this.id == 5 ) {
    star5.style.display = "flex";
  }else{
    star5.style.display = "none";
  }
}


const selectRatingPage = document.querySelector(".selectRatingPage");
const showRatingPage = document.querySelector(".showRatingPage");
const ratingNumber = document.querySelectorAll(".ratingNumber");
const confirmedRating = document.querySelector(".confirmedRating");

// Check for previous rating state
window.addEventListener("load", (event) => {
  for (let index = 0; index < ratingNumber.length; index++) {
    const element = ratingNumber[index];
    const rating = localStorage.getItem("rating");
    // console.log(rating)
    if (element.classList[0] === rating) element.classList.add("bg-MediumGrey", "text-white");
  }
});

// Event Listener for changing states & upadate localStorage
for (let index = 0; index < ratingNumber.length; index++) {
  ratingNumber[index].addEventListener(
    "click",
    function (e) {
      e = e || window.event;
      let target = e.target || e.srcElement;
      target.classList.add("bg-MediumGrey", "text-white");
      let value = target.classList[0];
      // console.log(value)
      localStorage.setItem("rating", value);
    },
    false
  );
}
// Update Rating Style
const setRating = function () {
  for (let index = 0; index < ratingNumber.length; index++) {
    const element = ratingNumber[index];
    element.classList.remove("bg-MediumGrey", "text-white");
  }
};

// SubmitButton
const toggleButton = function () {
  selectRatingPage.classList.toggle("hidden");
  showRatingPage.classList.toggle("hidden");
  const rating = localStorage.getItem("rating");
  confirmedRating.textContent = rating;
};
