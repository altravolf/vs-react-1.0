//   This to update copyright year automatically.
let date = new Date();

let currYear = date.getFullYear();

const copyYear = document.querySelector("#copyYear");
copyYear.textContent = currYear;


//   This is for Pop up form.
document.addEventListener("DOMContentLoaded", function () {
    // Add a 1000ms (1 second) delay before showing the modal
    setTimeout(function () {
        var myModal = new bootstrap.Modal(document.getElementById('popup'));
        myModal.show();
    }, 500);
});




// *  Form validation Js
// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
    'use strict'

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')

    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
        .forEach(function (form) {
            form.addEventListener('submit', function (event) {
                if (!form.checkValidity()) {
                    event.preventDefault()
                    event.stopPropagation()
                }

                form.classList.add('was-validated')
            }, false)
        })
})()



// ! Get the input element
const mobileNoInput = document.getElementById('mobileNo');

// Add an event listener to the input element
mobileNoInput.addEventListener('input', function (event) {
    // Remove any non-numeric characters using a regular expression
    this.value = this.value.replace(/\D/g, '');
});




// ! Under development
document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the form from submitting traditionally

    // Disable the submit button
    document.getElementById('submitBtn').disabled = true;

    // Show the spinner and replace the button text only if the form is valid
    if (this.checkValidity()) {
        // Show the spinner and replace the button text
        document.getElementById('spinner').classList.remove('d-none');
        document.getElementById('submitText').textContent = '';

        // Fetch user inputs
        const from_name = document.getElementById('name').value;
        const email_id = document.getElementById('email').value;
        const mobile_no = document.getElementById('mobileNo').value;
        const message = document.getElementById('message').value;

        // Use EmailJS to send the email
        emailjs.send('service_294yd3t', 'template_44bxxdj', {
            from_name: from_name,
            email_id: email_id,
            mobile_no: mobile_no,
            message: message
        })
            .then(function (response) {
                console.log('Email sent!', response);
                // Hide the spinner and re-enable the submit button
                document.getElementById('spinner').classList.add('d-none');
                document.getElementById('submitBtn').disabled = false;
                // Change back the button text to 'Submit'
                document.getElementById('submitText').textContent = 'Submit';
                // Display the confirmation modal after successful submission
                const confirmationModal = new bootstrap.Modal(document.getElementById('exampleModalToggle2'));
                confirmationModal.show();
                // Hide the initial modal by removing the 'show' class
                const initialModal = document.getElementById('popup');
                initialModal.classList.remove('show');
                initialModal.setAttribute('aria-hidden', 'true');
                initialModal.setAttribute('style', 'display: none');

                // Remove the modal backdrop
                const backdrop = document.querySelector('.modal-backdrop');
                backdrop.parentNode.removeChild(backdrop);
                // You can add further actions here after successful email sending
            })
            .catch(function (error) {
                console.error('Error sending email:', error);
                // Hide the spinner and re-enable the submit button
                document.getElementById('spinner').classList.add('d-none');
                document.getElementById('submitBtn').disabled = false;
                // Change back the button text to 'Submit'
                document.getElementById('submitText').textContent = 'Submit';
                // You can handle errors here
            });
    } else {
        // If the form is invalid, reset the button state
        document.getElementById('submitBtn').disabled = false;
    }
});





