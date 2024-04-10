document.addEventListener("DOMContentLoaded", function () {
  // Get the contact link element
  const contactLink = document.getElementById("Project-link");

  // Add click event listener to the contact link
  contactLink.addEventListener("click", function (event) {
    // Prevent default link behavior (e.g., jumping to the top of the page)
    event.preventDefault();

    // Scroll to the contact section smoothly
    document.getElementById("project").scrollIntoView({
      behavior: "smooth",
    });
  });
});

//redirect to fb
document
  .getElementById("FB-Account-link")
  .addEventListener("click", function () {
    window.location.href = "https://web.facebook.com/aldrin.belardo.77";
  });

//contact
document.getElementById("Contact-link").addEventListener("click", function () {
  window.alert("Phone: 09667339904\n\nEmail: belardoaldrin90@gmail.com");
});
