
let counter = 0;
let prevElement = null;
const delay = 500;

window.addEventListener('load', function () {
  const elementContainer = document.getElementById("flipper");
  const element = elementContainer.querySelector(".step" + counter);

  element.classList.add("set");

  setInterval(start, delay, elementContainer);
})


function start(elementContainer) {
  console.log(counter, elementContainer.children.length - 1)

  if (counter === elementContainer.length - 1) {
    console.log("reset")
    counter = 0;
    prevElement = null;
  }

  const currentStep = elementContainer.querySelector(".step" + counter);
  const clasCounter = counter + 1
  const nextStep = elementContainer.querySelector(".step" + clasCounter);

  console.log(counter)

  currentStep.classList.remove("set");
  currentStep.classList.add("down");

  if (nextStep) {
    nextStep.classList.add("set");
  }

  if (prevElement) {
    console.log(prevElement)
    prevElement.classList.remove("down");
  }

  prevElement = currentStep;
  counter++;

}
