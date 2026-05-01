const display = document.getElementById('display');

function appendValue(val) { 
    display.value += val; 
}

function clearDisplay() { 
    display.value = ''; 
}

function deleteLast() { 
    display.value = display.value.slice(0, -1); 
}

async function calculate() {
    try {
        const expression = display.value;
        const result = eval(expression);
        display.value = result;

        // डेटाबेस में सेव करने के लिए आपकी लाइव रेंडर लिंक
        await fetch('https://onrender.com', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ formula: expression, total: result })
        });
    } catch (err) {
        display.value = "Error";
    }
}
