function chiqar() {
    let A = prompt()
    let B = prompt()

    let bolish1 = A % 2
    let bolish2 = B % 2

    if (bolish1 == 0 && bolish2 > 0) {
        console.log("Sonlarning faqat bittasi toq");
    }

    else if (bolish1 > 0 && bolish2 == 0) {
        console.log("Sonlarning faqat bittasi toq");
    }

    else {
        console.log("Ikkala son ham juft ");
    }
}


chiqar()