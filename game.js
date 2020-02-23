let boxes = [25];
let colors = [25];
function start() {
    let click = 0;
    let bor = document.getElementById("bor");
    let tictac = [25];
    let p1 = 0;
    let p2 = 0;
    for (let i = 0; i < 25; i++) {
        colors[i] = 0;
    }

    //initializing the Board
    for (let i = 0; i < 25; i++) {
        let box = document.createElement("div");
        box.className = "box";
        boxes[i] = box;
        box.addEventListener("click", function () {
            if(tictac[i]==null || tictac[i]===25) {
                if (click === 0) {
                    box.innerHTML = '<span>X</span>';
                    tictac[i] = 0;
                    click = 1;
                    if (checkV(tictac, i) === true || checkH(tictac, i) === true || checkD(tictac, i) === true) {
                        p1++;
                        document.getElementById("p1").innerText = p1;
                    }
                } else {
                    box.innerHTML = '<span>O</span>';
                    tictac[i] = 1;
                    if (checkV(tictac, i) === true || checkH(tictac, i) === true || checkD(tictac, i) === true) {
                        p2++;
                        document.getElementById("p2").innerText = p2;
                    }
                    click = 0;
                }
            }
        });
        bor.append(box);
    }
}
//Checking Vertically
function checkV(tictac, p1) {
    if (tictac[p1] === tictac[p1 - 5] && tictac[p1] === tictac[p1 - 10]) {
        return finalCheck(p1, p1 - 5, p1 - 10);
    }
    if (tictac[p1] === tictac[p1 + 5] && tictac[p1] === tictac[p1 + 10]) {
        return finalCheck(p1, p1 + 5, p1 + 10);
    }
    if (tictac[p1] === tictac[p1 - 5] && tictac[p1] === tictac[p1 + 5]) {
        return finalCheck(p1, p1 + 5, p1 - 5);
    }
}

//Checking Horizontally
function checkH(tictac, p1) {
    console.log(p1 + 1, p1 + 2);
    if ((p1 + 1) % 5 !== 0 && (p1 + 2) % 5 !== 0) {
        if (tictac[p1] === tictac[p1 + 1] && tictac[p1] === tictac[p1 + 2]) {
            return finalCheck(p1, p1 + 1, p1 + 2);
        }
    }
    if ((p1 - 1) % 5 !== 0 && (p1 - 2) % 5 !== 0 && p1 % 5 !== 0 || p1 - 2 === 0) {
        if (tictac[p1] === tictac[p1 - 1] && tictac[p1] === tictac[p1 - 2]) {
            console.log("2227");
            return finalCheck(p1, p1 - 1, p1 - 2);
        }
    }
    if ((p1 + 1) % 5 !== 0 && (p1 - 1) % 5 !== 0 && p1 % 5 !==0) {
        if (tictac[p1] === tictac[p1 + 1] && tictac[p1] === tictac[p1 - 1]) {
            console.log("3337");
            return finalCheck(p1, p1 + 1, p1 - 1);
        }
    }
}

//Checking Diagonally
function checkD(tictac, p1) {
    //to the right
    if ((p1 + 1) % 5 !== 0 && (p1 + 2) % 5 !== 0) {
        if (tictac[p1] === tictac[p1 + 6] && tictac[p1] === tictac[p1 + 12]) {
            return finalCheck(p1, p1 + 6, p1 + 12);
        }
    }
    if ((p1 - 1) % 5 !== 0 && p1 % 5 !== 0 || (p1 - 2) === 0) {
        if (tictac[p1] === tictac[p1 - 6] && tictac[p1] === tictac[p1 - 12]) {
            return finalCheck(p1, p1 - 6, p1 - 12);
        }
    }
    if ((p1 + 1) % 5 !== 0 && p1 % 5 !== 0) {
        if (tictac[p1] === tictac[p1 + 6] && tictac[p1] === tictac[p1 - 6]) {
            return finalCheck(p1, p1 + 6, p1 - 6);
        }
    }
    // to the left
    if ((p1 + 1) % 5 !== 0 && (p1 + 2) % 5 !== 0) {
        if (tictac[p1] === tictac[p1 - 4] && tictac[p1] === tictac[p1 - 8]) {
            return finalCheck(p1, p1 - 4, p1 - 8);
        }
    }
    if ((p1 - 1) % 5 !== 0 && p1 % 5 !== 0 || p1 - 2 === 0) {
        if (tictac[p1] === tictac[p1 + 4] && tictac[p1] === tictac[p1 + 8]) {
            return finalCheck(p1, p1 + 4, p1 + 8);
        }
    }
    if ((p1 + 1) % 5 !== 0 && p1 % 5 !== 0) {
        if (tictac[p1] === tictac[p1 + 4] && tictac[p1] === tictac[p1 - 4]) {
            return finalCheck(p1, p1 - 4, p1 + 4);
        }
    }
}

//checking the 5x5 logic
function finalCheck(one, two, three) {
    if (colors[two] === 2 || colors[three] === 2) {
        return false;
    }
    console.log("two is" + colors[two], "one is " + colors[three]);
    if (colors[two] === 1 && colors[three] === 1) {
        return false;
    }

    if (colors[one] === 0) {
        boxes[one].style.backgroundColor = 'green';
        colors[one]++;
    } else {
        boxes[one].style.backgroundColor = 'red';
    }
    if (colors[two] === 0) {
        boxes[two].style.backgroundColor = 'green';
        colors[two]++;
    } else {
        boxes[two].style.backgroundColor = 'red';
    }
    if (colors[three] === 0) {
        boxes[three].style.backgroundColor = 'green';
        colors[three]++;
    } else {
        boxes[three].style.backgroundColor = 'red';
    }
    return true;
}

window.addEventListener('load', start, false);