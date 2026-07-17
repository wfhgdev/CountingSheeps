

function countSheeps(list) {
    let sheepsAlive=0;
    for (let index=0; index<list.length; index++){
        if (list[index] === true){
            sheepsAlive++;
        }
    }
    if (sheepsAlive === 0){
        return "UPS!!! Wolfs eaten all Sheeps";
    }
    return 'There are ' + sheepsAlive + ' sheeps alive';
}

const list1 = [ true, true, true, false, true, true, true, true , true, false, true, false, true, false, false, true , true, true, true, true , false, false, true, true];
const list2 = [ false, false, false];

console.log("Lista 1:", list1);
console.log("Lista 2:", list2);
console.log(countSheeps(list1));
console.log(countSheeps(list2));
document.getElementById("showList1").innerHTML = "Lista 1: " + list1;
document.getElementById("showList2").innerHTML = "Lista 2: " + list2;
document.getElementById("list1Result").innerHTML = countSheeps(list1) + ' in list 1';
document.getElementById("list2Result").innerHTML = countSheeps(list2) + ' in list 2';
