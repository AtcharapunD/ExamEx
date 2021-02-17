function highestDigit (x) {
    let a = x.toString();
    let b = a.split('');
    return Math.max.apply(null,b);
}

console.log(highestDigit(3456789));