const comments = document.getElementById("e-comment-one");
const stars = document.querySelectorAll(".e-comment-one .star_rating div");
// const holder = document.getElementById('holder');
const holder=document.querySelector('.e-comment-one #holder')
function MouseOver(index) {
  for (let i = 0; i <= index; i++) {
    stars[i].classList.add("active");
  }
}
function MouseOUt(index) {
  for (let i = 0; i <= index; i++) {
    stars[i].classList.remove("active");
  }
}

// the teqhique used here in star rating, I changed the mouseout event linstener function
function starMousedOver(index) {
  holder.value  = 0;
  for (let i = 0; i < stars.length; i++) {
    stars[i].addEventListener("mouseout", () => MouseOUt(i));
  }

  for (let i = 0; i < stars.length; i++) {
    if (i <= index) {
      stars[i].classList.add("active");
    } else {
      stars[i].classList.remove("active");
    }
  }
}

function starClicked(index) {
  
  holder.value = index + 1;
  for (let i = 0; i < stars.length; i++) {
    stars[i].addEventListener("mouseout", () => MouseOver(i));
  }

  for (let i = 0; i <= index; i++) {
    stars[i].classList.add("active");
  }
}
