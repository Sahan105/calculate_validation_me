let addInput = document.querySelector(".addinput");
let minusInput = document.querySelector(".minusinput");
let multiInput = document.querySelector(".multiinput");
let divInput = document.querySelector(".divinput");

let result = document.querySelector(".result");
let error = document.querySelector(".error");
let validationError = document.querySelector(".validationError");
let mainBtn = document.querySelector(".mainbtn");

// let log = document.querySelector("ol");  //extra feature
let log = document.querySelector("ul");

// Variables
let startingNumber = 0;

result.innerHTML = startingNumber;

let arr = [];

function calculateWithValidation() {
  if (
    addInput.value &&
    minusInput.value == "" &&
    multiInput.value == "" &&
    divInput.value == ""
  ) {
    error.innerHTML = "";
    // log.innerHTML += `<li >  adding ${result.innerHTML} with ${addInput.value} </li>`;

    if (addInput.value - 99 == 0 ? false : !(addInput.value - 99)) {
      // result.style.display = "none";
      // result.innerHTML = "";
      // validationError.innerHTML = "Please Give A Number";
      Swal.fire({
        icon: "info",
        title: "Heyyyyy...",
        text: "Please Give A Number",
      });
      // validationError.style.color = "red";
    } else if (addInput.value - 99) {
      // validationError.innerHTML = "This is A Number";
      validationError.innerHTML = "";
      arr.push({
        text: "Adding",
        result: result.innerHTML,
        values: addInput.value,
      });
      result.innerHTML = `${Number(result.innerHTML) + Number(addInput.value)}`;
    }

    addInput.value = "";
  }
  //subtraction
  else if (
    minusInput.value &&
    addInput.value == "" &&
    multiInput.value == "" &&
    divInput.value == ""
  ) {
    error.innerHTML = "";
    validationError.innerHTML = "";
    if (minusInput.value - 99 == 0 ? false : !(minusInput.value - 99)) {
      // result.style.display = "none";
      // result.innerHTML = "";
      // validationError.innerHTML = "Please Give A Number";
      // validationError.style.color = "red";
      Swal.fire({
        icon: "info",
        title: "Heyyyyy...",
        text: "Please Give A Number",
      });
    } else if (minusInput.value - 99) {
      // validationError.innerHTML = "This is A Number";
      validationError.innerHTML = "";
      if (result.innerHTML > 0 && result.innerHTML >= minusInput.value) {
        // log.innerHTML += `<li> subtracting ${result.innerHTML} with ${minusInput.value} </li>`;
        arr.push({
          text: "Subtracting",
          result: result.innerHTML,
          values: minusInput.value,
        });

        result.innerHTML = `${
          Number(result.innerHTML) - Number(minusInput.value)
        }`;
      } else {
        // error.innerHTML = "Please do proper subtraction from bigger to smaller";
        Swal.fire({
          icon: "info",
          title: "Heyyyyy...",
          text: "Please do proper subtraction from bigger to smaller",
        });
      }
    }
    minusInput.value = "";
  }
  //multiplication:
  else if (
    multiInput.value &&
    minusInput.value == "" &&
    addInput.value == "" &&
    divInput.value == ""
  ) {
    error.innerHTML = "";
    validationError.innerHTML = "";
    if (multiInput.value - 99 == 0 ? false : !(multiInput.value - 99)) {
      // result.style.display = "none";
      // result.innerHTML = "";
      // validationError.innerHTML = "Please Give A Number";
      // validationError.style.color = "red";
      Swal.fire({
        icon: "info",
        title: "Heyyyyy...",
        text: "Please Give A Number",
      });
    } else if (multiInput.value - 99) {
      // validationError.innerHTML = "This is A Number";
      validationError.innerHTML = "";
      if (result.innerHTML > 0) {
        arr.push({
          text: "multiplying",
          result: result.innerHTML,
          values: multiInput.value,
        });
        result.innerHTML = `${
          Number(result.innerHTML) * Number(multiInput.value)
        }`;
      } else {
        // error.innerHTML = "Don't multiply with 0";
        Swal.fire({
          icon: "info",
          title: "Heyyyyy...",
          text: "'Don't multiply with 0'",
        });
      }
    }
    multiInput.value = "";
  }
  //division:
  else if (
    divInput.value &&
    multiInput.value == "" &&
    minusInput.value == "" &&
    addInput.value == ""
  ) {
    error.innerHTML = "";
    validationError.innerHTML = "";
    if (divInput.value - 99 == 0 ? false : !(divInput.value - 99)) {
      // result.style.display = "none";
      // result.innerHTML = "";
      // validationError.innerHTML = "Please Give A Number";
      // validationError.style.color = "red";
      Swal.fire({
        icon: "info",
        title: "Heyyyyy...",
        text: "Please Give A Number",
      });
    } else if (divInput.value - 99) {
      // validationError.innerHTML = "This is A Number";
      validationError.innerHTML = "";
      if (result.innerHTML > 0 && result.innerHTML >= divInput.value) {
        arr.push({
          text: "Dividing",
          result: result.innerHTML,
          values: divInput.value,
        });
        result.innerHTML = `${
          Number(result.innerHTML) / Number(divInput.value)
        }`;
      } else {
        // error.innerHTML = "Please do proper division from bigger to smaller";
        Swal.fire({
          icon: "info",
          title: "Oops...",
          text: "Please do proper division from bigger to smaller",
        });
      }
    }
    divInput.value = "";
  } else {
    // error.innerHTML = "Multiple value can not be put at the same time";
    // error.style.color = "red"; //extra feature
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Multiple value can not be put at the same time",
    });
  }
  log.innerHTML = "";
  arr.map((item, index) => {
    log.innerHTML += `<li> ${index + 1}. ${item.text}  ${item.result} with ${
      item.values
    }   </li>`;
  });
}
//-------------------------------------------------------------------

//Calculate main task:
mainBtn.addEventListener("click", function () {
  //extra feature
  calculateWithValidation();
  if (result.innerHTML >= 10000) {
    mainBtn.style.display = "none";
  }
});

// Validation Logic:
//-------------------
//mainBtn.addEventListener("click", function () {
// As !NaN == true
// if (minusInput.value - 99 == 0 ? false : !(minusInput.value - 99)) {
//   // result.style.display = "none";
//   result.innerHTML = "";
//   validationError.innerHTML = "Please Give A Number";
//   validationError.style.color = "red";
// } else if (minusInput.value - 99) {
//   // validationError.innerHTML = "This is A Number";
//   validationError.innerHTML = "";
// }
//});
