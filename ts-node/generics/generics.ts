export const printObject = (argument: any) => {
    console.log( argument)
}

export function dubiousGenericFunction (argument : any) {
    return argument;
}

// Real generic function, uses the "T" to declare the type of the argument
export function genericFunction<T>(argument: T) : T {
    return argument;
}

// Here's a generic arrow function
export const genericFunctionArrow = <T>(argument: T) : T => {
    return argument;
}