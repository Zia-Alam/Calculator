const display = document.getElementById("show");

function AddToDisplay(input) {
    display.value += input;
}

function Clear () {
    display.value = ""
}

function Delete () {
    display.value = display.value.slice(0,-1)
}

function Calculate() {
    display.value = eval(display.value)
}

display.addEventListener('input', function (e) {
    const validCharacters = '0123456789+-*/=';
    const input = e.target.value;
    console.log(e.target.value)

    // Remove invalid characters
    e.target.value = input.split('').filter(char => validCharacters.includes(char)).join('');
});