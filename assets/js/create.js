/**
 * Use the jQuery Validate plugin to add validation to the form
 *
 * Here's what this you will need to do:
 *
 * 1. Include the following jQuery Validate JavaScript in layout.ejs
 *    <script type="text/javascript" src="http://ajax.aspnetcdn.com/ajax/jquery.validate/1.15.0/jquery.validate.min.js"></script>
 *
 * 2. Use jQuery validate and add validation to the form with the following requirements
 *    First Name - required, at least 2 characters
 *    Last Name  - required, at least 2 characters
 *	  start_date - make sure date is yyyy-mm-dd
 *	  ADD any other validation that makes you happy
 *
 * 3. Use a custom message for one validation
 *
 * 4. Make the color of the error text red
 *
 *
 *
 * Here's the documentation you need:
 * https://jqueryvalidation.org/validate/
 * https://jqueryvalidation.org/documentation/#link-list-of-built-in-validation-methods
 *
 */

(function() {

  $(function() {

    $("#addStudentForm").validate({
      // debug: true,
      errorClass: "text-danger",
      rules: {
        first_name: {
          required: true,
          minlength: 2
        },
        last_name: {
          required: true,
          minlength: 2
        },
        start_date: {
          required: true,
          dateISO: true
        },
        sat: {
          maxlength: 4
        }
      },
      messages: {
        first_name: {
          required: "First name is a required field",
          minlength: jQuery.validator.format("First name needs to have at least 2 characters")
        },
        last_name: {
          required: "Last name is a required field",
          minlength: jQuery.validator.format("First name needs to have at least 2 characters")
        },
        start_date: {
          required: "Start_date is a required field"
        },
        sat: {
          maxlength: jQuery.validator.format("SAT is a maximum of 4 characters")
        }
      }
    });
  })
})();
