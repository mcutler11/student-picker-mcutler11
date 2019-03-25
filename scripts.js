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

document.querySelector("form").addEventListener("submit", e => {
  const fname = document.querySelector('#fname').value;
  const lname = document.querySelector('#lname').value;
  e.preventDefault();
  students.push(studentCreator(fname, lname));
  console.log(students);
});

document.querySelector("button").addEventListener("click", () => {
  console.log(students[students[]]);
});
