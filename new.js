function totalVolumn() { // (...num)
    //console.log (num);
    //console.log (arguments); //arguments เรียกใช้งานเหมือน array not array (เป็นการแสดงค่า array)
    let sum = 0;

    
    //ในกรณที่ ไม่มีการกำหนดค่าพารามิเตอร์ใน array
    //let multi = 1;
    for(let i=0 ; i< arguments.length ; i++){
        sum += arguments[i][0] * arguments[i][1] * arguments[i][2];
        /*
        for( let j =0 ; j < arguments[i].length ;j++) {
            multi *= arguments[i][j];
        }
        sum += multi;
        multi = 1;
        */
    }
    return sum;
    

}

console.log (totalVolumn([4,2,4],[3,3,3],[1,1,2],[2,1,1]));
console.log (totalVolumn([2,2,2],[2,1,1]));
console.log (totalVolumn([1,1,1]));