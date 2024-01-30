const input = document.querySelector(".email");
const submit = document.querySelector("button");
const error = document.querySelector(".error-text");

function customValidation() {
    submit.addEventListener("click", function() {
        const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if (!re.test(input.value.toLowerCase())) {
            error.style.display = "block";
            input.style.borderColor = "hsl(354, 100%, 66%)";
        } else {
            input.style.borderColor = "#C2D3FF";
            error.style.display = "none";
        }
        input.value = "";
    });
}

customValidation();