let otpSection = document.querySelector("#otp-section");
let emailSection = document.querySelector("#email-section");
let emailBtn = document.querySelector("#email-button");
let submitBtn = document.querySelector("#sign-in-button");
let form = document.querySelector(".login-form");
let emailText = document.querySelector("#email-section>input");
let emailId = "";

emailBtn.addEventListener("click", () => {
  console.log("testing 1.....");
  emailId = emailText.value;
  if (emailId == undefined || emailId == "") {
    console.log("email id :" + emailId);
    prompt("Please provide valid email address");
  } else {
    emailSection.style.display = "none";
    otpSection.style.display = "block";
  }
});

form.onsubmit = (event) => {
  console.log("testing 2....");
  event.preventDefault();
  console.log("Form Submitted...");
  emailId = emailText.value;

  prompt("Welcome email :" + emailId);
  emailSection.style.display = "block";
  otpSection.style.display = "none";
};
