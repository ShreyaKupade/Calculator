const display = document.getElementById('display');

function appendValue(val) { display.value += val; }
function clearDisplay() { display.value = ''; }
function deleteLast() { display.value = display.value.slice(0, -1); }

async function calculate() {
    try {
        const expression = display.value;
        const result = eval(expression); // Calculation
        display.value = result;

        // Backend को डेटा भेजना (MySQL में सेव करने के लिए)
        await fetch('http://localhost:5000/api/save', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ formula: expression, total: result })
        });
    } catch (err) {
        display.value = "Error";
    }
}
