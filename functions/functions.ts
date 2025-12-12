(() => {

    const hero: string = "Flash"

    function returnName(): string {

        return hero;
    }

    const activateBatiSignal = (): string => {

        return "Batisignal Activated";
    }

    console.log(typeof activateBatiSignal);

    const heroName = returnName();

})()