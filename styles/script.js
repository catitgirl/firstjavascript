let op;
function func() {
    let result;
    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);
    switch (op) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num1 / num2;
            break;
    }
    document.getElementById("result").innerHTML = result;
}
function enterName() {
    const name = prompt('What is your name?', '');
    document.getElementById('nameArea').innerHTML = name ? ('Hello ' + name) : "no name :(";
}
 
function changeName() {
    if (confirm('Do you want to change your name?')) {
        enterName();
    }
}
 
enterName();
    
    