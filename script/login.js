let otpSection = document.querySelector("#otp-section");
let emailSection = document.querySelector("#email-section");
let emailBtn = document.querySelector("#email-button");
let submitBtn = document.querySelector("#sign-in-button");
let form = document.querySelector(".login-form");

emailBtn.addEventListener("click", () => {
  console.log("testing 1.....");
  emailSection.style.display = "none";
  otpSection.style.display = "block";
});

form.onsubmit = (event) => {
  console.log("testing 2....");
  event.preventDefault();
  console.log("Form Submitted...");
  emailSection.style.display = "block";
  otpSection.style.display = "none";
};
