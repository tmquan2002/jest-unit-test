import { solve } from "./solution.js";

export function printList() {
    var result = document.getElementById("result");
    result.innerHTML = "";
    let n = document.getElementById("numOfDigits").value;

    if (n < 1) {
        result.innerHTML = "Your input must be more than 0 ";
        return;
    }
    let list = [];
    list = solve(n);
    if (list.length > 0) {
        for (let i = 0; i < list.length - 2; i++) AddToResult(list[i]);
        result.innerHTML += list[list.length - 1];
    }
    else result.innerHTML = "None " + n + " digits integer satisfy the 3 conditions";
}
function AddToResult(item) {
    document.getElementById("result").innerHTML += item + ", ";
}
