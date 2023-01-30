const { validationResult } = require("express-validator");

function showPassword() {
  var x = document.getElementById("password");
  if (x.type === "password") {
    x.type = "text";
    setTimeout(() => {
      var cb1 = document.getElementById("cb1");
      cb1.checked = false;
      x.type = "password";
    }, 300);
  } else {
    x.type = "password";
  }
}

function showPassword2() {
  var x = document.getElementById("confirmPassword");
  if (x.type === "password") {
    x.type = "text";
    setTimeout(() => {
      var cb2 = document.getElementById("cb2");
      cb2.checked = false;
      x.type = "password";
    }, 300);
  } else {
    x.type = "password";
  }
}

function validate() {
  document.getElementById("submit").addEventListener("click", function (event) {
    var name = document.getElementById("name").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;
    var phoneNumber = document.getElementById("phoneNumber").value;
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var nameFormat = /^[a-zA-Z]*$/g;
    var phoneFormat = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;


    // Name validation
    if (name.length == "" || !name.match(nameFormat)) {
      document.getElementById("name-err").innerHTML =
        "Please enter valid name!";
      event.preventDefault();
    } else {
      document.getElementById("name-err").innerHTML = "";
    }

    // Email validation
    if (document.getElementById("email").value.match(mailformat)) {
      document.getElementById("email-err").innerHTML = "";
    } else {
      document.getElementById("email-err").innerHTML =
        "Please enter valid email!";
      event.preventDefault();
    }

    // Password validation
    if (
      password.length < 6 ||
      /[A-Z]/g.test(password) == false ||
      /\d/g.test(password) == false
    ) {
      document.getElementById("password-err").innerHTML =
        "Password length should be atleast 6. <br /> Password should contain atleast one digit. <br /> Password should contain atleast one capital letter.  ";
    } else {
      document.getElementById("password-err").innerHTML = "";
    }

    if (confirmPassword == "") {
      document.getElementById("confirmPassword-err").innerHTML =
        "Confirm password cannot be empty.";
    } else if (password != confirmPassword) {
      event.preventDefault();
      document.getElementById("confirmPassword-err").innerHTML =
        "Password should match with confirmpassword.";
    } else {
      document.getElementById("confirmPassword-err").innerHTML = "";
    }

    if (!phoneNumber.match(phoneFormat)) {
      document.getElementById("phoneNumber-err").innerHTML =
        "Invalid phone number!";
    } else {
      document.getElementById("phoneNumber-err").innerHTML = "";
    }
  });

  document.getElementById("success").hidden = false;
  document.getElementById("success").innerHTML = "User registered successfully!";

  name = "";
  password = "";
}

