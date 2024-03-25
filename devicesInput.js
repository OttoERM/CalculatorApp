import {addStyleClassesForTheme} from "./app.js";

const toggleButton = document.getElementById("toggleButton");
// console.log(toggleButton.getBoundingClientRect());

var initialToggleButtonXPos = 0;
var initialXPos = 0;

//Transition function for toggleSwitch movement
function transitionToggleSwitch() {
  toggleButton.classList.add("toggleSwitchTransition");

  let themeToApply = parseInt(
    window.getComputedStyle(toggleButton).getPropertyValue("margin-left")
  );

  if (themeToApply < 15) {
    toggleButton.style.marginLeft = "4px";
    addStyleClassesForTheme(1);
  } else if (themeToApply < 33) {
    toggleButton.style.marginLeft = "23px";
    addStyleClassesForTheme(2);
  } else {
    toggleButton.style.marginLeft = "42px";
    addStyleClassesForTheme(3);
  }
}

//MouseEvent
function updateToggleButtonPosition(e) {
  e.preventDefault();

  var marginLeftX = initialToggleButtonXPos + e.clientX - initialXPos;

  if (marginLeftX > 3 && marginLeftX < 43)
    toggleButton.style.marginLeft = marginLeftX + "px";
}

toggleButton.addEventListener("mousedown", (e) => {
  initialXPos = e.clientX;
  initialToggleButtonXPos = parseInt(
    window.getComputedStyle(toggleButton).getPropertyValue("margin-left") //return <value>px
  );
  toggleButton.classList.remove("toggleSwitchTransition");
  document.addEventListener("mousemove", updateToggleButtonPosition);
});

document.addEventListener("mouseup", () => {
  document.removeEventListener("mousemove", updateToggleButtonPosition);
  transitionToggleSwitch();
});

//TouchEvents
function updateToggleButtonPositionSmartphones(e) {
  // console.log(initialToggleButtonXPos, e.targetTouches[0].clientX, initialXPos);

  var marginLeftX =
    initialToggleButtonXPos + e.targetTouches[0].clientX - initialXPos;

  if (marginLeftX > 4 && marginLeftX < 42)
    toggleButton.style.marginLeft = marginLeftX + "px";
}

toggleButton.addEventListener(
  "touchstart",
  (e) => {
    // console.log(e);
    initialXPos = e.targetTouches[0].clientX;
    initialToggleButtonXPos = parseInt(
      window.getComputedStyle(toggleButton).getPropertyValue("margin-left") //return <value>px
    );
    toggleButton.classList.remove("toggleSwitchTransition");
    document.addEventListener(
      "touchmove",
      updateToggleButtonPositionSmartphones
    );
  },
  {passive: true}
);

document.addEventListener("touchend", () => {
  document.removeEventListener(
    "touchmove",
    updateToggleButtonPositionSmartphones
  );
  transitionToggleSwitch();
});
