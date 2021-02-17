function capToFront(str){
    let arr = str.split ("");
    let up = "";
    let low = "";

    //normal case
    for (let i = 0 ;i < arr.length; i++) {
        if(arr[i] == arr[i].toUpperCase()){
            up += arr[i];
        }
        else {
            low += arr[i];
        }
    }
    return up+low;
    

    /*
    for (let i of arr){
        if(i == i.toUpperCase()){ //เก็บตัวอักษรพิมพ์ใหญ่
            up += i;
        }
        else{ //เก็บตัวอักษรพิมพ์เล็ก
            low += i;
        }
    }
    return up+low;
    */
    
}

console.log (capToFront("hApPy"));
console.log (capToFront("moveMENT"));
console.log (capToFront("shOrtCAKE"));