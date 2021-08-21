// using onclick from html file
function generatePin() {
    const pin = Math.round(Math.random() * 10000);
    if (pin.toString().length === 4) {
        document.getElementById('generatePinDisplay').value = pin;
    }
    else {
        generatePin();
    }
}

// updating input display
function updateInputDisplay() {
    let inputDisplay = '';
    document.getElementById('keypad').addEventListener('click', function (e) {
        if (!isNaN(e.target.innerText)) {
            inputDisplay += e.target.innerText;
            document.getElementById('input-display').value = inputDisplay;
        }
        else if (e.target.innerText === 'C') {
            document.getElementById('input-display').value = '';
            inputDisplay = '';
        }
    })
}

function matchedPin() {
    const generatePin = Number(document.getElementById('generatePinDisplay').value);
    const inputPin = Number(document.getElementById('input-display').value);
    if (generatePin === inputPin) {
        document.getElementById('matched').style.display = 'block';
        document.getElementById('not-matched').style.display = 'none';
    }
    else {
        document.getElementById('not-matched').style.display = 'block';
        document.getElementById('matched').style.display = 'none';
    }
}


document.getElementById('not-matched').style.display = 'none';
document.getElementById('matched').style.display = 'none';

updateInputDisplay();

document.getElementById('submit-btn').addEventListener('click', function () {
    matchedPin();
    document.getElementById('input-display').value = '';
})