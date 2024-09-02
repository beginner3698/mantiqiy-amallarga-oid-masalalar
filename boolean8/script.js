function chiqar() {
    let A = prompt()
    let B = prompt() 

    let bolish1 = A % 2
    let bolish2 = B % 2

    if (bolish1 > 0 && bolish2 > 0) {
        console.log(A + " va " + B + " toq sonlar");
    }

    else if (bolish1 == 0 && bolish2 > 0) {
        console.log(A + " - juft son  " + B + " - toq son");
    }

    else if (bolish1 > 0 && bolish2 == 0) {
        console.log(A + " - toq son  " + B + " - juft son");
    }

    else {
        console.log(A + " va " + B + " juft sonlar");
    }
}


chiqar()