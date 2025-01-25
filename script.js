const colors = ['blue', 'red', 'yellow', 'orange', 'purple', 'green'];
let isRolling = false;
let excludedColors = new Set();
let forcedDoubleColor = null;

document.addEventListener('keydown', (e) => {
    if (!isRolling) {
        const keyMap = {
            '1': 'blue',
            '2': 'red',
            '3': 'yellow',
            '4': 'orange',
            '5': 'purple',
            '6': 'green'
        };

        if (e.altKey && keyMap[e.key]) {
            if (excludedColors.has(keyMap[e.key])) {
                excludedColors.delete(keyMap[e.key]);
            } else {
                excludedColors.add(keyMap[e.key]);
            }
        } else if (e.shiftKey && keyMap[e.key]) {
            forcedDoubleColor = keyMap[e.key];
            rollDice();
        }
    }
});

// [Reszta funkcji JavaScript bez zmian]
