function chiqar() {
    let A = prompt()
    let B = prompt()
    let C = prompt()

    if (A < B && B < C && A < C) {
        console.log(B + " " + A + " va " + C + " orasida joylashgan");
    }

    else {
        console.log(B + " " + A + " va " + C + " orasida joylashmagan");
    }
}


chiqar()