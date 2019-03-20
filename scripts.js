/**
 * 1. LISTEN for and HANDLE the 'submit' event.
 * 2. QUERY the DOCUMENT for the <form> fields and store those VALUES in variable(s). -- DONE
 * 3. Add fname and lname into its own object. -- DONE
 * 4. Push the new object onto an Array
 * 5. Randomly select a 'student Object' from the Array and console.log().
 */

const students = [];

function studentCreator() {

  const fname = document.querySelector('#fname').value;
  const lname = document.querySelector('#lname').value;

  const student = {
    fname,
    lname
  }

  return student;
}

document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();
  students.push(studentCreator());
  console.log(students);
});
