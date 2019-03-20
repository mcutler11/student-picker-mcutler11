/**
 * 1. LISTEN for and HANDLE the 'submit' event.
 * 2. QUERY the DOCUMENT for the <form> fields and store those VALUES in variable(s). -- DONE
 * 3. Add fname and lname into its own object. -- DONE
 * 4. Push the new object onto an Array -- DONE
 * 5. Randomly select a 'student Object' from the Array and console.log().
 */

const students = [
  { fname: "Michael", lname: "Cutler" },
  { fname: "Bernard", lname: "Matthews" },
  { fname: "Amelie", lname: "Bouchard" },
  { fname: "Edward", lname: "Russo" },
  { fname: "Camille", lname: "Schneider" }
];

function studentCreator(fname, lname) {

  const student = {
    fname,
    lname
  }

  return student;
}

document.querySelector("form").addEventListener("submit", (e) => {
  const fname = document.querySelector('#fname').value;
  const lname = document.querySelector('#lname').value;
  e.preventDefault();
  students.push(studentCreator(fname, lname));
  console.log(students);
});

document.querySelector('button').addEventListener('click', () => {
  console.log("Placeholder pls.");
});
