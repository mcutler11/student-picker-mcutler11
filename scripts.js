/**
 * 1. LISTEN for and HANDLE the 'submit' event.
 * 2. QUERY the DOCUMENT for the <form> fields and store those VALUES in variable(s). -- DONE
 * 3. Add fname and lname into its own object.
 * 4. Push the new object onto an Array
 * 5. Randomly select a 'student Object' from the Array and console.log().
 */

function submitHandler(event) {
  event.preventDefault();

  const fname = document.querySelector('#fname').value;
  const lname = document.querySelector('#lname').value;

  const student = {
    firstName: fname,
    lastName: lname
  };

  console.log(student);
}

document.querySelector("form").addEventListener("submit", submitHandler);
