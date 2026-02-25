namespace Validations {

    const validateText = (text : string) : boolean => {
        return (text.length > 3 ) ? true : false;
    }

    export const validateDate = (myDate: Date) : boolean => {
        return isNaN( myDate.valueOf() ) ? false : true;
    }

}

// As validateText is NOT exported, will trigger errors
// console.log(Validations.text("Hi there"))

console.log( Validations.validateDate( new Date("2020-01-01") ))