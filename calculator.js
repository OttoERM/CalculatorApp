const allKeys = document.querySelector(".keysContainer").children[0];
const result = document.getElementById("result");
const sequence = document.getElementById("sequence");
var number = "";
var numberOperations = [];

//setting generalKeys
allKeys.children[0].addEventListener("click", () => {
  addNumber("7");
  updateResultText();
  updateSequenceText();
});
allKeys.children[1].addEventListener("click", () => {
  addNumber("8");
  updateResultText();
});
allKeys.children[2].addEventListener("click", () => {
  addNumber("9");
  updateResultText();
});
allKeys.children[4].addEventListener("click", () => {
  addNumber("4");
  updateResultText();
});
allKeys.children[5].addEventListener("click", () => {
  addNumber("5");
  updateResultText();
});
allKeys.children[6].addEventListener("click", () => {
  addNumber("6");
  updateResultText();
});
allKeys.children[8].addEventListener("click", () => {
  addNumber("1");
  updateResultText();
});
allKeys.children[9].addEventListener("click", () => {
  addNumber("2");
  updateResultText();
});
allKeys.children[10].addEventListener("click", () => {
  addNumber("3");
  updateResultText();
});
allKeys.children[12].addEventListener("click", () => {
  if (number.length == 0) addNumber("0");
  addNumber(".");
  updateResultText();
});
allKeys.children[13].addEventListener("click", () => {
  addNumber("0");
  updateResultText();
});

//operation keys
allKeys.children[7].addEventListener("click", () => {
  if (!numberIsEmpty()) {
    numberOperations.push(number, " + ");
    updateSequenceText();
    number = "";
  }
});

allKeys.children[11].addEventListener("click", () => {
  if (!numberIsEmpty()) {
    numberOperations.push(number, " - ");
    updateSequenceText();
    number = "";
  }
});

allKeys.children[14].addEventListener("click", () => {
  if (!numberIsEmpty()) {
    numberOperations.push(number, " / ");
    updateSequenceText();
    number = "";
  }
});

allKeys.children[15].addEventListener("click", () => {
  if (!numberIsEmpty()) {
    numberOperations.push(number, " x ");
    updateSequenceText();
    number = "";
  }
});

//delete reset keys
allKeys.children[3].addEventListener("click", () => {
  if (number.length != 0) {
    deleteNumber();
    updateResultText();
  } else {
    numberOperations = [];
    updateSequenceText();
  }
});

allKeys.children[16].addEventListener("click", () => {
  number = "";
  numberOperations = [];
  result.textContent = "";
  sequence.textContent = "";
});

//equal key
allKeys.children[17].addEventListener("click", () => {
  numberOperations.push(number);
  updateSequenceText();
  calculate();
  result.style.fontSize = "2.25rem";
  result.textContent = numberOperations[0].toString();

  if (
    result.scrollWidth >
    parseInt(
      window.getComputedStyle(document.querySelector(".resultContainer")).width
    )
  )
    result.style.fontSize = "1.25rem";
  number = numberOperations[0].toString();
  numberOperations = [];
});

function addNumber(digit) {
  if (number.length !== 32) number = number + digit;
}

function deleteNumber() {
  number = number.slice(0, number.length - 1);
}

function numberIsEmpty() {
  if (number.length == 0) return true;
  else return false;
}

var resultTextContentLength = 0;
function updateResultText() {
  let resultText = number;

  let decimalPoint = "";
  if (resultText.includes(".")) {
    let digits = resultText.split(".");
    resultText = digits[0];
    decimalPoint = "." + digits[1];
  }

  let index = resultText.length;
  let originalLength = resultText.length;
  while (index > 0) {
    if (index !== originalLength && (originalLength - index) % 3 == 0) {
      resultText = resultText.slice(0, index) + "," + resultText.slice(index);
    }
    index--;
  }

  result.style.fontSize = "2.25rem";
  result.textContent = resultText + decimalPoint;

  if (
    result.scrollWidth >
    parseInt(
      window.getComputedStyle(document.querySelector(".resultContainer")).width
    ) -
      25
  ) {
    result.style.fontSize = "1.25rem";
  }
}

function updateSequenceText() {
  let sequenceText = "";

  numberOperations.forEach((element) => {
    sequenceText = sequenceText + element;
  });
  sequenceText = sequenceText.replaceAll(",", "");
  sequence.textContent = sequenceText;
}

function calculate() {
  let containMultiplication = numberOperations.includes(" x ");
  let containDivision = numberOperations.includes(" / ");

  while (containMultiplication == true || containDivision == true) {
    let multiplicationIndex = numberOperations.indexOf(" x ");
    let divisionIndex = numberOperations.indexOf(" / ");

    if (multiplicationIndex == -1 && divisionIndex == -1) {
      break;
    } else if (multiplicationIndex == -1) {
      //do divisions
      containMultiplication = false;
      adequateDivision(divisionIndex);
    } else if (divisionIndex == -1) {
      //do multiplications
      containDivision = false;
      adequateMultiplication(multiplicationIndex);
    } else {
      if (multiplicationIndex < divisionIndex) {
        //do multiplication so it goes first in order
        adequateMultiplication(multiplicationIndex);
      } else {
        //do division so it goes first in order
        adequateDivision(divisionIndex);
      }
    }
    // console.log(numberOperations);
  }

  while (numberOperations.length != 1) {
    let resolveValue = resolve(
      numberOperations[0],
      numberOperations[1],
      numberOperations[2]
    );
    numberOperations.splice(0, 0, resolveValue);
    numberOperations.splice(1, 3);
    // console.log(numberOperations);
  }
}

function adequateMultiplication(multiplicationIndex) {
  let resolveValue = resolve(
    numberOperations[multiplicationIndex - 1],
    numberOperations[multiplicationIndex],
    numberOperations[multiplicationIndex + 1]
  );
  numberOperations.splice(multiplicationIndex - 1, 0, resolveValue);
  numberOperations.splice(multiplicationIndex, 3);
}

function adequateDivision(divisionIndex) {
  let resolveValue = resolve(
    numberOperations[divisionIndex - 1],
    numberOperations[divisionIndex],
    numberOperations[divisionIndex + 1]
  );
  numberOperations.splice(divisionIndex - 1, 0, resolveValue);
  numberOperations.splice(divisionIndex, 3);
}

function resolve(a, operation, b) {
  let c = 0;

  a = +a;
  b = +b;
  switch (operation) {
    case " + ":
      c = a + b;
      break;
    case " - ":
      c = a - b;
      break;
    case " x ":
      c = a * b;
      break;
    case " / ":
      if (b != 0) c = a / b;
      else c = 0; //should throw undefined
      break;
  }
  return c;
}
