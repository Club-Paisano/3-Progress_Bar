//jshint esversion: 6

const progressBar = document.querySelector(".progress");
const progressNumber = document.querySelector(".progressNumber");
//Add a listener to the document to check for scroll events
const initPage = () => {
  //Initialize the values correctly of the progress bar and progress number
  updateProgress();
  document.addEventListener("scroll", updateProgress);
};

const updateProgress = () => {
    //Get the position of the user on the document
    let scrollPos = Math.ceil(window.scrollY || window.scrollTop || document.getElementsByTagName("html")[0].scrollTop);

    //Get the maximum scroll value
    let scrollMax = Math.max( document.body.scrollHeight, document.body.offsetHeight, document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight) - window.innerHeight;

    //Convert the position from pixels to percentage: divide it by the max and *100
    let pixelToPercent = (scrollPos/scrollMax)*100;
    //Update the css variable "progress" of the progress bar
    document.documentElement.style.setProperty('--progress', pixelToPercent+"%");
    //Update the percentage number
    progressNumber.innerText = Math.round(pixelToPercent)+ "%";

};

initPage();
