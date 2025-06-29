const form = document.querySelector("form");
const yourName = document.querySelector("#name");
const yourEmail = document.querySelector("#email");
const message = document.querySelector("#textarea");
const submit = document.querySelector(".fa-paper-plane");
const navLinks = document.querySelectorAll(".nav-link");
const hire_btn = document.querySelector("#hire");
const downloadcv_btn = document.querySelector("#cv");
emailjs.init("A6Wyg769rzJrrtTNj");

hire_btn.addEventListener("click", (e) => {
  window.location.href = "mailto:pritiranjan.mohanty2003@gmail.com";
});
downloadcv_btn.addEventListener("click", (e) => {
  window.open("https://drive.google.com/file/d/16L6jPGWkgLRpFr-hG9zxNYYo2Q4ttYBx/view?usp=sharing", "_blank");
});


// Add click event listener to each link
navLinks.forEach((link) => {
  link.addEventListener("click", function (e) {
    // Remove active class from all links
    navLinks.forEach((navLink) => {
      navLink.classList.remove("active");
    });

    // Add active class to clicked link
    this.classList.add("active");
  });
});

function sendEmail() {
  const templateParams = {
    from_name: yourName.value,
    from_email: yourEmail.value,
    message: message.value,
  };

  // Send email using EmailJS
  emailjs
    .send("service_ctu8j1n", "template_iqgyyd1", templateParams)
    .then((response) => {
      alert("Message sent successfully! I'll get back to you soon.");
      form.reset();
    })
    .catch((error) => {
      console.log("SUCCESS!", response.status, response.text);
      console.log("FAILED...", error);
      alert("Failed to send message. Please try again later.");
    });
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  sendEmail();
});
