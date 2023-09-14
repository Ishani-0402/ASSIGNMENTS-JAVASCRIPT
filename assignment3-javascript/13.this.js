function Country(name,independenceOn){
this.name=name
this.independenceOn=independenceOn
this.describe=function(){
    console.log(`${this.name}got its independence on${this.independenceOn}.`)
}
}
const india=new Country(`The country India`,1947)
india.describe()

//tn this context,this is bound to the instance of country, which is contained in Indian constant
//constructor function