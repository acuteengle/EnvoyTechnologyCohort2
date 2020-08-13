function mult(a, b) {
    return a*b;
}

function awesome7(a) {
    if (a == 7) {
        return "Everything is Awesome!"
    } else {
        return "Everything ain't Awesome :/"
    }
}

function div5(a) {
    if (a%5 == 0) {
        return true;
    }
    else {
        return false;
    }
}

function name(a, b) {
    return ("hello, my name is " + a + " " + b);
}

console.log(mult(5,5));
console.log(awesome7(9));
console.log(div5(11));
console.log(name("Bennett", "Brown"));