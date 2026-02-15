(() => {

    interface addTwoNumbers {
        // Here's the signature of the function
        (a : number, b : number ) : number;
    }

    let addTwoNumbers : addTwoNumbers;

    addTwoNumbers = (a : number, b : number) => {
        return a + b;
    }
})()