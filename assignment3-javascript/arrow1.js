const people=[
    {name:`Alice`,age:30},
    {name:`Bob`,age:25},
    {name:`Charlie`,age:35},
    {name:`David`,age:30},

];
//sample data:an array of person objects

// filtering ppl >30
const olderThan30= people.filter(person => person.age>30);
console.log(`people older tha  30:`, olderThan30);