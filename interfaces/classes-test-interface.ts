(() => {

    interface Xmen {
        name : string;
        realName : string;

        // When a class extends from this interface, should implement this method.
        mutantPower ( id:number ) : string;
    }

    interface Human {
        age: number;
    }

    class Mutant implements Xmen, Human {
        public age: number;
        public name : string;
        public realName : string;

        constructor (
            age:number,
            name:string,
            realName:string
        ){
            this.age = age;
            this.name = name;
            this.realName = realName;
        }

        mutantPower(id: number): string {
            return `The mutant ${id} has the name ${this.name} and real name ${this.realName}`;
        }
    }

})()