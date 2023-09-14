class Country{
    constructor(name,independenceOn){
        this.name=name
        this.independenceOn=independenceOn
    }
    describe(){
        console.log(`${this.name} gots its independence on${this.independenceOn}.`)
    }
    
}

const india=new Country(`the country India`,1947)
india.describe()