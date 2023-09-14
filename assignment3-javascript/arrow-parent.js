const myNameIs={
    name:`Ishani`,
    regularFunction: function(){
console.log(this.name)
    },
    arrowFunction:()=>{
console.log(this.name)

    },
}
myNameIs.regularFunction()
myNameIs.arrowFunction()