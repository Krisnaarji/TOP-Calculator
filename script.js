function plus (a, b) {

    console.log(a + " + "+ b +" = " )
    return  a + b;
}

function substract (a, b) {

    console.log(a + " - "+ b +" = " )
    return a - b;
}

function multiply (a, b) {

    console.log(a + " * "+ b +" = " )
    return a * b;
}

function devide (a, b) {

    console.log(a + " / "+ b +" = " )
    return a / b;
}


const buttons = document.querySelectorAll("button");

let numbA = [];
let numbB = [];
let operator = null;
let clickedButton = null;

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const id = button.id;

    if (id.startsWith("number")) {
      clickedButton = parseInt(id.replace("number", ""), 10);
      console.log("Number clicked:", clickedButton);

      if (operator === null) {
        numbA.push(clickedButton);
        console.log("Stored in a:", numbA);
      } else {
        numbB.push(clickedButton);
        console.log("Stored in b:", numbB);
      }

    } else if (id === "operator=") {
      const a = parseInt(numbA.join(""), 10);
      const b = parseInt(numbB.join(""), 10);

      let result;
      switch (operator) {
        case "+":
          result = plus(a, b);
          break;
        case "-":
          result = substract(a, b);
          break;
        case "*":
          result = multiply(a, b);
          break;
        case "/":
          result = devide(a, b);
          break;
        default:
          result = "Unknown operator";
      }

      console.log("Result:", result);

      // Reset or store result for next use
      numbA = [parseInt(result)];
      numbB = [];
      operator = null;

    } else if (id.startsWith("operator")) {
      operator = id.replace("operator", "");
      console.log("Operator selected:", operator);
    } else {
      console.log("Other button clicked:", id);
    }
  });
});





