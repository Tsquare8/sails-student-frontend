/**
 * Use the jQuery Validate and the bootstrap-select plugin to enhance this page
 *
 * Here's what this you will need to do:
 *
 * 1. When the page is loaded all form fields should be disabled except
 *    for the dropdown to select a student
 *
 * 2. Using the bootstrap-selct plugin render dropdown on the page
 *
 * 3. Use the live search functionality to make the dropdown searchable
 *
 * 4. Add the user glyphicons next to each student in the list
 *
 * 6. Add a menu header to the dropdown
 *
 * 7. Customize further with anything you find intersting
 *
 * 8. When an student is selected the form fields should be enabled
      and populated with the data for the selected student
 *
 * 9. Use jQuery validate and add validation to the form with the following requirements
 *    First Name - required, at least 2 characters
 *    Last Name  - required, at least 2 characters
 *	  start_date - make sure date is yyyy-mm-dd
 *	  ADD any other validation that makes you happy
 *
 * 10. Make the color of the error text red
 *
 *
 *
 * Here's the documentation you need:
 * https://jqueryvalidation.org/validate/
 * https://jqueryvalidation.org/documentation/#link-list-of-built-in-validation-methods
 * https://silviomoreto.github.io/bootstrap-select/
 * https://silviomoreto.github.io/bootstrap-select/examples/
 *  http://getbootstrap.com/components/#glyphicons
 * https://api.jquery.com/jQuery.get/
 * http://stackoverflow.com/questions/9807426/use-jquery-to-re-populate-form-with-json-data
 *
 */

(function() {

  $(function() {

    //disable form but not dropdown
    $("#updateStudentForm :input").prop("disabled", true);

    //render dropdown, live search for searchable dropdown and add menu header
    $("#student_id").selectpicker({
      style: 'btn-info',
      size: 10,
      liveSearch: true,
      header: "Select a student to update."
    });

    //enable form once once student is selected and populate fields with student info
    $("#student_id").on('changed.bs.select', function() {

      $("#updateStudentForm :input").prop("disabled", false);



      $("select option:selected").each(function() {
        let recordId = $(this).val()
        $.get('http://localhost:1337/student/' + recordId, function(data) {
          // console.log(data);
          $.each(data, function(name, value) {
            let tabledata = $('[name="' + name + '"]'),
              name1 = tabledata.attr('name');

            console.log("name: " + name + " value: " + value);

            switch (name1) {
              case "student_id":
                tabledata.val(value);
                break;
              case "first_name":
                tabledata.val(value);
                break;
              case "last_name":
                tabledata.val(value);
                break;
              case "start_date":
                tabledata.val(value)
                break;
              case "gpa":
                tabledata.val(value);
                break;
              case "sat":
                tabledata.val(value);
                break;
              case "major_id":
                tabledata.val(value);
                break;
            }
          })
        })
      })
    })
    $("#updateStudentForm").validate({
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
    })
  })
})();
