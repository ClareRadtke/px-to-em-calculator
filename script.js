// em = required / parent 


// {/* <body>

// <div>
//   <label for="parent">Parent size (px)</label><br>
//   <input type="number" id="parent">
//   <label for="required">Required size (px)</label><br>
//   <input type="number" id="required">

//   <button>Convert &#10227;</button>
// </div>

// <div>
//   <p>Result: <span id="result">0</span> em</p>
// </div> */}





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

