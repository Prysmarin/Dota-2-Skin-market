let cases = document.querySelectorAll(".case");
let modal = document.querySelectorAll(".modal");
let close_modal = document.querySelectorAll(".close_modal");

for (let i = 0; i < cases.length; i++) {
  cases[i].addEventListener("click", function () {
      modal[i].classList.toggle("ishidden");
      close_modal[i].addEventListener("click", function () {
          modal[i].classList.toggle("ishidden");
      });
  });
}
