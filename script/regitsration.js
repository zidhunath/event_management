const baseUrl = `http://localhost:3000/users`;

let nameInput = document.getElementById("name");
let ageInput = document.getElementById("age");
let placeInput = document.getElementById("place");
let profession = document.getElementById("profession");
let form = document.getElementById("submit_Form");
let submitButton = document.getElementById("submit");

submitButton.addEventListener("click", (e) => {
  e.preventDefault();

  if (nameInput == "") {
    alert("Plaese enter Name");
  } 
  else if (age.value == "") {
    alert("Please enter Age");
  } 
  else if (placeInput.value == "") {
    alert("Please enter Place");
  } 
  else 
  {
    let userObj = {
      name: nameInput.value,
      age: ageInput.value,
      place: placeInput.value,
      profession: profession.value,
    };

    fetch(baseUrl, {
      method: "POST",
      body: JSON.stringify(userObj),
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        //console.log(data)
        console.log(userObj);
      });
  }
});
