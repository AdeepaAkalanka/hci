// adapted from https://www.codeply.com/go/mhkMGnGgZo/bootstrap-4-validation-example

$("#bootstrapForm").submit(function (event) {

  // make selected form variable
  var vForm = $(this);

  /*
  If not valid prevent form submit
  https://developer.mozilla.org/en-US/docs/Web/API/HTMLSelectElement/checkValidity
  */
  if (vForm[0].checkValidity() === false) {
    event.preventDefault()
    event.stopPropagation()
  } else {

    event.preventDefault()
    // Replace alert with ajax submit here...
    //alert("your form is valid and ready to send");
    Swal.fire({
      title: 'Do you want to save the changes?',

      showCancelButton: true,
      confirmButtonText: `Save`,

    }).then(() => {
      /* Read more about isConfirmed, isDenied below */
      Swal.fire(
        'Good job!',
        'You clicked the button!',
        'success'
      ).then(() => {
        window.location.href = "./dashboard.html";
      })

    })


  }

  // Add bootstrap 4 was-validated classes to trigger validation messages
  vForm.addClass('was-validated');


});
