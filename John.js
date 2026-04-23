function fizzbuzz() {
    for(let i= 1 ; i <=50; i++) {
        console.log("Fizzbuzz");
    }else if (i % 3 === 0) {
        console.log("Fizz")
    }else if (i % 5 === 0) {
        console.log("Buzz")
    }else {
        console.log(i);
    }

}
fizzbuzz();