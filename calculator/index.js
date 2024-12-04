document.addEventListener("DOMcontentLoaded", () => {
    const num1input = document.getElementById('num1')
    const num2input = document.getElementById('num2')
    const add = document.getElementById('add')
    const sub = document.getElementById('sub')
    const result = document.getElementById('result')

    function calculator(operation) {
        const num1text = parseFloat(num1input.value)
        const num2text = parseFloat(num2input.value)
        if (isNaN(num1text) || isNaN(num2text)) {
            result.textContent = "enter valid number"
        }
        let r
        switch (operation) {
            case 'add':
                r = num1text + num2text
                break;

            case 'sub':
                r = num1text - num2text
                break;
        }
        result.textContent = r
    }
    add.addEventListener('click', () => calculate('add'))
    sub.addEventListener('click', () => calculate('sub'))
})
