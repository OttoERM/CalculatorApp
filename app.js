import "./calculator.js";
import "./devicesInput.js";

//check operator signs

//getting html element for style theme
const bodyElem = document.querySelector("body");
const sliderContainer = document.querySelector(
  ".headContainer__sliderContainer"
);
const toggleButton = document.getElementById("toggleButton");
const resultContainer = document.querySelector(".resultContainer");
const keysContainer = document.querySelector(".keysContainer");
const generalKeys = document.querySelectorAll(".theme1GeneralKeys");
const deleteResetKeys = [
  document.getElementById("deleteKey"),
  document.getElementById("resetKey"),
];
const equalKey = document.getElementById("equalKey");

//function is imported and executed in devicesInput.js
export function addStyleClassesForTheme(value) {
  removeAllClasses();
  if (value == 1) {
    bodyElem.classList.add("theme1TextColor");
    sliderContainer.classList.add("theme1ToggleKeyContainer");
    toggleButton.classList.add("theme1BgColorToggleEqualKey");
    resultContainer.classList.add("theme1ScreenResultContainer");
    keysContainer.classList.add("theme1ToggleKeyContainer");
    generalKeys.forEach((genKey) => {
      genKey.classList.add("theme1GeneralKeys");
    });
    deleteResetKeys.forEach((delResKey) => {
      delResKey.classList.add("theme1DeleteResetKeys");
    });
    equalKey.classList.add("theme1EqualKey", "theme1BgColorToggleEqualKey");
  } else if (value == 2) {
    bodyElem.classList.add("theme2TextColor");
    sliderContainer.classList.add("theme2ToggleKeyContainer");
    toggleButton.classList.add("theme2BgColorToggleEqualKey");
    resultContainer.classList.add("theme2ScreenResultContainer");
    keysContainer.classList.add("theme2ToggleKeyContainer");
    generalKeys.forEach((genKey) => {
      genKey.classList.add("theme2GeneralKeys");
    });
    deleteResetKeys.forEach((delResKey) => {
      delResKey.classList.add("theme2DeleteResetKeys");
    });
    equalKey.classList.add("theme2EqualKey", "theme2BgColorToggleEqualKey");
  } else {
    bodyElem.classList.add("theme3TextColor");
    sliderContainer.classList.add("theme3ToggleKeyContainer");
    toggleButton.classList.add("theme3BgColorToggleEqualKey");
    resultContainer.classList.add("theme3ScreenResultContainer");
    keysContainer.classList.add("theme3ToggleKeyContainer");
    generalKeys.forEach((genKey) => {
      genKey.classList.add("theme3GeneralKeys");
    });
    deleteResetKeys.forEach((delResKey) => {
      delResKey.classList.add("theme3DeleteResetKeys");
    });
    equalKey.classList.add("theme3EqualKey", "theme3BgColorToggleEqualKey");
  }
}

function removeAllClasses() {
  bodyElem.classList.remove("theme1TextColor");
  bodyElem.classList.remove("theme2TextColor");
  bodyElem.classList.remove("theme3TextColor");

  sliderContainer.classList.remove("theme1ToggleKeyContainer");
  sliderContainer.classList.remove("theme2ToggleKeyContainer");
  sliderContainer.classList.remove("theme3ToggleKeyContainer");

  toggleButton.classList.remove("theme1BgColorToggleEqualKey");
  toggleButton.classList.remove("theme2BgColorToggleEqualKey");
  toggleButton.classList.remove("theme3BgColorToggleEqualKey");

  resultContainer.classList.remove("theme1ScreenResultContainer");
  resultContainer.classList.remove("theme2ScreenResultContainer");
  resultContainer.classList.remove("theme3ScreenResultContainer");

  keysContainer.classList.remove("theme1ToggleKeyContainer");
  keysContainer.classList.remove("theme2ToggleKeyContainer");
  keysContainer.classList.remove("theme3ToggleKeyContainer");

  generalKeys.forEach((genKey) => {
    genKey.classList.remove("theme1GeneralKeys");
    genKey.classList.remove("theme2GeneralKeys");
    genKey.classList.remove("theme3GeneralKeys");
  });

  deleteResetKeys.forEach((delResKey) => {
    delResKey.classList.remove("theme1DeleteResetKeys");
    delResKey.classList.remove("theme2DeleteResetKeys");
    delResKey.classList.remove("theme3DeleteResetKeys");
  });

  equalKey.classList.remove("theme1EqualKey", "theme1BgColorToggleEqualKey");
  equalKey.classList.remove("theme2EqualKey", "theme2BgColorToggleEqualKey");
  equalKey.classList.remove("theme3EqualKey", "theme3BgColorToggleEqualKey");
}
