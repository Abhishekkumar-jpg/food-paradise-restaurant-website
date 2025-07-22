var footer_btn = document.getElementById("footer-btn");
footer_btn.addEventListener("click", function () {
  // Enter custmer name for checking further processers
  var footer_name = prompt("Enter your name:");

  // check customer name is enter or not
  if (footer_name && footer_name.trim() !== "") {
    // Enter custmer mobile number
    var footer_phone = prompt("Enter your phone number:");

    // check customer Name and Mobile number is correct or not
    var confirm_subscription =
      confirm(`Your Name is ${footer_name} and Mobile number is ${footer_phone}.
If your details are correct, please press OK.`);

    // check customer Buy Subscription or not
    if (confirm_subscription) {
      alert("Your Subscription has been Successfully Recorded");
    } else {
      alert("Subscription canceled.");
    }
  }
  // customer reject Subscription message
  else {
    alert("Sorry, your subscription has not been recorded.");
  }
});


// Order btn click events for ordering food
let orderBtns = document.getElementsByClassName("menu-btn");

for (let i = 0; i < orderBtns.length; i++) {
  orderBtns[i].addEventListener("click", () => {
    let userConfirmed = window.confirm(
      "Would you like to confirm your food order?"
    );

    if (userConfirmed) {
      alert("Thanks for your order!");
    } else {
      alert("Sorry, your food was not ordered. Please try again.");
    }
  });
}

// Order btn click events for ordering food
let orderBtns_menu = document.getElementsByClassName("card-btn");

for (let i = 0; i < orderBtns_menu.length; i++) {
  orderBtns_menu[i].addEventListener("click", () => {
    let userConfirmed = window.confirm(
      "Would you like to confirm your food order?"
    );

    if (userConfirmed) {
      alert("Thanks for your order!");
    } else {
      alert("Sorry, your food was not ordered. Please try again.");
    }
  });
}
