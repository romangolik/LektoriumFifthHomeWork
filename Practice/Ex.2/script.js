let array = new Array(10);
let randomDate = null;
let indexes = [...Array(10).keys()];

function shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

indexes = shuffle(indexes);

for (let i = 0; i < array.length; i++) {
    randomDate = new Date(Date.UTC(Math.floor(Math.random() * 3000), Math.floor(Math.random() * 11),  Math.floor(Math.random() * 31)));
    array[[indexes[i]]] = randomDate;
}

localStorage.setItem("arrayDate", JSON.stringify(array));
let stringArrayDate = JSON.parse(localStorage.getItem("arrayDate"));
let newArray = [];
for (let i = 0; i < stringArrayDate.length; i++)
{
    newArray[i] = new Date(stringArrayDate[i]);
}
newArray.sort(function(a,b) { return a-b } );
localStorage.setItem("sortArrayDate", JSON.stringify(newArray));

