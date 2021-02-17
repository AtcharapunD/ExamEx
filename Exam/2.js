function highestDigit (num) { 
    /*
    let a = num.toString () ; // เป็นการเปลี่ยนค่าจาก num to String
    let max = a.charAt (0); // charAt เป็นการเริ่มต้นเอาตัวแรกสุดใน [0] มาใช้วน
    for (let i=1 ;i < a.length ;i++){ //ใน .length จะเป็นการนับตั้งแต่ [1] ไม่ใช่ [0]
        if (a.charAt(i) > max ){
            max = a.charAt(i);
        }
    }
    return max ;
    */

    let max = n%10;
    n = parseInt(n/10);
    while (n>0) {
        if (n%10 > max ){
            max = n%10;
        }
        n = paraeInt (n/10);
    }
    return max;
}

console.log (highestDigit(379));
console.log (highestDigit(2));
console.log (highestDigit(377041));