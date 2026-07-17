

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

console.log('hola mundo');
console.log("Lista 1:", list1);
console.log("Lista 2:", list2);
console.log(countSheeps(list1));
console.log(countSheeps(list2));
// document.getElementById("sheepsCountResult").innerHTML = 'There are ' + countSheeps(list1) +' sheeps alive in list1';
// document.getElementById("sheepsCountResult").innerHTML += "<br>" + 'UPS!!! Wolfs eaten all Sheeps in list 2: ';
