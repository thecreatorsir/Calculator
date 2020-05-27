const input = document.querySelector("#screen");
let inputScreen = "";
document.querySelectorAll("button").forEach((item) => {
  item.addEventListener("click", (e) => {
    //converting symbol
    if (e.target.innerText == "X") {
      text = "*";
      inputScreen += text;
      input.value = inputScreen;
    }
    //clear screen
    else if (e.target.innerText == "C") {
      inputScreen = "";
      input.value = inputScreen;
    }
    //one step back
    else if (e.target.innerText == "<<") {
      inputScreen = inputScreen.slice(0, inputScreen.length - 1);
      input.value = inputScreen;
    }
    //evaluate
    else if (e.target.innerText == "=") {
      inputScreen = inputScreen.replace("=", "");
      inputScreen = eval(inputScreen);
      input.value = inputScreen;
    }
    //eval with pi
    else if (e.target.innerText == "π") {
      text = "3.14159";
      inputScreen += text;
      input.value = inputScreen;
    }
    //square a no.
    else if (e.target.innerText == "²") {
      text = inputScreen;
      inputScreen = inputScreen + "*" + text;
      inputScreen = eval(inputScreen);
      input.value = inputScreen;
    }
    //squareRoot of a no.
    else if (e.target.innerText == "√") {
      inputScreen = new String(Math.sqrt(parseInt(inputScreen)));
      input.value = inputScreen;
    }
    //continue to put in string
    else {
      text = e.target.innerText;
      inputScreen += text;
      input.value = inputScreen;
    }

    e.preventDefault();
  });
});
