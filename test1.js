​const array = [2, 4, 7, 5, 4, 3, 8];

const result = array.filter(function (ele , pos) {
    return array.indexOf(ele) == pos;
})

console.log("result" , result);
