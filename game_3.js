let button = document.getElementById("flip");
    let result = document.getElementById("result");

    function fnClick(event) {
      let num = Math.random();

      if (num < 0.5) {
        result.innerHTML = "You won! you can go home safe";
      } else {
        result.innerHTML = "You got the wrong side and crashed into the rock";
      }
    }
    
    button.addEventListener("click", fnClick);