function removeDups(arr) {
    return arr.filter((index, item) => {
        console.log(item,index,arr.indexOf(item,arr.indexOf(item) === index));
        return arr.indexOf(item) === index;
    });

}

console.log (removeDups([1,0,1,0]));
console.log (removeDups(["The","Big","Cat"]));
console.log (removeDups(["John","Taylor","John"]));