$("#contactForm").submit(function (event) {

    event.preventDefault();

    let name = $("#name").val();
    let email = $("#email").val();
    let phone = $("#phone").val();
    let message = $("#message").val();

    // Save feedback in Local Storage
    localStorage.setItem("contactName", name);
    localStorage.setItem("contactEmail", email);
    localStorage.setItem("contactPhone", phone);
    localStorage.setItem("contactMessage", message);

    // Send feedback to Formspree using jQuery AJAX
    $.ajax({
        url: "https://formspree.io/f/xdenpkyn",
        method: "POST",
        dataType: "json",
        data: {
            name: name,
            email: email,
            phone: phone,
            message: message
        },

        success: function () {

            alert("Thank you for your feedback!");

            $("#contactForm")[0].reset();
        },

        error: function () {

            alert("Sorry, your feedback could not be submitted.");
  
        }
    });

});