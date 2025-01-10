// Smooth Scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form Validation
document.querySelector('form').addEventListener('submit', function (e) {
    const name = document.querySelector('input[name="name"]').value.trim();
    const phone = document.querySelector('input[name="phone"]').value.trim();
    const message = document.querySelector('textarea[name="message"]').value.trim();

    let errorMessage = "";

    // Validate Name
    if (name.length < 3) {
        errorMessage += "Name must be at least 3 characters long.\n";
    }

    // Validate Phone Number
    const phoneRegex = /^[0-9]{10}$/; // Regex for 10-digit phone number
    if (!phoneRegex.test(phone)) {
        errorMessage += "Please enter a valid 10-digit phone number.\n";
    }

    // Validate Message
    if (message.length < 10) {
        errorMessage += "Message must be at least 10 characters long.\n";
    }

    // Display Errors or Allow Form Submission
    if (errorMessage) {
        e.preventDefault();
        alert(errorMessage); // Show all errors in a single alert
    }
});
function sendEmail(name, phone, message) {
    const email = "sonuhyd0@gmail.com";
    const subject = "New message from contact form";
    const body = `Name: ${name}\nPhone Number: ${phone}\nMessage: ${message}`;

    const xhr = new XMLHttpRequest();
    xhr.open("POST", "https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec");
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.onload = function () {
      if (xhr.status === 200) {
        alert("Email sent successfully!");
      } else {
        alert("Error sending email!");
      }
    };

    const encodedParams = encodeURIComponent(body);
    xhr.send(`email=${email}&subject=${subject}&body=${encodedParams}`);
  }