document
  .getElementById("loginForm")
  ?.addEventListener("submit", function (event) {
    event.preventDefault();
    alert("Login submitted!");
  });

document
  .getElementById("contactForm")
  ?.addEventListener("submit", function (event) {
    event.preventDefault();
    alert("Message sent!");
  });

document
  .getElementById("registerForm")
  ?.addEventListener("submit", function (event) {
    event.preventDefault();
    alert("Registration submitted!");
  });
