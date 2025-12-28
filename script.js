
document.addEventListener("DOMContentLoaded", function () {

  const form = document.querySelector("form");
  const nameInput = form.querySelector("input[type='text']");
  const emailInput = form.querySelector("input[type='email']");
  const messageInput = form.querySelector("textarea");

  form.addEventListener("submit", function (e) {
    e.preventDefault(); 

    if (validateForm()) {
      alert("Form submitted successfully!");
      form.reset();
    }
  });

  function validateForm() {
    if (nameInput.value.trim() === "") {
      alert("Please enter your name");
      return false;
    }

    if (emailInput.value.trim() === "") {
      alert("Please enter your email");
      return false;
    }

    if (messageInput.value.trim() === "") {
      alert("Please enter your message");
      return false;
    }

    return true;
  }

  
  const submitBtn = form.querySelector("button");

  submitBtn.addEventListener("mouseover", function () {
    submitBtn.textContent = "Click to Send";
  });

  submitBtn.addEventListener("mouseout", function () {
    submitBtn.textContent = "Submit";
  });

  
  const skills = document.querySelectorAll("#skill li");

  skills.forEach(function (skill) {
    skill.addEventListener("click", function () {
      skill.style.backgroundColor = "#3498db";
      skill.style.color = "white";
      skill.style.padding = "5px";
    });
  });

  const footer = document.querySelector("footer p");
  const year = new Date().getFullYear();
  footer.textContent = `© ${year} All rights reserved`;

});
