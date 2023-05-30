const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(navLink => {
  navLink.addEventListener('click', function() {
    navLinks.forEach(link => link.classList.remove('active'));
    this.classList.add('active');
  });
});

function validateForm() {
   // Get input field values
  var firstName = document.forms["donation.html"]["fname"].value;
  var lastName = document.forms["donation.html"]["lname"].value;
  var phone = document.forms["donation.html"]["phone"].value;
  var email = document.forms["donation.html"]["email"].value;
  var address = document.forms["donation.html"]["adr"].value;
  var city = document.forms["donation.html"]["city"].value;
  var state = document.forms["donation.html"]["state"].value;
  var zip = document.forms["donation.html"]["zip"].value;
  var cardName = document.forms["donation.html"]["cardname"].value;
  var cardNumber = document.forms["donation.html"]["cardnumber"].value;
  var expMonth = document.forms["donation.html"]["expmonth"].value;
  var expYear = document.forms["donation.html"]["expyear"].value;
  var cvv = document.forms["donation.html"]["cvv"].value;
  
  // Validate required fields
   if (firstName == "" || lastName == "" || phone == "" || email == "" || address == "" || city == "" || state == "" || zip == "" || cardName == "" || cardNumber == "" || expMonth == "" || expYear == "" || cvv == "") {
    alert("Please fill out all required fields.");
     return false;
     }
  
   // Validate email format
   var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
   if (!emailRegex.test(email)) {
   alert("Please enter a valid email address.");
   return false;
   }
  
   // Validate credit card number format
   var cardNumberRegex = /^[0-9]{4}-[0-9]{4}-[0-9]{4}-[0-9]{4}$/;
   if (!cardNumberRegex.test(cardNumber)) {
   alert("Please enter a valid credit card number.");
   return false;
  }
  
   // Validate CVV format
   var cvvRegex = /^[0-9]{3}$/;
   if (!cvvRegex.test(cvv)) {
   alert("Please enter a valid CVV number.");
   return false;
   }
  
   // If all validations pass, submit the form
   alert("Thank you for your donation!");
   return true;
  }

 var src="path/to/your/javascript/file.js"