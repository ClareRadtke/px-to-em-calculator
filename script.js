// em = required / parent 

var resultOutput = () => {
  var parentInput = document.getElementById("parent").value;
  var requiredInput = document.getElementById("required").value;
  var result = document.getElementById("result");
  if(!parentInput || !requiredInput) {
    alert("Please fill in all fields")
  } else {
    result.innerHTML = parentInput / requiredInput;
  }
}

var buttonClick = document.querySelector("button");
buttonClick.addEventListener('click', resultOutput);

//console.log(parentInput);

