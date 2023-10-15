var capitalcase = document.querySelector(".capital");
var uppercase = document.querySelector(".U_case");
var clear = document.querySelector(".clear");
var lowercase = document.querySelector(".L_case");
var alternatecase = document.querySelector(".a_case");
var result = document.querySelector(".result");

function alternateCase(text) {
    var resultText = "";
    for (var i = 0; i < text.length; i++) {
        if (i % 2 == 0) {
            resultText += text.charAt(i).toUpperCase();
        } else {
            resultText += text.charAt(i).toLowerCase();
        }
    }
    return resultText;
}

capitalcase.addEventListener('click', function () {
    var inputText = document.querySelector("#input_words").value;
    if (inputText.trim() === "") {
        result.textContent = "Error: No input text.";
        result.style.display = "block";

    } else {
        result.innerHTML = inputText;
        result.style.textTransform = "capitalize";
        result.style.display = "block";
    }
});

uppercase.addEventListener('click', function () {
    var inputText = document.querySelector("#input_words").value;
    if (inputText.trim() === "") {
        result.textContent = "Error: No input text.";
        result.style.display = "block";

    } else {
        result.innerHTML = inputText;
        result.style.textTransform = "uppercase";
        result.style.display = "block";

    }
});

lowercase.addEventListener('click', function () {
    var inputText = document.querySelector("#input_words").value;
    if (inputText.trim() === "") {
        result.textContent = "Error: No input text.";
        result.style.display = "block";

    } else {
        result.innerHTML = inputText;
        result.style.textTransform = "lowercase";
        result.style.display = "block";

    }
});

alternatecase.addEventListener('click', function () {
    var inputText = document.querySelector("#input_words").value;
    if (inputText.trim() === "") {
        result.textContent = "Error: No input text.";
        result.style.display = "block";

    } else {
        result.innerHTML = alternateCase(inputText);
        result.style.textTransform = "";
        result.style.display = "block";

    }
});

clear.addEventListener('click', function () {
    var inputWords = document.querySelector("#input_words");
    inputWords.value = ""; // Clear the input field
    result.textContent = ""; // Clear the result element
    result.style.display = "none";

});
